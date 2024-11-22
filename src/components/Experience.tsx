import React from 'react';
import { motion } from 'framer-motion';
// import { Code2, Laptop, Gamepad2, Bike, Football } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Web Developer",
    company: "PT. Bamboomedia Cipta Persada",
    period: "9 September - 30 November 2024",
    description: [
      "Membantu pengembangan website untuk sistem manajemen rumah sakit",
      "Membuat dan mengelola database untuk penyimpanan data pasien",
      "Merancang tampilan antarmuka yang ramah pengguna",
      "Bekerja sama dengan tim IT dalam pengembangan sistem",
      "Mempelajari keamanan data dalam pengembangan web"
    ]
  },
  {
    title: "Research Developer",
    company: "PT. Bamboomedia Cipta Persada",
    period: "26 Februari - 18 Mei 2024",
    description: [
      "Membuat website katalog produk dari awal hingga selesai",
      "Mengembangkan tampilan website yang responsif",
      "Belajar dan menerapkan cara pengembangan web yang baik",
      "Berpartisipasi dalam tim untuk pengembangan proyek",
      "Mendapatkan pengalaman nyata dalam pembuatan website"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Pengalaman Kerja
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold text-purple-600">{exp.title}</h3>
              <p className="text-gray-600 mt-1">{exp.company}</p>
              <p className="text-sm text-gray-500 mt-1">{exp.period}</p>
              <ul className="mt-4 space-y-2">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Konteks Tambahan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pengalaman magang ini telah memberikan saya wawasan berharga dalam pengembangan web profesional,
            mulai dari solusi e-commerce hingga sistem kesehatan, memperkuat hasrat saya dalam menciptakan
            aplikasi web yang berdampak.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 