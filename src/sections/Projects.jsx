import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react"; // Imported for button icons

const projects = [
  {
    id: 1,
    title: "E-commerce Shopping Website",
    desc: "Complete shopping site with cart, products, auth and payments.",
    tech: "React, Node, Express, MongoDB",
    img: "/src/assets/project1.png",
    github: "https://github.com/vivek0yadav/website",
    live: "https://website-frontend-phi-seven.vercel.app/"
  },
  {
    id: 2,
    title: "Wanderlust Travel Website",
    desc: "Search & booking for trips with user dashboard.",
    tech: "React, Node, Express, MongoDB",
    img: "/src/assets/project3.png",
    github: "https://github.com/vivek0yadav/Travelling-website",
    live: "https://travelling-website-1-nfpt.onrender.com"
  },
  {
    id: 3,
    title: "Health Care System",
    desc: "Doctor-patient booking & ML-assisted diagnostics.",
    tech: "React, Node, Express, MongoDB, Python(ML)",
    img: "/src/assets/project2.png",
    github: "#",
    live: "#"
  },
  
];

// Animation variant for the grid items
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 15 } 
  },
};

export default function Projects() {
  return (
    // 1. **Section Container:** Added horizontal padding and increased top/bottom padding.
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* 2. **Heading:** Centered, larger, and matched the style of the Home section. */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12">
          Featured <span className="text-purple-400">Projects</span>
        </h2>
        
        {/* 3. **Grid Container:** Added Framer Motion container for staggered animation. */}
        <motion.div 
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible" // Reveals when component scrolls into view
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {projects.map((p) => (
            // 4. **Project Card:** // - Used a solid dark background (bg-gray-800) instead of relying on 'glass'.
            // - Added strong shadow (shadow-xl) and border (border-t) for depth.
            // - Enhanced hover: added subtle scale and a primary-color ring.
            <motion.div 
              key={p.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03, 
                boxShadow: "0 10px 20px rgba(168, 85, 247, 0.4)" // Custom purple shadow
              }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-xl border border-gray-700/50 
                         transition duration-300 ease-in-out cursor-pointer group"
            >
              {/* Image Container with Hover Effect */}
              <div className="relative overflow-hidden">
                <img 
                  src={p.img} 
                  alt={p.title} 
                  className="w-full h-48 object-cover transition duration-500 ease-in-out 
                             group-hover:scale-110 group-hover:opacity-80" // Zoom and darken on hover
                />
                {/* Image Overlay (Optional: a subtle gradient) */}
                <div className="absolute inset-0 bg-linear-to-t from-gray-800/20 to-transparent"></div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Title: Stronger color and weight */}
                <h3 className="font-bold text-xl text-gray-100">{p.title}</h3> 
                
                {/* Description: Better text color */}
                <p className="text-base text-gray-400 mt-2">{p.desc}</p>
                
                {/* Tech Stack: Visually separated with smaller, bordered tag */}
                <p className="inline-block mt-4 px-3 py-1 text-xs font-medium rounded-full 
                              bg-purple-600/10 text-purple-400 border border-purple-600/50">
                  {p.tech}
                </p>

                {/* Buttons: Enhanced with icons and matched the purple theme */}
                <div className="mt-6 flex gap-3">
                  {/* Live Button - Primary Style */}
                  <a 
                    href={p.live} 
                    className="flex items-center text-sm px-4 py-2 rounded-lg font-semibold 
                               bg-purple-600 hover:bg-purple-700 transition duration-300 shadow-md shadow-purple-500/20"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live
                  </a>
                  
                  {/* Code Button - Secondary Style */}
                  <a 
                    href={p.github} 
                    className="flex items-center text-sm px-4 py-2 rounded-lg font-medium 
                               border border-gray-600 text-gray-300 hover:bg-gray-700 transition duration-300"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}