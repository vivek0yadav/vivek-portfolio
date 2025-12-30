import React from "react";
import { Heart, Code } from "lucide-react"; // Importing icons for visual flair

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    // 1. Container: Increased vertical padding (py-12), added a dark background (bg-gray-900),
    //    and a subtle top border (border-t) to separate it visually from the main content.
    <footer className="mt-20 py-12 px-4 sm:px-6 lg:px-8 text-center bg-gray-900 border-t border-gray-700/50">
      
      {/* 2. Primary Text: Used a lighter, more visible text color (text-gray-400). */}
      <p className="text-base text-gray-400 font-medium">
        &copy; {currentYear} **Vivek Yadav**. All rights reserved.
      </p>

      {/* 3. Secondary Info: Added icons for a professional and friendly touch. */}
      <p className="mt-3 text-sm text-gray-500 flex items-center justify-center space-x-1">
        Built with 
        <span className="text-red-500 mx-1">
          <Heart className="w-4 h-4 inline-block" fill="currentColor" />
        </span>
        and
        <span className="text-purple-400 font-semibold ml-1 mr-1">
          <Code className="w-4 h-4 inline-block" />
        </span>
        **React + Tailwind CSS**
      </p>

      {/* 4. Optional: A subtle divider or link area could go here */}
      <div className="mt-6">
        <a 
          href="#home" 
          className="text-sm text-purple-400 hover:text-purple-300 transition"
        >
          Back to Top
        </a>
      </div>
    </footer>
  );
}