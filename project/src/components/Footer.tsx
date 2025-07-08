import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, BookOpen, Code, Terminal, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/rohitverma27305",
      label: "GitHub",
      color: "hover:text-gray-400"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/rohitverma27305",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      href: "https://medium.com/@rohitverma27305",
      label: "Medium",
      color: "hover:text-green-400"
    },
    {
      icon: <Code className="w-5 h-5" />,
      href: "https://leetcode.com/rohitverma27305",
      label: "LeetCode",
      color: "hover:text-yellow-400"
    }
  ];

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 border-t border-cyan-500/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-2 text-2xl font-bold mb-4">
                <Terminal className="text-cyan-400" />
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Rohit.exe
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                DevOps Engineer passionate about cloud infrastructure, automation, 
                and building scalable systems that drive innovation in the digital age.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-black/40 dark:bg-black/40 backdrop-blur-md rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-400 ${link.color} transition-all duration-300 border border-white/10 hover:border-cyan-500/30`}
                    aria-label={link.label}
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <Code className="mr-2 text-purple-400" size={20} />
                Quick Navigation
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-600 dark:text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-1 h-1 bg-cyan-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <Terminal className="mr-2 text-green-400" size={20} />
                Get In Touch
              </h4>
              <div className="space-y-3 text-gray-600 dark:text-gray-400">
                <motion.a
                  href="mailto:rohitverma27305@gmail.com"
                  className="block hover:text-cyan-400 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  rohitverma27305@gmail.com
                </motion.a>
                <motion.a
                  href="tel:+919911564288"
                  className="block hover:text-cyan-400 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  +91 9911564288
                </motion.a>
                <motion.p
                  className="hover:text-cyan-400 transition-colors cursor-default"
                  whileHover={{ x: 5 }}
                >
                  Greater Noida, India
                </motion.p>
              </div>

              {/* Tech Stack */}
              <div className="mt-6">
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">Built with</p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'tsParticles'].map((tech, index) => (
                    <span
                      key={index}
                      className="bg-black/40 dark:bg-black/40 text-gray-600 dark:text-gray-400 text-xs px-2 py-1 rounded border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div 
            className="border-t border-cyan-500/20 pt-8 flex flex-col md:flex-row justify-between items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0 flex items-center">
              © 2025 Rohit Verma – Crafted with 
              <Heart className="mx-2 text-red-400" size={16} />
              and lots of ☕
            </p>
            
            <motion.button
              onClick={scrollToTop}
              className="flex items-center text-gray-600 dark:text-gray-400 hover:text-cyan-400 transition-colors text-sm group"
              whileHover={{ y: -2 }}
            >
              Back to top
              <ArrowUp className="ml-2 group-hover:translate-y-[-2px] transition-transform" size={16} />
            </motion.button>
          </motion.div>

          {/* Appreciation Note */}
          <motion.div
            className="text-center mt-8 pt-8 border-t border-cyan-500/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <p className="text-xs text-gray-500 dark:text-gray-600 italic">
              Special thanks to the tools, communities, and open-source projects that helped shape this portfolio.
            </p>
          </motion.div>

          {/* Animated Signature */}
          <motion.div
            className="text-center mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="text-xs text-gray-600 dark:text-gray-600 font-mono">
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Automating the future, one deployment at a time...
              </motion.span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;