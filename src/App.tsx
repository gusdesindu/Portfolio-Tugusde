import React from 'react';
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="bg-gray-50">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;

// Simpan status toggle di localStorage
function setToggleState(isActive) {
    localStorage.setItem('navToggleState', isActive);
}

// Ambil status toggle dari localStorage
function getToggleState() {
    return localStorage.getItem('navToggleState') === 'true';
}

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    // Fungsi untuk mengatur state menu
    function setMenuState(isOpen) {
        if (isOpen) {
            hamburger.classList.add('active');
            navMenu.classList.add('active');
        } else {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
        // Simpan state ke sessionStorage
        sessionStorage.setItem('menuState', isOpen);
    }
    
    // Cek state menu saat halaman dimuat
    const currentPath = window.location.pathname;
    const lastPath = sessionStorage.getItem('lastPath');
    
    // Jika path berbeda, tutup menu
    if (currentPath !== lastPath) {
        setMenuState(false);
    } else {
        // Jika path sama, kembalikan state sebelumnya
        const menuState = sessionStorage.getItem('menuState') === 'true';
        setMenuState(menuState);
    }
    
    // Simpan path saat ini
    sessionStorage.setItem('lastPath', currentPath);
    
    // Event listener untuk hamburger
    hamburger.addEventListener('click', function() {
        const isCurrentlyOpen = navMenu.classList.contains('active');
        setMenuState(!isCurrentlyOpen);
    });
    
    // Event listener untuk semua link navigasi
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            setMenuState(false);
        });
    });
});