"use client"
import { motion } from "framer-motion"

const interests = [
  { type: "Movie", name: "3 Idiots" },
  { type: "Music", name: "Lag Ja Jale" },
  { type: "Book", name: "Beloved" },
  { type: "Food", name: "Momos"}
]

const HerFav = () => {
  return (
    <div className="mb-8 center min-h-min"> 
      <h2 className="text-5xl font-bold mb-4 align-center justify-center flex text-[var(--romantic-red)]">Golu's Favourrite</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {interests.map((interest, index) => (
          <motion.div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md hover-3d transition-soft"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="font-bold align-middle text-3xl flex justify-center text-[var(--romantic-red)]">{interest.type}</h3>
            <p className="elegant-text flex text-2xl align-middle justify-center">{interest.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default HerFav

