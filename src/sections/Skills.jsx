import React from "react";
import { motion } from "framer-motion";
import { skills } from "../utils/data";
// 1. Updated Imports to include new icons
import { 
  Code2, 
  Terminal, 
  Layers, 
  Globe, 
  Database, 
  Layout, 
  Server,
  Palette,    // For CSS3
  FileCode,   // For HTML5
  GitBranch   // For Git & GitHub
} from "lucide-react";

// 2. Updated Helper to include new skills
const getIcon = (name) => {
  const iconMap = {
    "React": <Layout className="w-6 h-6" />,
    "Node.js": <Server className="w-6 h-6" />,
    "Express": <Terminal className="w-6 h-6" />,
    "MongoDB": <Database className="w-6 h-6" />,
    "TailwindCSS": <Layers className="w-6 h-6" />,
    "JavaScript": <Code2 className="w-6 h-6" />,
    "MySQL": <Database className="w-6 h-6" />,
    "SQL": <Database className="w-6 h-6" />,           // Added SQL
    "HTML5": <FileCode className="w-6 h-6" />,         // Added HTML5
    "CSS3": <Palette className="w-6 h-6" />,           // Added CSS3
    "Git & GitHub": <GitBranch className="w-6 h-6" />, // Added Git & GitHub
  };
  return iconMap[name] || <Globe className="w-6 h-6" />;
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { type: "spring", stiffness: 100, damping: 15 } 
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16">
          Technical <span className="text-purple-400">Skills</span>
        </h2>
        
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {skills.map((s) => (
            <motion.div 
              key={s.name} 
              variants={itemVariants}
              whileHover={{ 
                y: -8, // Slightly more lift for a more dynamic feel
                boxShadow: "0 15px 30px rgba(168, 85, 247, 0.25)",
                borderColor: "rgba(168, 85, 247, 0.5)"
              }} 
              className="group bg-gray-800/40 p-8 rounded-3xl border border-gray-700/50 
                         flex flex-col items-center justify-center text-center
                         transition-all duration-300"
            >
              {/* Icon Container: Larger padding and smooth hover color flip */}
              <div className="mb-5 p-5 rounded-2xl bg-gray-900 text-purple-400 
                              group-hover:bg-purple-500 group-hover:text-white transition-all duration-500">
                {getIcon(s.name)}
              </div>

              {/* Skill Name */}
              <h3 className="text-xl font-bold text-gray-200 group-hover:text-purple-400 transition-colors duration-300">
                {s.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}