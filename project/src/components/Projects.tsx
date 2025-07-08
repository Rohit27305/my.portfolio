import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, BookOpen, Filter, X, Zap, Cloud, Shield, BarChart3 } from 'lucide-react';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filters = ['All', 'CI/CD', 'Monitoring', 'Cloud Infra', 'Security'];

  const projects = [
    {
      title: "End-to-End Microservice Deployment",
      description: "Complete CI/CD pipeline implementation with GitHub Actions, Docker, Kubernetes, Helm, and SonarQube for automated testing and deployment.",
      longDescription: "Built a comprehensive DevOps pipeline that automates the entire software delivery lifecycle. Features include automated testing, security scanning, container building, and deployment to Kubernetes clusters with zero-downtime deployments.",
      technologies: ["GitHub Actions", "Docker", "Kubernetes", "Helm", "SonarQube", "ArgoCD"],
      githubUrl: "https://github.com/rohitverma27305",
      liveUrl: "#",
      category: "CI/CD",
      icon: <Zap className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Automated testing and quality gates",
        "Container security scanning",
        "Multi-environment deployments",
        "Rollback capabilities"
      ]
    },
    {
      title: "Kubernetes-Based Chat App Deployment",
      description: "Three-tier scalable application deployment with React frontend, Node.js backend, MongoDB database, and Persistent Volumes for data persistence.",
      longDescription: "Designed and deployed a scalable chat application on Kubernetes with proper resource management, auto-scaling, and persistent storage. Implemented service mesh for enhanced security and observability.",
      technologies: ["React", "Node.js", "MongoDB", "Kubernetes", "Persistent Volumes", "Istio"],
      githubUrl: "https://github.com/rohitverma27305",
      liveUrl: "#",
      category: "Cloud Infra",
      icon: <Cloud className="w-6 h-6" />,
      color: "from-purple-500 to-violet-500",
      features: [
        "Auto-scaling based on metrics",
        "Persistent data storage",
        "Service mesh integration",
        "Load balancing"
      ]
    },
    {
      title: "Advanced Monitoring Stack",
      description: "Production-grade monitoring solution with Prometheus, Grafana, Loki, and custom alerting for comprehensive observability.",
      longDescription: "Implemented a complete observability stack for microservices monitoring. Features custom dashboards, intelligent alerting, log aggregation, and distributed tracing for enhanced system visibility.",
      technologies: ["Prometheus", "Grafana", "Loki", "Jaeger", "AlertManager", "Kubernetes"],
      githubUrl: "https://github.com/rohitverma27305",
      blogUrl: "https://medium.com/@rohitverma27305",
      category: "Monitoring",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "Real-time metrics collection",
        "Custom alerting rules",
        "Log aggregation and analysis",
        "Distributed tracing"
      ]
    },
    {
      title: "Security-First Infrastructure",
      description: "Implemented comprehensive security measures including RBAC, network policies, secret management, and compliance automation.",
      longDescription: "Built a security-hardened Kubernetes infrastructure with zero-trust networking, automated compliance checking, and comprehensive audit logging. Includes vulnerability scanning and remediation workflows.",
      technologies: ["Kubernetes", "Istio", "Falco", "OPA Gatekeeper", "Vault", "Trivy"],
      githubUrl: "https://github.com/rohitverma27305",
      liveUrl: "#",
      category: "Security",
      icon: <Shield className="w-6 h-6" />,
      color: "from-red-500 to-pink-500",
      features: [
        "Zero-trust networking",
        "Automated vulnerability scanning",
        "Policy-as-code implementation",
        "Compliance automation"
      ]
    },
    {
      title: "CI-Integrated SonarQube Setup for Multi-Branch Code Analysis",
      description: "Set up a scalable, production-ready instance of SonarQube on a Kubernetes cluster using Helm, and integrated it with GitHub repositories for automated multi-branch code analysis and quality checks.",
      longDescription: "Deployed SonarQube on Kubernetes using Helm charts with custom configurations for high availability and scalability. Integrated with GitHub Actions for automated code quality analysis across multiple branches with quality gates and pull request decorations.",
      technologies: ["Helm", "Kubernetes", "SonarQube", "GitHub Actions"],
      githubUrl: "https://github.com/rohitverma27305",
      blogUrl: "https://medium.com/@rohitverma27305",
      category: "CI/CD",
      icon: <Zap className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      features: [
        "Multi-branch code analysis",
        "Quality gate enforcement",
        "Pull request decoration",
        "Scalable Kubernetes deployment"
      ]
    }
  ];

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

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
    <section id="projects" className="py-20 relative">
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
              Project Showcase
            </span>
          </motion.h2>

          {/* Filter Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            variants={itemVariants}
          >
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedFilter === filter
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                    : 'bg-white/10 dark:bg-black/40 text-gray-700 dark:text-gray-300 border border-cyan-500/20 hover:border-cyan-500/40'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Filter className="w-4 h-4 inline mr-2" />
                {filter}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            layout
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="bg-white/10 dark:bg-black/40 backdrop-blur-md rounded-3xl p-6 border border-cyan-500/20 relative overflow-hidden group cursor-pointer"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 0 30px rgba(0, 255, 255, 0.2)"
                  }}
                  onClick={() => setSelectedProject(project)}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Background Gradient */}
                  <div className="absolute inset-0 opacity-10">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`} />
                  </div>

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center text-white`}>
                        {project.icon}
                      </div>
                      <span className="bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-black/40 dark:bg-black/40 text-gray-700 dark:text-gray-300 text-xs font-medium px-2.5 py-1 rounded-md border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
                          whileHover={{ scale: 1.05 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="mr-2" size={16} />
                          Code
                        </motion.a>
                      )}

                      {project.blogUrl && (
                        <motion.a
                          href={project.blogUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                          whileHover={{ scale: 1.05 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <BookOpen className="mr-2" size={16} />
                          Blog
                        </motion.a>
                      )}

                      <motion.button
                        className="inline-flex items-center px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                      >
                        <ExternalLink className="mr-2" size={16} />
                        Details
                      </motion.button>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white/10 dark:bg-black/60 backdrop-blur-md rounded-3xl p-8 max-w-2xl w-full border border-cyan-500/20 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>

              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${selectedProject.color} flex items-center justify-center text-white mr-4`}>
                  {selectedProject.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedProject.title}</h3>
                  <span className="text-cyan-400">{selectedProject.category}</span>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {selectedProject.longDescription}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {selectedProject.features?.map((feature: string, index: number) => (
                    <li key={index} className="text-gray-600 dark:text-gray-300 flex items-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.technologies.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
                  >
                    <Github className="mr-2" size={20} />
                    View Code
                  </a>
                )}
                {selectedProject.blogUrl && (
                  <a
                    href={selectedProject.blogUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                  >
                    <BookOpen className="mr-2" size={20} />
                    Read Blog
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;