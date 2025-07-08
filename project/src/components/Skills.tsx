import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Container, 
  GitBranch, 
  Shield, 
  Terminal, 
  BarChart3,
  Server,
  Database,
  Zap,
  Code
} from 'lucide-react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud & DevOps",
      skills: [
        { name: "Kubernetes", description: "Container orchestration and cluster management", level: 92 },
        { name: "Helm", description: "Kubernetes package management and templating", level: 88 },
        { name: "Docker", description: "Containerization and multi-stage builds", level: 90 },
        { name: "AWS", description: "EC2, S3, Lambda, EKS, CloudFormation", level: 85 },
        { name: "DigitalOcean", description: "Droplets, Kubernetes, Load Balancers", level: 88 },
        { name: "Ingress Controller (Nginx)", description: "Traffic routing and load balancing", level: 82 },
        { name: "Cloudflare", description: "CDN, DNS, and security services", level: 80 },
        { name: "RBAC", description: "Role-based access control", level: 85 },
        { name: "Ingress", description: "Kubernetes ingress management", level: 83 }
      ],
      color: "from-blue-500 to-cyan-500",
      borderColor: "border-cyan-500/20"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Monitoring & CI/CD",
      skills: [
        { name: "Grafana", description: "Dashboard creation and visualization", level: 92 },
        { name: "Prometheus", description: "Metrics collection and monitoring", level: 88 },
        { name: "SonarQube", description: "Code quality and security analysis", level: 85 },
        { name: "GitHub Actions", description: "CI/CD workflows and automation", level: 90 }
      ],
      color: "from-green-500 to-emerald-500",
      borderColor: "border-green-500/20"
    },
    {
      icon: <Terminal className="w-8 h-8" />,
      title: "Scripting & OS",
      skills: [
        { name: "Linux", description: "System administration and server management", level: 90 },
        { name: "Bash", description: "Shell scripting and automation", level: 88 },
        { name: "Python", description: "Automation scripts and DevOps tools", level: 82 },
        { name: "YAML", description: "Configuration management", level: 92 },
        { name: "JSON", description: "Data interchange and API configuration", level: 90 }
      ],
      color: "from-purple-500 to-violet-500",
      borderColor: "border-purple-500/20"
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
    <section id="skills" className="py-20 relative">
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
              Technical Arsenal
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className={`bg-white/10 dark:bg-black/40 backdrop-blur-md rounded-3xl p-6 border ${category.borderColor} relative overflow-hidden group`}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(0, 255, 255, 0.2)"
                }}
                onHoverStart={() => setHoveredSkill(category.title)}
                onHoverEnd={() => setHoveredSkill(null)}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 opacity-10">
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color}`} />
                </div>

                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className="group/skill"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + skillIndex * 0.1 }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-900 dark:text-white font-medium">{skill.name}</span>
                          <span className="text-cyan-400 text-sm">{skill.level}%</span>
                        </div>
                        
                        <div className="w-full bg-gray-300 dark:bg-gray-800 rounded-full h-2 mb-2">
                          <motion.div
                            className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.5, delay: 1 + skillIndex * 0.2 }}
                          />
                        </div>
                        
                        <motion.p 
                          className="text-gray-600 dark:text-gray-400 text-sm opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"
                          initial={{ height: 0 }}
                          animate={{ height: hoveredSkill === category.title ? 'auto' : 0 }}
                        >
                          {skill.description}
                        </motion.p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"
                />
              </motion.div>
            ))}
          </div>

          {/* Tech Stack Icons */}
          <motion.div 
            className="mt-16 text-center"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-700 dark:text-gray-300">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                'Kubernetes', 'Docker', 'AWS', 'Helm', 'Prometheus', 'Grafana', 
                'GitHub Actions', 'SonarQube', 'Linux', 'Python', 'Bash', 'YAML'
              ].map((tech, index) => (
                <motion.div
                  key={tech}
                  className="bg-white/10 dark:bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl border border-cyan-500/20 text-cyan-400 font-mono text-sm"
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: 'rgba(0, 255, 255, 0.1)',
                    boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)"
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + index * 0.05 }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;