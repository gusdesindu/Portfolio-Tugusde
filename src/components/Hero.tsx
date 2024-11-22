import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Instagram, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen pt-20 flex items-center">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-1 space-y-8"
        >
          <div className="space-y-4">
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
              Available for Work
            </span>
            <h1 className="text-5xl md:text-6xl font-bold">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">Tugusde</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600">
            Beginner Programmers & Exploring Web Development
            </h2>
          </div>
          
          <p className="text-gray-600 max-w-xl text-lg">
          Hello, I'm Tugusde, a student currently exploring the world of web development.
          </p>

          <div className="flex gap-4">
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
            >
              Contact Me
              <ArrowRight size={20} />
            </a>
            <a 
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gradient text-purple-600 rounded-full hover:bg-purple-50 transition-colors"
            >
              View Projects
            </a>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
              <Github className="text-gray-700" size={24} />
            </a>
            <a href="https://www.instagram.com/tugusde23/" target="_blank" rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
              <Instagram className="text-gray-700" size={24} />
            </a>
            <a href="https://wa.me/6289503705134"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
              <Phone className="text-gray-700" size={24} />
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-1 relative"
        >
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full blur-3xl opacity-20"
          />
          <div className="relative">
            <motion.div 
              animate={{ 
                y: [-10, 10, -10]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-[300px] h-[300px] mx-auto overflow-hidden rounded-full border-4 border-white shadow-2xl hidden md:block"
            >
              <motion.img 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                src="/pp.jpg"
                alt="Portfolio Hero"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}