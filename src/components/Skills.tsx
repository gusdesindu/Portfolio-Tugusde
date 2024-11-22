import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  {
    category: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL", "Laravel"]
  },
  {
    category: "Design Tools",
    items: ["Figma", "Canva", "PixelLab", "CapCut"]
  },
  {
    category: "Soft Skills",
    items: ["Team Work", "Time Management", "Problem Solving", "Communication", "Fast Learner"]
  },

];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Abilities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Teknologi yang saya kuasai
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {skills.map((skillSet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow w-full max-w-sm"
            >
              <h3 className="text-xl font-bold mb-4 text-purple-600 text-center">{skillSet.category}</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {skillSet.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 text-sm hover:bg-purple-100 hover:text-purple-600 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 max-w-2xl mx-auto">
            Currently focusing on expanding my knowledge in web development and design 
            through various projects and self-learning initiatives.
          </p>
        </motion.div>
      </div>
    </section>
  );
}