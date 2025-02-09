"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const Momo = () => {
    
  const [images, setImages] = useState<{ id: number; src: string; x: number; y: number }[]>([]);
  const availableImages = ["ifti.png","momo.png"]; // Update this with your actual image names

  const addRandomImage = () => {
    const randomImage = availableImages[Math.floor(Math.random() * availableImages.length)];
    const randomX = Math.random() * window.innerWidth * 0.8; // Keep images within screen width
    const randomY = Math.random() * window.innerHeight * 0.8; // Keep images within screen height

    setImages((prev) => [
      ...prev,
      { id: Date.now(), src: `/Images/momo/${randomImage}`, x: randomX, y: randomY },
    ]);
  };
  const clearCanvas = () => {
    setImages([]);
  };
  return (
    
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-pink-200 p-6 overflow-hidden">
      <h2 className="text-3xl font-bold text-pink-600 mb-6">Your Favourite Things🩷</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <button
        className="px-6 py-3 bg-pink-500 text-white font-bold rounded-lg shadow-lg hover:bg-red-700 transition-all"
        onClick={addRandomImage}
      >
        Click Me 
      </button>
      <button
          className="px-6 py-3 bg-pink-500 text-white font-bold rounded-lg shadow-lg hover:bg-red-700 transition-all"
          onClick={clearCanvas}
        >
          Clear Canvas 🗑️
        </button>
        </div>
      {/* Render Randomly Placed Images */}
      {images.map((img) => (
        <motion.div
          key={img.id}
          className="absolute"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{ top: img.y, left: img.x }}
        >
          <Image src={img.src} alt="Random Image" width={100} height={100} unoptimized />
        </motion.div>
      ))}
    </div>
  );
};

export default Momo;
