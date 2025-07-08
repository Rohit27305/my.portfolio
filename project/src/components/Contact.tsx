import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, MessageSquare, User, FileText } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [submitError, setSubmitError] = useState('');

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    
    // Clear submit error
    if (submitError) {
      setSubmitError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    setSubmitError('');
    
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      
    } catch (error) {
      console.error('Failed to send message:', error);
      setSubmitError(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "rohitverma27305@gmail.com",
      href: "mailto:rohitverma27305@gmail.com",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 9911564288",
      href: "tel:+919911564288",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Greater Noida, India",
      href: "#",
      color: "from-purple-500 to-violet-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-5xl font-bold text-center mb-16"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Contact the Engineer
            </span>
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <div className="bg-white/10 dark:bg-black/40 backdrop-blur-md rounded-3xl p-8 border border-cyan-500/20 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-purple-500/30" />
                </div>

                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                    <MessageSquare className="mr-3 text-cyan-400" />
                    Let's Connect
                  </h3>
                  
                  <div className="space-y-6 mb-8">
                    {contactInfo.map((info, index) => (
                      <motion.div 
                        key={index} 
                        className="group"
                        whileHover={{ x: 10 }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        <div className="flex items-center p-4 bg-black/20 dark:bg-black/20 rounded-2xl border border-white/10 group-hover:border-cyan-500/30 transition-all duration-300">
                          <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center text-white mr-4`}>
                            {info.icon}
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">{info.label}</p>
                            {info.href !== "#" ? (
                              <a
                                href={info.href}
                                className="text-gray-900 dark:text-white hover:text-cyan-400 transition-colors font-medium"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-gray-900 dark:text-white font-medium">{info.value}</p>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-6 border border-cyan-500/20">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                      <CheckCircle className="mr-2 text-green-400" />
                      Ready to Collaborate!
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      I'm always interested in discussing new opportunities, innovative projects, 
                      and collaborating with fellow developers and DevOps enthusiasts. Let's build 
                      something amazing together!
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-white/10 dark:bg-black/40 backdrop-blur-md rounded-3xl p-8 border border-purple-500/20 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30" />
                </div>

                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                    <Send className="mr-3 text-purple-400" />
                    Send Message
                  </h3>

                  {isSubmitted ? (
                    <motion.div 
                      className="text-center py-12"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
                      </motion.div>
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Message Sent Successfully!
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Thank you for reaching out. I'll get back to you within 24 hours!
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {submitError && (
                        <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 text-red-400">
                          {submitError}
                        </div>
                      )}

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="relative">
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            <User className="inline mr-2" size={16} />
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 bg-white/20 dark:bg-black/40 backdrop-blur-md border ${
                              errors.name ? 'border-red-500' : 'border-white/20'
                            } rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400`}
                            placeholder="Your Name"
                          />
                          {errors.name && (
                            <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                          )}
                        </div>
                        
                        <div className="relative">
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            <Mail className="inline mr-2" size={16} />
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 bg-white/20 dark:bg-black/40 backdrop-blur-md border ${
                              errors.email ? 'border-red-500' : 'border-white/20'
                            } rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400`}
                            placeholder="your.email@example.com"
                          />
                          {errors.email && (
                            <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                          )}
                        </div>
                      </div>

                      <div className="relative">
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          <FileText className="inline mr-2" size={16} />
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 bg-white/20 dark:bg-black/40 backdrop-blur-md border ${
                            errors.subject ? 'border-red-500' : 'border-white/20'
                          } rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400`}
                          placeholder="What's this about?"
                        />
                        {errors.subject && (
                          <p className="text-red-400 text-sm mt-1">{errors.subject}</p>
                        )}
                      </div>

                      <div className="relative">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          <MessageSquare className="inline mr-2" size={16} />
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className={`w-full px-4 py-3 bg-white/20 dark:bg-black/40 backdrop-blur-md border ${
                            errors.message ? 'border-red-500' : 'border-white/20'
                          } rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400`}
                          placeholder="Tell me about your project or how we can work together..."
                        />
                        {errors.message && (
                          <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                        )}
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        whileHover={{ boxShadow: "0 0 30px rgba(0, 255, 255, 0.3)" }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {isLoading ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                          />
                        ) : (
                          <>
                            <Send className="mr-2" size={20} />
                            Send Message
                          </>
                        )}
                      </motion.button>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;