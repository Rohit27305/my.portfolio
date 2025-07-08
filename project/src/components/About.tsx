import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Briefcase, Calendar, Award, Zap } from 'lucide-react';

const About = () => {
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

  const skills = [
    { name: 'Cloud Architecture', level: 95 },
    { name: 'Kubernetes', level: 90 },
    { name: 'CI/CD Pipelines', level: 88 },
    { name: 'Infrastructure as Code', level: 85 },
    { name: 'Monitoring & Observability', level: 92 }
  ];

  return (
    <section id="about" className="py-20 relative">
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
              About the Engineer
            </span>
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Card */}
            <motion.div 
              className="relative"
              variants={itemVariants}
            >
              <div className="bg-black/40 backdrop-blur-md rounded-3xl p-8 border border-cyan-500/20 relative overflow-hidden">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 20% 50%, rgba(0, 255, 255, 0.3) 0%, transparent 50%),
                                     radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
                                     radial-gradient(circle at 40% 80%, rgba(16, 185, 129, 0.3) 0%, transparent 50%)`
                  }} />
                </div>

                <div className="relative z-10">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 flex items-center justify-center text-4xl font-bold text-white shadow-2xl">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      RV
                    </motion.div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    DevOps Engineer
                  </h3>
                  
                  <p className="text-center text-gray-300 mb-6">
                    Passionate about cloud infrastructure, automation, and building scalable systems that power the future
                  </p>

                  {/* Info Cards */}
                  <div className="space-y-4">
                    {[
                      { icon: MapPin, label: 'Location', value: 'Greater Noida, India', color: 'text-cyan-400' },
                      { icon: Briefcase, label: 'Current Role', value: 'DevOps Intern at Makunai Global Technologies', color: 'text-purple-400' },
                      { icon: GraduationCap, label: 'Education', value: 'BSc Cloud Computing (CGPA: 9.2)', color: 'text-green-400' }
                    ].map((item, index) => (
                      <motion.div
                        key={item.label}
                        className="flex items-center p-3 bg-black/20 rounded-xl border border-white/10"
                        whileHover={{ scale: 1.02, backgroundColor: 'rgba(0, 255, 255, 0.05)' }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        <item.icon className={`mr-3 ${item.color}`} size={20} />
                        <div>
                          <p className="text-sm text-gray-400">{item.label}</p>
                          <p className="text-white font-medium">{item.value}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content & Skills */}
            <motion.div 
              className="space-y-8"
              variants={itemVariants}
            >
              <div className="bg-black/40 backdrop-blur-md rounded-3xl p-8 border border-purple-500/20">
                <h4 className="text-2xl font-bold mb-4 text-purple-400 flex items-center">
                  <Zap className="mr-3" />
                  Mission Statement
                </h4>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  I'm a self-motivated DevOps Engineer from Greater Noida, India, with extensive experience 
                  in cloud infrastructure, container orchestration, and CI/CD pipeline automation.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  My expertise spans across AWS, DigitalOcean, Kubernetes, Helm, GitHub Actions, and 
                  comprehensive monitoring solutions. I'm passionate about creating robust, scalable, 
                  and secure cloud workloads that drive innovation.
                </p>
              </div>

              {/* Skills Progress */}
              <div className="bg-black/40 backdrop-blur-md rounded-3xl p-8 border border-green-500/20">
                <h4 className="text-2xl font-bold mb-6 text-green-400 flex items-center">
                  <Award className="mr-3" />
                  Core Competencies
                </h4>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-cyan-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <motion.div
                          className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: 1 + index * 0.2 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;