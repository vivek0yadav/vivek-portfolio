import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center py-32 md:py-48 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 md:gap-20 items-center">
        {/* Left Column - Text and Buttons */}
        <div>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight"
          >
            Hi, I’m <span className="text-purple-400 dark:text-purple-400">Vivek Yadav</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.3 }} 
            className="mt-6 text-gray-400 max-w-xl text-lg leading-relaxed"
          >
            MERN Stack Developer building responsive, **animated, and accessible** web apps. 
            I love crafting delightful UI and solving problems end-to-end.
          </motion.p>

          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            {/* Primary Button - Removed <ArrowDownToLine /> */}
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-purple-600 text-white font-semibold 
                         hover:bg-purple-700 transition duration-300 ease-in-out shadow-lg shadow-purple-500/30 transform hover:-translate-y-0.5"
            >
              Download Resume
            </a>

            {/* Secondary Button - Removed <Zap /> */}
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3 rounded-xl border border-gray-700 text-gray-300 font-medium 
                         hover:bg-gray-800 transition duration-300 ease-in-out hover:ring-2 hover:ring-purple-500"
            >
              View Projects
            </a>
          </motion.div>
        </div>

        {/* Right Column - Profile Image */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ delay: 0.7, type: "spring", stiffness: 100 }} 
          className="mx-auto flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-2xl animate-pulse-slow"></div>

            <div className="relative w-full h-full rounded-full overflow-hidden 
                          border-8 border-gray-800/50 bg-gray-900 shadow-2xl shadow-purple-900/50 
                          transform transition duration-500 hover:scale-[1.02]">
              <img 
                src="https://res.cloudinary.com/dbwu2tuzv/image/upload/v1767072692/wanderlust_WEB/g65dl7sepk7o1p0ecsbi.png" 
                alt="Vivek Yadav Profile" 
                className="w-full h-full object-cover transform scale-[1.1]" 
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}