import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ExternalLink, BookOpen, Clock, Tag } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "Mastering Helm: Advanced Templating and Best Practices",
      excerpt: "Deep dive into Helm templating, chart versioning, and production deployment strategies for Kubernetes applications.",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["Helm", "Kubernetes", "DevOps"],
      url: "https://medium.com/@rohitverma27305",
      featured: true,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Building Robust CI/CD Pipelines with GitHub Actions",
      excerpt: "Complete guide to setting up automated testing, building, and deployment workflows using GitHub Actions and Docker.",
      date: "2024-01-10",
      readTime: "12 min read",
      tags: ["CI/CD", "GitHub Actions", "Docker"],
      url: "https://medium.com/@rohitverma27305",
      featured: true,
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Monitoring Kubernetes Clusters with Prometheus and Grafana",
      excerpt: "Comprehensive monitoring setup for Kubernetes clusters including custom metrics, alerting, and dashboard creation.",
      date: "2024-01-05",
      readTime: "10 min read",
      tags: ["Monitoring", "Prometheus", "Grafana"],
      url: "https://medium.com/@rohitverma27305",
      featured: false,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Securing Kubernetes Workloads: RBAC and Network Policies",
      excerpt: "Essential security practices for Kubernetes including Role-Based Access Control and network segmentation strategies.",
      date: "2023-12-28",
      readTime: "15 min read",
      tags: ["Security", "Kubernetes", "RBAC"],
      url: "https://medium.com/@rohitverma27305",
      featured: false,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Infrastructure as Code with Terraform and AWS",
      excerpt: "Learn how to manage cloud infrastructure using Terraform, including best practices for state management and modular design.",
      date: "2023-12-20",
      readTime: "11 min read",
      tags: ["Terraform", "AWS", "IaC"],
      url: "https://medium.com/@rohitverma27305",
      featured: false,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Container Security: Scanning and Hardening Docker Images",
      excerpt: "Comprehensive guide to securing containerized applications, from image scanning to runtime security policies.",
      date: "2023-12-15",
      readTime: "9 min read",
      tags: ["Security", "Docker", "Containers"],
      url: "https://medium.com/@rohitverma27305",
      featured: false,
      color: "from-indigo-500 to-purple-500"
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

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section id="blog" className="py-20 relative">
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
              Knowledge Base
            </span>
          </motion.h2>

          {/* Featured Posts */}
          <motion.div 
            className="mb-16"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-8 flex items-center">
              <BookOpen className="mr-3" />
              Featured Articles
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={index}
                  className="bg-black/40 backdrop-blur-md rounded-3xl p-6 border border-cyan-500/20 relative overflow-hidden group"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 0 30px rgba(0, 255, 255, 0.2)"
                  }}
                  variants={itemVariants}
                >
                  {/* Background Gradient */}
                  <div className="absolute inset-0 opacity-10">
                    <div className={`absolute inset-0 bg-gradient-to-br ${post.color}`} />
                  </div>

                  <div className="relative z-10">
                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Calendar className="mr-2" size={16} />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-2" size={16} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors leading-tight">
                      {post.title}
                    </h3>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-cyan-400/20 text-cyan-400 text-xs font-medium px-2.5 py-1 rounded-md flex items-center"
                        >
                          <Tag className="mr-1" size={12} />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <motion.a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors group"
                      whileHover={{ x: 5 }}
                    >
                      Read Full Article
                      <ExternalLink className="ml-2 group-hover:scale-110 transition-transform" size={16} />
                    </motion.a>
                  </div>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"
                  />
                </motion.article>
              ))}
            </div>
          </motion.div>

          {/* Regular Posts Grid */}
          <motion.div 
            className="mb-12"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-purple-400 mb-8 flex items-center">
              <BookOpen className="mr-3" />
              Recent Posts
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={index}
                  className="bg-black/40 backdrop-blur-md rounded-2xl p-5 border border-purple-500/20 relative overflow-hidden group"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 0 20px rgba(147, 51, 234, 0.2)"
                  }}
                  variants={itemVariants}
                >
                  <div className="relative z-10">
                    <div className="flex items-center text-sm text-gray-400 mb-3">
                      <Calendar className="mr-2" size={14} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <span className="mx-2">•</span>
                      <Clock className="mr-1" size={14} />
                      <span>{post.readTime}</span>
                    </div>

                    <h4 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition-colors leading-tight">
                      {post.title}
                    </h4>

                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {post.excerpt.substring(0, 100)}...
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-purple-400/20 text-purple-400 text-xs font-medium px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
                    >
                      Read More
                      <ExternalLink className="ml-1" size={14} />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="text-center"
            variants={itemVariants}
          >
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-md rounded-3xl p-8 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                Want to read more?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Follow my journey in DevOps, cloud computing, and automation. I regularly share insights, 
                tutorials, and best practices from real-world projects.
              </p>
              <motion.a
                href="https://medium.com/@rohitverma27305"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-green-800 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                whileHover={{ 
                  boxShadow: "0 0 30px rgba(34, 197, 94, 0.3)"
                }}
              >
                <BookOpen className="mr-3" size={20} />
                Follow on Medium
                <ExternalLink className="ml-2" size={16} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;