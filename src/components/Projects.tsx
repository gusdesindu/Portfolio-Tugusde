import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Toko Online UMKM",
    description: "Mengembangkan platform toko online untuk membantu UMKM memasarkan produk mereka secara digital. Dibuat menggunakan HTML, CSS, dan JavaScript.",
    image: "/umkm.png",
    tags: ["HTML", "JavaScript", "CSS"],
    github: "https://github.com/gusdesindu/Project-W.B.Wahyu",
    demo: ""
  },
  {
    title: "Katalog Produk Digital",
    description: "Sistem katalog digital yang memungkinkan pengguna untuk mengelola dan menampilkan produk secara terorganisir. Menggunakan PHP dan MySQL untuk manajemen data.",
    image: "/php.png",
    tags: ["PHP", "CSS", "MySQL"],
    github: "https://github.com/gusdesindu/PHP-Katalog",
    demo: "#"
  },
  {
    title: "Portal Berita Online",
    description: "Pengembangan website portal berita yang memungkinkan pengguna untuk membaca dan mencari berita terkini. Dibangun dengan PHP dan sistem manajemen konten.",
    image: "/tugas.png",
    tags: ["PHP", "CSS"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Sistem Praktik Dokter",
    description: "Mengembangkan sistem informasi untuk praktik dokter yang mencakup manajemen pasien, jadwal konsultasi, dan riwayat medis. Dibangun menggunakan PHP dan MySQL dengan fokus pada keamanan data medis dan kemudahan penggunaan.",
    image: "/praktik.png",
    tags: ["PHP", "MySQL", "Laravel",],
    github: "https://github.com/gusdesindu/sistem-praktik-dokter",
    demo: "#"
  },
  {
    title: "Desain Website Modern",
    description: "Merancang antarmuka website modern menggunakan Figma dengan fokus pada pengalaman pengguna (UX) dan tampilan visual yang menarik (UI). Proyek ini mencakup desain responsif untuk berbagai perangkat dan prototype interaktif.",
    image: "/figma.png",
    tags: ["Figma", "UI/UX", "Prototype",],
    github: "https://github.com/gusdesindu/web-design",
    demo: "https://www.figma.com/file/xxxxx"
  },
   {
    title: "Web Portofolio",
    description: "Proyek ini adalah portofolio digital yang saya bangun untuk menampilkan karya dan keahlian saya di bidang pengembangan web. Portofolio ini mencerminkan kemampuan saya dalam merancang situs yang fungsional.",
    image: "/portofolio.png",
    tags: ["Vite", "React", "Tailwind",],
    github: "https://github.com/gusdesindu/web-design",
    demo: "https://www.figma.com/file/xxxxx"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Proyek Saya</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Berikut adalah beberapa proyek yang telah saya kerjakan
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    <Github size={20} />
                    Lihat Kode
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    <ExternalLink size={20} />
                    Pratinjau
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
