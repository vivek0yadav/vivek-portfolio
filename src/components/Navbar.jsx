import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Importing icons for the mobile menu

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' }, // Reordered for better flow
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // 1. **Fixed Container:** Used a dark background (`bg-gray-900/90`) with a subtle glass/blur effect.
    <nav className="fixed w-full z-50 py-3 backdrop-blur-md bg-gray-900/80 shadow-xl shadow-gray-900/50">
      
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo/Name */}
        <a 
          href="#home" 
          className="text-2xl font-extrabold tracking-wider text-white hover:text-purple-400 transition duration-300"
        >
          Vivek Yadav
        </a>
        
        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 items-center">
          {links.map(l => (
            <li key={l.id}>
              <a 
                href={`#${l.id}`} 
                className="text-lg font-medium text-gray-300 hover:text-purple-400 transition duration-300 relative group"
              >
                {l.label}
                {/* Subtle underline hover effect */}
                <span className="absolute -bottom-1.25 left-0 w-full h-0.5 bg-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
              </a>
            </li>
          ))}
        </ul>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-purple-400 p-2 rounded-lg hover:bg-gray-700 transition"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay/Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gray-800 border-t border-gray-700 shadow-xl">
          <ul className="flex flex-col p-4 space-y-2">
            {links.map(l => (
              <li key={l.id}>
                <a 
                  href={`#${l.id}`} 
                  onClick={toggleMenu} // Close menu on link click
                  className="block px-4 py-3 text-lg font-medium text-gray-200 hover:bg-purple-600 hover:text-white rounded-lg transition duration-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}