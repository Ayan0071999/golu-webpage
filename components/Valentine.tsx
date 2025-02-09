"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

// Define the type for each timeline event
interface TimelineEvent {
  date: string;
  event: string;
  image: string;
  message: string;
}

// Timeline events with images and messages
const timelineEvents: TimelineEvent[] = [
  { date: "2025-02-06", event: "Rose Day", image: "/Images/valentine-week/rose.gif", message: "A rose for my love!" },
  { date: "2025-02-07", event: "Propose Day", image: "/Images/valentine-week/propose.gif", message: "The day I confessed my love!" },
  { date: "2025-02-08", event: "Chocolate Day", image: "/Images/valentine-week/chocolate.gif", message: "Sweet like our love!" },
  { date: "2025-02-09", event: "Teddy Day", image: "/Images/valentine-week/teddy2.gif", message: "A teddy to hug when I'm not around!" },
  { date: "2025-02-10", event: "Promise Day", image: "/Images/valentine-week/promise.gif", message: "I promise to always love you!" },
  { date: "2025-02-11", event: "Hug Day", image: "/Images/valentine-week/hug.gif", message: "Warm hugs, even from afar!" },
  { date: "2025-02-12", event: "Kiss Day", image: "/Images/valentine-week/kiss.gif", message: "A kiss for my forever love!" },
  { date: "2025-02-13", event: "Valentine's Day", image: "/Images/valentine-week/valentine.gif", message: "Happy Valentine's, my love!" },
];

const Valentine = () => {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);

  // Get current date in YYYY-MM-DD format
  const currentDate = new Date().toISOString().split("T")[0];

  return (
    <div className="relative valentine-height bg-softPink p-6 flex items-center justify-center">
      <div className="w-full max-w-5xl text-center">
        <h2 className="text-5xl font-bold text-romanticRed mb-8 ">Valentine's Week</h2>

        {/* Timeline Container */}
        {!selectedEvent && (
          <div className="relative flex items-center justify-center w-full mb-16">
            {/* Timeline Line - Behind the dots */}
            <div className="absolute top-1 left-1 right-1 h-4 bg-white z-0"></div>

            {/* Timeline Events */}
            <div className="relative flex w-full justify-between px-8">
              {timelineEvents.map((event, index) => {
                const isActive = currentDate >= event.date; // Check if event is active

                return (
                  <motion.div
                    key={index}
                    className="relative flex flex-col items-center z-10"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    {/* Timeline Circle (Dots) */}
                    <motion.div
                      className={`w-6 h-6 rounded-full border-4 border-white shadow-lg cursor-pointer transition-transform duration-300 ${
                        isActive ? "bg-deepPink hover:scale-110" : "bg-gray-400 cursor-not-allowed"
                      }`}
                      onClick={() => isActive && setSelectedEvent(event)} // Open only if active
                    ></motion.div>

                    {/* Event Details */}
                    <div className="mt-4 text-center">
                      <p className={`text-sm ${isActive ? "text-black" : "text-gray-500"}`}>{event.event}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {/* Event Card (Displays Image & Message) */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center backdrop-blur-md z-50">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg w-[80%] h-[80%] max-w-4xl text-center overflow-auto items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute top-4 right-4 text-red-500 text-xl"
                onClick={() => setSelectedEvent(null)} // Close button
              >
                ✖
              </button>
              <Image
                src={selectedEvent.image}
                alt={selectedEvent.event}
                width={500}
                height={200}
                className="rounded-lg mx-auto items-center"
                unoptimized
              />
              <h3 className="text-xl font-bold mt-4">{selectedEvent.event}</h3>
              <p className="text-gray-700 mt-2">{selectedEvent.message}</p>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Valentine;
