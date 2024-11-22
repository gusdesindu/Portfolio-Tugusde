import React from 'react';
import { Github, Instagram, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black py-12 mt-20 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Kolom 1 - About */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">
              Tugusde
            </h3>
            <p className="text-gray-400">
              A passionate web developer focused on creating interactive and responsive web applications.
            </p>
          </div>

          {/* Kolom 2 - Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Kolom 3 - Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Connect With Me</h3>
            <div className="flex gap-4">
              <a 
                href="https://github.com/gusdesindu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Github size={20} className="text-white" />
              </a>
              <a 
                href="https://www.instagram.com/tugusde23/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Instagram size={20} className="text-white" />
              </a>
              <a 
                href="https://wa.me/6289503705134"
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Phone size={20} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Tugusde. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 