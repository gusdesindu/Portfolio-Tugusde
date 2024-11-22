import React from 'react';
import { motion } from 'framer-motion';
import { Code2, BookOpen, Gamepad, Coffee } from 'lucide-react';

export default function About() {
  // Tambahkan fungsi untuk smooth scroll
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Tentang Saya</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pengembang web yang bersemangat dengan dasar yang kuat dalam teknologi modern
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Section - Photo and Description in one card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white p-6 rounded-lg shadow-md">
              {/* Photo */}
              <div className="relative w-48 h-48 mx-auto mb-6">
                <img
                  src="public/pp.jpg"
                  alt="Profile"
                  className="w-full h-full object-contain rounded-lg shadow-md"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-lg" />
              </div>
              
              {/* Name and Description */}
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">I.B.Gede Ambara Sindu Negara</h3>
                <p className="text-gray-600 mb-6">
                Saya adalah seorang programmer pemula yang sedang mendalami pengembangan aplikasi web menggunakan Laravel Filament.
                  Sebagai pembelajar yang bersemangat, saya percaya teknologi memainkan peran penting  menyelesaikan tantangan dunia nyata. 
                </p>
                <div className="flex gap-4 justify-center">
                  <button 
                    onClick={scrollToContact}
                    className="px-6 py-2 border border-purple-600 text-purple-600 rounded-full hover:bg-purple-50 transition-colors"
                  >
                    Hubungi Saya
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Section - Skills adjusted for students */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center">
              <div className="flex justify-center items-center w-full mb-4">
                <Code2 className="w-12 h-12 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Pemrograman</h3>
              <p className="text-gray-600 text-center">
                Belajar dan mengembangkan keterampilan HTML, CSS, dan JavaScript dasar
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center">
              <div className="flex justify-center items-center w-full mb-4">
                <BookOpen className="w-12 h-12 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Pendidikan</h3>
              <p className="text-gray-600 text-center">
                Siswa SMK Negeri 1 Denpasar jurusan Rekayasa Perangkat Lunak
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center">
              <div className="flex justify-center items-center w-full mb-4">
                <Gamepad className="w-12 h-12 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Hobi</h3>
              <p className="text-gray-600 text-center">
                Gemar bermain sepak bola dan bermain game di waktu luang
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center">
              <div className="flex justify-center items-center w-full mb-4">
                <Coffee className="w-12 h-12 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Kerja Tim</h3>
              <p className="text-gray-600 text-center">
                Aktif berkolaborasi dalam proyek kelompok sekolah
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 