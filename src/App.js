import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`h-screen w-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} overflow-auto`}>
      {/* Dark Mode Toggle */}
      <button 
        className="absolute top-4 right-4 p-2 bg-gray-700 text-white rounded-lg"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      {/* Contact Card */}
      <motion.div 
        className="flex flex-col items-center p-6 bg-blue-500 rounded-xl m-10 shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img 
          src="https://via.placeholder.com/100" 
          alt="Profile" 
          className="w-24 h-24 rounded-full mb-4 border-2 border-white" 
        />
        <h1 className="text-2xl font-bold">Vineel Panyala</h1>
        <div className="flex gap-4 mt-2">
          <a href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={30} />
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
        </div>
      </motion.div>

      {/* Animated Scroll Section */}
      <motion.div 
        className="p-10 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-semibold">Welcome to My Portfolio</h2>
        <p className="mt-4 text-lg">This site showcases my work, projects, and skills.</p>
      </motion.div>
    </div>
  );
};

export default App;

