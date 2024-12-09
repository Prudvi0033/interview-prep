import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AniText = () => {
  const textArray = ["IT Support", "Data Analytics", "Project Management", "UX Design", "CyberSecurity"];
  const [currentIndex, setCurrentIndex] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length); 
    }, 2000); 
    return () => clearInterval(interval);
  }, [textArray.length]);

  return (
    <div className="mt-2 px-10 bg-gradient-to-r from-indigo-500 to-blue-500 shadow-lg rounded-md p-2 text-white duration-300 flex justify-center items-center font-semibold"
    style={{
      WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
      maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
    }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex} 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }} 
          transition={{ duration: 0.8 }}
        >
          {textArray[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AniText;
