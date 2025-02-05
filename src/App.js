import React from "react";
import { motion } from "framer-motion";
import Draggable from "react-draggable";

const App = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio!</h1>
      <Draggable>
        <motion.div
          className="p-10 bg-blue-500 rounded-xl cursor-pointer"
          whileHover={{ scale: 1.1 }}
          drag
        >
          Move Me!
        </motion.div>
      </Draggable>
    </div>
  );
};

export default App;
