import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Trophy, Star, ChevronLeft, ChevronRight, Calendar, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const certifications = [
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      description: "Foundational understanding of AWS Cloud concepts, services, and terminology",
      skills: ["Cloud Computing", "AWS Services", "Security", "Pricing"],
      icon: <Award className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      verified: true
    },
    {
      title: "Introduction to Kubernetes",
      issuer: "Linux Foundation",
      date: "2024",
      description: "Comprehensive understanding of Kubernetes architecture and container orchestration",
      skills: ["Kubernetes", "Container Orchestration", "Pod Management", "Services"],
      icon: <Award className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-500",
      verified: true
    },
    {
      title: "Docker Certified Associate",
      issuer: "Docker Inc.",
      date: "2023",
      description: "Advanced containerization concepts and Docker best practices",
      skills: ["Docker", "Containerization", "Image Management", "Networking"],
      icon: <Award className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      verified: true
    },
    {
      title: "Database Programming in MySQL",
      issuer: "Oracle Cloud",
      date: "2024",
      description: "Advanced MySQL database programming and optimization techniques",
      skills: ["MySQL", "Database Design", "Query Optimization", "Stored Procedures"],
      icon: <Award className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      verified: true
    }
  ];

  const achievements = [
    {
      title: "Smart India Hackathon 2023 Finalist",
      description: "Developed innovative solutions for government challenges, reaching national finals among 10,000+ teams",
      icon: <Trophy className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      date: "2023",
      impact: "Top 1% nationwide",
      category: "Competition"
    },
    {
      title: "Azure to DigitalOcean Migration Success",
      description: "Led infrastructure migration achieving 20% cost reduction while maintaining 99.9% uptime",
      icon: <Star className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      date: "2024",
      impact: "20% cost reduction",
      category: "Project"
    },
    {
      title: "DevOps Excellence Award",
      description: "Recognized for outstanding contribution to automation and infrastructure optimization",
      icon: <Award className="w-8 h-8" />,
      color: "from-purple-500 to-violet-500",
      date: "2024",
      impact: "Team recognition",
      category: "Award"
    },
    {
      title: "Open Source Contributor",
      description: "Active contributor to Kubernetes and Helm projects with multiple merged PRs",
      icon: <Star className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      date: "2023-2024",
      impact: "5+ merged PRs",
      category: "Contribution"
    },
    {
      title: "Portfolio Excellence Recognition",
      description: "Recognized for building a highly functional and visually impressive DevOps portfolio site",
      icon: <Award className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      date: "2024",
      impact: "Technical excellence",
      category: "Appreciation"
    }
  ];

  const nextCertification = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certifications.length);
  };

  const prevCertification = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + certifications.length) % certifications.length);
  };

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
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-7xl mx-auto"
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
              Certifications & Achievements
            </span>
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Certifications Carousel */}
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-cyan-400 mb-8 flex items-center">
                <Award className="mr-3" size={32} />
                Professional Certifications
              </h3>
              
              <div className="relative">
                <div className="bg-white/10 dark:bg-black/40 backdrop-blur-md rounded-3xl p-8 border border-cyan-500/20 min-h-[400px] relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className={`absolute inset-0 bg-gradient-to-br ${certifications[currentIndex].color}`} />
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10"
                    >
                      <div className="flex items-start justify-between mb-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${certifications[currentIndex].color} flex items-center justify-center text-white`}>
                          {certifications[currentIndex].icon}
                        </div>
                        {certifications[currentIndex].verified && (
                          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                            <Star className="mr-1" size={14} />
                            Verified
                          </div>
                        )}
                      </div>

                      <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {certifications[currentIndex].title}
                      </h4>
                      
                      <p className="text-cyan-400 mb-2 font-medium">
                        {certifications[currentIndex].issuer}
                      </p>
                      
                      <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                        <Calendar className="mr-2" size={16} />
                        <span>{certifications[currentIndex].date}</span>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {certifications[currentIndex].description}
                      </p>

                      <div className="mb-6">
                        <h5 className="text-gray-900 dark:text-white font-semibold mb-3">Key Skills</h5>
                        <div className="flex flex-wrap gap-2">
                          {certifications[currentIndex].skills.map((skill, index) => (
                            <span
                              key={index}
                              className="bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation */}
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <motion.button
                      onClick={prevCertification}
                      className="w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-400/20 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ChevronLeft size={20} />
                    </motion.button>
                    <motion.button
                      onClick={nextCertification}
                      className="w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-400/20 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ChevronRight size={20} />
                    </motion.button>
                  </div>

                  {/* Indicators */}
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    {certifications.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentIndex ? 'bg-cyan-400' : 'bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Achievements Grid */}
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-purple-400 mb-8 flex items-center">
                <Trophy className="mr-3" size={32} />
                Key Achievements
              </h3>
              
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/10 dark:bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-purple-500/20 relative overflow-hidden group"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 0 20px rgba(147, 51, 234, 0.2)"
                    }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {/* Background Gradient */}
                    <div className="absolute inset-0 opacity-10">
                      <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color}`} />
                    </div>

                    <div className="relative z-10 flex items-start">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${achievement.color} flex items-center justify-center text-white mr-4 flex-shrink-0`}>
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-purple-400 transition-colors">
                            {achievement.title}
                          </h4>
                          <div className="flex flex-col items-end">
                            <span className="bg-purple-400/20 text-purple-400 px-2 py-1 rounded text-xs font-medium">
                              {achievement.category}
                            </span>
                            <span className="text-gray-600 dark:text-gray-400 text-sm mt-1">{achievement.date}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                          {achievement.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-cyan-400 font-medium text-sm">
                            Impact: {achievement.impact}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div 
            className="mt-16 grid md:grid-cols-4 gap-6"
            variants={itemVariants}
          >
            {[
              { label: "Certifications", value: "4+", icon: <Award className="w-6 h-6" /> },
              { label: "Projects Completed", value: "15+", icon: <Star className="w-6 h-6" /> },
              { label: "Years Experience", value: "2+", icon: <Trophy className="w-6 h-6" /> },
              { label: "Technologies Mastered", value: "20+", icon: <Award className="w-6 h-6" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/10 dark:bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-cyan-500/20 text-center"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <div className="text-cyan-400 mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;