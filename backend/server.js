const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security middleware
app.use(helmet());
app.use(morgan('combined'));

// CORS configuration
const corsOptions = {
  // origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Body parser middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message: {
    error: 'Too many contact form submissions, please try again later.',
    retryAfter: '15 minutes'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Apply rate limiting to contact form
app.use('/api/contact', limiter);

// Email transporter configuration
const createTransporter = () => {
  // Gmail configuration (you can change this to other providers)
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD // Use App Password for Gmail
    },
    secure: true,
    tls: {
      rejectUnauthorized: false
    }
  });
};

// Validation middleware
const validateContactForm = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters')
    .escape(),
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
  body('subject')
    .trim()
    .isLength({ min: 5, max: 200 })
    .withMessage('Subject must be between 5 and 200 characters')
    .escape(),
  body('message')
    .trim()
    .isLength({ min: 10, max: 2000 })
    .withMessage('Message must be between 10 and 2000 characters')
    .escape()
];

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    service: 'Portfolio Backend',
    version: '1.0.0'
  });
});

// Contact form endpoint
app.post('/api/contact', validateContactForm, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { name, email, subject, message } = req.body;

    // Create email transporter
    const transporter = createTransporter();

    // Verify transporter configuration
    await transporter.verify();

    // Email content for you (recipient)
    const mailOptionsToYou = {
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL || 'rohitverma27305@gmail.com',
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #333; border-bottom: 2px solid #00ffff; padding-bottom: 10px;">
            📧 New Contact Form Submission
          </h2>
          
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #555; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background: #fff; padding: 15px; border-left: 4px solid #00ffff; margin: 20px 0;">
            <h3 style="color: #555; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #666;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #888; font-size: 12px;">
            <p>This email was sent from your portfolio contact form.</p>
            <p>Timestamp: ${new Date().toLocaleString()}</p>
            <p>IP Address: ${req.ip}</p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
        
        Timestamp: ${new Date().toLocaleString()}
        IP Address: ${req.ip}
      `
    };

    // Auto-reply email to sender
    const mailOptionsToSender = {
      from: `"Rohit Verma - DevOps Engineer" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thank you for contacting me, ${name}!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #333; border-bottom: 2px solid #00ffff; padding-bottom: 10px;">
            🚀 Thank You for Reaching Out!
          </h2>
          
          <p>Hi <strong>${name}</strong>,</p>
          
          <p>Thank you for contacting me through my portfolio! I've received your message about "<em>${subject}</em>" and I appreciate you taking the time to reach out.</p>
          
          <div style="background: #f0f8ff; padding: 15px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #00ffff;">
            <h3 style="color: #555; margin-top: 0;">What's Next?</h3>
            <ul style="color: #666; line-height: 1.6;">
              <li>I'll review your message within 24 hours</li>
              <li>You'll receive a personalized response from me</li>
              <li>If it's about collaboration or opportunities, I'll provide detailed information</li>
            </ul>
          </div>
          
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #555; margin-top: 0;">About Me:</h3>
            <p style="color: #666; line-height: 1.6;">
              I'm a DevOps Engineer specializing in cloud infrastructure, Kubernetes, and automation. 
              I'm passionate about building scalable systems and helping organizations optimize their development workflows.
            </p>
          </div>
          
          <div style="margin-top: 30px;">
            <p>Best regards,<br>
            <strong>Rohit Verma</strong><br>
            DevOps Engineer<br>
            📧 rohitverma27305@gmail.com<br>
            🔗 <a href="https://linkedin.com/in/rohitverma27305">LinkedIn</a> | 
            <a href="https://github.com/rohitverma27305">GitHub</a> | 
            <a href="https://medium.com/@rohitverma27305">Medium</a>
            </p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #888; font-size: 12px;">
            <p>This is an automated response. Please don't reply to this email directly.</p>
          </div>
        </div>
      `,
      text: `
        Hi ${name},
        
        Thank you for contacting me through my portfolio! I've received your message about "${subject}" and I appreciate you taking the time to reach out.
        
        What's Next?
        - I'll review your message within 24 hours
        - You'll receive a personalized response from me
        - If it's about collaboration or opportunities, I'll provide detailed information
        
        About Me:
        I'm a DevOps Engineer specializing in cloud infrastructure, Kubernetes, and automation. 
        I'm passionate about building scalable systems and helping organizations optimize their development workflows.
        
        Best regards,
        Rohit Verma
        DevOps Engineer
        rohitverma27305@gmail.com
        
        This is an automated response. Please don't reply to this email directly.
      `
    };

    // Send emails
    await Promise.all([
      transporter.sendMail(mailOptionsToYou),
      transporter.sendMail(mailOptionsToSender)
    ]);

    console.log(`📧 Contact form submission from ${name} (${email}) processed successfully`);

    res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully! I\'ll get back to you within 24 hours.',
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('❌ Error processing contact form:', error);
    
    res.status(500).json({
      success: false,
      message: 'Sorry, there was an error sending your message. Please try again later or contact me directly.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found',
    availableEndpoints: [
      'GET /api/health',
      'POST /api/contact'
    ]
  });
});

// Global error handler
app.use((error, req, res, next) => {
  console.error('❌ Global error handler:', error);
  
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? error.message : undefined
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Portfolio backend server running on port ${PORT}`);
  console.log(`📧 Email service configured for: ${process.env.RECIPIENT_EMAIL || 'rohitverma27305@gmail.com'}`);
  console.log(`🌐 CORS enabled for: ${process.env.FRONTEND_URL || 'http://localhost:5173'}`);
});

module.exports = app;