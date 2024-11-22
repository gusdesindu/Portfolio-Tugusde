import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi untuk menutup menu mobile
  const handleClick = () => {
    setIsOpen(false);
  };

  // Fungsi scroll untuk semua section
  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
      
      handleClick(); // Tutup menu mobile setelah klik
    }
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm"
    >
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-2xl font-bold text-gradient"
        >
          Tugusde
        </motion.div>
        
        {/* Toggle Button untuk Mobile */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden z-50"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu Desktop dalam Bahasa Inggris */}
        <div className="hidden lg:flex items-center gap-8">
          <a 
            href="#hero" 
            onClick={scrollToSection('hero')} 
            className="hover:text-purple-600 transition-colors font-medium"
          >
            Home
          </a>
          <a 
            href="#about" 
            onClick={scrollToSection('about')} 
            className="hover:text-purple-600 transition-colors font-medium"
          >
            About
          </a>
          <a 
            href="#skills" 
            onClick={scrollToSection('skills')} 
            className="hover:text-purple-600 transition-colors font-medium"
          >
            Skills
          </a>
          <a 
            href="#projects" 
            onClick={scrollToSection('projects')} 
            className="hover:text-purple-600 transition-colors font-medium"
          >
            Projects
          </a>
          <a 
            href="#experience" 
            onClick={scrollToSection('experience')} 
            className="hover:text-purple-600 transition-colors font-medium"
          >
            Experience
          </a>
          <a 
            href="#contact" 
            onClick={scrollToSection('contact')} 
            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:from-purple-700 hover:to-blue-700 transition-all"
          >
            Contact
          </a>
        </div>

        {/* Menu Mobile yang Diperbaiki */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed top-0 right-0 h-screen w-64 bg-white shadow-lg lg:hidden"
          >
            <div className="flex flex-col pt-20 px-6 gap-6">
              <a 
                href="#hero" 
                onClick={scrollToSection('hero')} 
                className="text-lg hover:text-purple-600 transition-colors"
              >
                Home
              </a>
              <a 
                href="#about" 
                onClick={scrollToSection('about')} 
                className="text-lg hover:text-purple-600 transition-colors"
              >
                About
              </a>
              <a 
                href="#skills" 
                onClick={scrollToSection('skills')} 
                className="text-lg hover:text-purple-600 transition-colors"
              >
                Skill
              </a>
              <a 
                href="#projects" 
                onClick={scrollToSection('projects')} 
                className="text-lg hover:text-purple-600 transition-colors"
              >
                Project
              </a>
              <a 
                href="#experience" 
                onClick={scrollToSection('experience')} 
                className="text-lg hover:text-purple-600 transition-colors"
              >
                Pengalaman
              </a>
              <a 
                href="#contact" 
                onClick={scrollToSection('contact')} 
                className="text-lg px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:from-purple-700 hover:to-blue-700 transition-all text-center"
              >
                Kontak
              </a>
            </div>
          </motion.div>
        )}

        {/* Overlay saat menu mobile terbuka */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClick}
            className="fixed inset-0 bg-black/20 lg:hidden"
            style={{ zIndex: 40 }}
          />
        )}
      </nav>
    </motion.header>
  );
}
