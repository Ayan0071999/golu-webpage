"use client";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const Valentine = () => {
  const [showCard, setShowCard] = useState(false);
  const controls = useAnimation();

  const moveNoButton = async () => {
    const randomX = Math.random() * 300 - 150; // Random X movement
    const randomY = Math.random() * 300 - 150; // Random Y movement
    await controls.start({
      x: randomX,
      y: randomY,
      transition: { type: "spring", stiffness: 200, damping: 10 },
    });
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-pink-200 p-6">
      <h2 className="text-3xl font-bold text-red-600 mb-8">
        Will You Be My Valentine? ❤️
      </h2>

      <div className="flex gap-6">
        {/* YES BUTTON */}
        <motion.button
          className="px-6 py-3 bg-red-500 text-white font-bold rounded-lg shadow-lg hover:bg-red-700 transition-all"
          onClick={() => setShowCard(true)}
        >
          Yes 💖
        </motion.button>

        {/* NO BUTTON (Jumps Around) */}
        <motion.button
          className="px-6 py-3 bg-gray-400 text-white font-bold rounded-lg shadow-lg"
          animate={controls}
          onMouseEnter={moveNoButton}
        >
          No 😢
        </motion.button>
      </div>

      {/* Teddy Card on YES Click */}
      {showCard && (
        <motion.div
          className="absolute top-40 flex flex-col items-center p-6 bg-white rounded-lg shadow-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <button
            className="absolute top-2 right-2 bg-pink-500 text-white px-3 py-1 rounded-full text-sm hover:bg-red-700 transition-all"
            onClick={() => setShowCard(false)}
          >
            CLOSE
          </button>
          <Image
            src="/images/dancing-teddy.gif"
            alt="Happy Teddy"
            width={500}
            height={500}
            unoptimized // Fix for GIFs in Next.js
          />
          <p className="mt-4 text-lg font-bold text-red-500">
            Yay! Phas gya tum! 🥰
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default Valentine;
