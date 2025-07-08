import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, FileText, BookOpen, ChevronDown, Zap, Code, Cloud } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20 dark:opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }} />
      </div>

      <motion.div 
        className="container mx-auto px-6 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto">
          {/* Floating Icons */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-20 left-10 text-cyan-400"
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 360]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Cloud size={32} />
            </motion.div>
            <motion.div
              className="absolute top-32 right-16 text-purple-400"
              animate={{ 
                y: [0, 20, 0],
                rotate: [0, -360]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Code size={28} />
            </motion.div>
            <motion.div
              className="absolute bottom-32 left-20 text-green-400"
              animate={{ 
                y: [0, -15, 0],
                x: [0, 10, 0]
              }}
              transition={{ 
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Zap size={24} />
            </motion.div>
          </div>

          {/* Greeting */}
          <motion.div 
            className="mb-8"
            variants={itemVariants}
          >
            <span className="text-2xl md:text-3xl text-cyan-400 font-mono">
              👋 Welcome to the Cloudverse of
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Rohit Verma
            </span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.h2 
            className="text-2xl md:text-4xl mb-8 font-light"
            variants={itemVariants}
          >
            <span className="text-cyan-300">DevOps Engineer</span>
            <span className="text-gray-400 dark:text-gray-400 mx-4">|</span>
            <span className="text-purple-300">Automating the Future</span>
          </motion.h2>

          {/* Updated Tagline */}
          <motion.div 
            className="mb-12"
            variants={itemVariants}
          >
            <div className="bg-white/10 dark:bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-cyan-500/20 max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
                <span className="text-cyan-400">Architecting</span> Resilient Infrastructure • 
                <span className="text-purple-400"> Accelerating</span> Deployments • 
                <span className="text-green-400"> Automating</span> Cloud Operations
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-16"
            variants={itemVariants}
          >
            {[
              { icon: Github, label: 'GitHub', href: 'https://github.com/rohitverma27305', color: 'from-gray-600 to-gray-800' },
              { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/rohitverma27305', color: 'from-blue-600 to-blue-800' },
              { icon: BookOpen, label: 'Medium', href: 'https://medium.com/@rohitverma27305', color: 'from-green-600 to-green-800' },
              { icon: FileText, label: 'Resume', href: '/Rohit Verma Resume.pdf', color: 'from-purple-600 to-purple-800' }
            ].map((button, index) => (
              <motion.a
                key={button.label}
                href={button.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative inline-flex items-center px-8 py-4 bg-gradient-to-r ${button.color} text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl border border-white/10`}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(0, 255, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <button.icon className="mr-3" size={20} />
                {button.label}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            onClick={scrollToAbout}
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
            animate={{ 
              y: [0, 10, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{ scale: 1.1 }}
          >
            <ChevronDown size={32} />
          </motion.button>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;