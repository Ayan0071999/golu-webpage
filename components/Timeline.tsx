"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const years = [2019, 2020, 2021, 2022, 2023, 2024, 2025];

// Define the number of images available for each year
const imageCounts: Record<number, number> = {
  2019: 4, 
  2020: 3,
  2021: 4,
  2022: 7,
  2023: 6,
  2024: 5,
  2025: 4, 
};

const Timeline = ({ dotColor = "bg-romanticRed" }) => {
  const [hoveredYear, setHoveredYear] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [totalImages, setTotalImages] = useState(0);

  const handleMouseEnter = (year: number) => {
    setHoveredYear(year);
    setCurrentImageIndex(0);
    setTotalImages(imageCounts[year] || 1); // Get image count, default to 1 if not found
  };

  const handleMouseLeave = () => {
    setHoveredYear(null);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (hoveredYear !== null) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [hoveredYear, totalImages]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-softPink p-6">
      <h2 className="text-5xl font-bold text-romanticRed mb-8">Our Journey</h2>

      {/* Timeline Container */}
      <div className="relative flex items-center w-full max-w-4xl">
        {/* Timeline Line */}
        <div className="absolute top-1 left-1 right-1 h-4 bg-white z-0"></div>

        {/* Timeline Years */}
        <div className="relative flex w-full justify-between px-8">
          {years.map((year, index) => (
            <motion.div
              key={year}
              className="relative flex flex-col items-center z-10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              onMouseEnter={() => handleMouseEnter(year)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Timeline Circle (Dots) */}
              <motion.div
                className={`w-6 h-6 ${dotColor} rounded-full border-4 border-white shadow-lg`}
                animate={{ backgroundColor: ["#ff69b4", "#ffb6c1", "#ff69b4"] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              ></motion.div>

              {/* Year Label */}
              <p className="mt-2 font-bold">{year}</p>

              {/* Image Slideshow on Hover */}
              {hoveredYear === year && (
                <motion.div
                  className="absolute top-12 w-48 h-48 bg-white p-2 shadow-xl rounded-lg flex items-center justify-center overflow-hidden"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <Image
                    src={`/Images/timeline-years/${year}/${currentImageIndex + 1}.jpg`}
                    alt={`Memory from ${year}`}
                    width={150}
                    height={150}
                    className="rounded-md"
                  />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
