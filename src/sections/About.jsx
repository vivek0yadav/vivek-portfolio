import React from "react";
import { motion } from "framer-motion";
import { Zap, Code, Star } from "lucide-react"; // Importing icons for the stats cards

export default function About() {
  return (
    // 1. Section Container: Consistent padding and theme background.
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        {/* 2. Heading: Centered, larger, and uses theme color for consistency. */}
        <motion.h2 
          initial={{ x: -20, opacity: 0 }} 
          whileInView={{ x: 0, opacity: 1 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-extrabold text-center mb-12"
        >
          About <span className="text-purple-400">Me</span>
        </motion.h2>

        {/* 3. Main Content Card: Defined background, border, and shadows instead of 'glass'. */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }} 
          className="bg-gray-800 p-8 rounded-2xl shadow-2xl shadow-purple-900/30 border border-gray-700/50"
        >
          {/* Main Paragraph - Improved readability with text color and line height. */}
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Hi, I’m **Vivek Yadav**, a passionate **Full-Stack Web Developer** with a strong focus on building modern, scalable, and user-friendly web applications. I enjoy turning ideas into meaningful digital experiences by combining clean UI design, optimized backend logic, and responsive layouts.
          </p>
          
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            I specialize in crafting responsive, fast, and visually appealing applications using the **MERN stack** (MongoDB, Express, React, and Node.js), complemented by modern frameworks like **Tailwind CSS** for exceptional UI/UX design.
          </p>

          {/* 4. Stats/Details Grid: Enhanced cards with icons and better colors. */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Experience Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }} 
              whileInView={{ y: 0, opacity: 1 }} 
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="p-6 bg-gray-700/50 rounded-xl border-t-4 border-purple-500 shadow-lg"
            >
              <Zap className="w-8 h-8 text-purple-400 mb-3"/>
              <h4 className="font-bold text-xl text-white">Experience</h4>
              <p className="text-sm text-gray-300 mt-1">Fresher looking for an **internship opportunity**</p>
            </motion.div>
            
            {/* Stack Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }} 
              whileInView={{ y: 0, opacity: 1 }} 
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="p-6 bg-gray-700/50 rounded-xl border-t-4 border-purple-500 shadow-lg"
            >
              <Code className="w-8 h-8 text-purple-400 mb-3"/>
              <h4 className="font-bold text-xl text-white">Core Stack</h4>
              <p className="text-sm text-gray-300 mt-1">**MERN** (React, Node, Express, MongoDB), Tailwind CSS</p>
            </motion.div>
            
            {/* Interests Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }} 
              whileInView={{ y: 0, opacity: 1 }} 
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="p-6 bg-gray-700/50 rounded-xl border-t-4 border-purple-500 shadow-lg"
            >
              <Star className="w-8 h-8 text-purple-400 mb-3"/>
              <h4 className="font-bold text-xl text-white">Interests</h4>
              <p className="text-sm text-gray-300 mt-1">Web Development, Full-Stack Architecture, UI/UX.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}