import React from "react";
import { motion } from "framer-motion";
import { skills } from "../utils/data"; // Assuming this path is correct

// --- Icon Placeholder Component ---
// Since the 'skills' data doesn't include an icon, this creates a clean placeholder.
const IconPlaceholder = ({ skillName }) => (
  // Uses the first letter of the skill name as a visually distinct element
  <div className="w-10 h-10 flex items-center justify-center text-xl font-bold rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
    {skillName.charAt(0)} 
  </div>
);
// ---------------------------------

// Animation variant for staggered card reveal
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 15 } 
  },
};

export default function Skills() {
  return (
    // Section Container: Consistent padding and background
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Heading: Centered, large, and uses the theme color */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12">
          Technical <span className="text-purple-400">Skills</span>
        </h2>
        
        {/* Grid Container with Staggered Animation */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible" // Reveals when component scrolls into view
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.08 }}
        >
          {skills.map((s, index) => (
            /* Skill Card: Defined dark background, shadow, and beautiful hover effect */
            <motion.div 
              key={s.name} 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 8px 15px rgba(168, 85, 247, 0.3)" // Custom purple shadow on hover
              }} 
              className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700/50 
                         transition duration-300 ease-in-out flex flex-col justify-between"
            >
              {/* Top Section - Icon and Title */}
              <div className="flex items-center space-x-4 mb-4">
                <IconPlaceholder skillName={s.name} /> 
                <h3 className="font-bold text-lg text-gray-100">{s.name}</h3>
              </div>

              {/* Progress Bar and Level */}
              <div>
                {/* Level Text - Matched to the primary color */}
                <div className="text-sm font-medium text-purple-400 mb-2 flex justify-between">
                  <span>{s.level}</span>
                  <span className="text-gray-400">{s.pct}</span>
                </div>
                
                {/* Progress Bar - Thicker bar, purple fill, and animated width */}
                <div className="h-2.5 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    // Animates the width of the progress bar
                    animate={{ width: s.pct }}
                    transition={{ duration: 1, delay: index * 0.1 }} 
                    className="h-full bg-purple-500 rounded-full"
                    style={{ width: s.pct }} // Fallback style
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}