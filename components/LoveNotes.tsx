"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const notes = [
  "Thank you for being mine",
  "I love the way you smile",
  "You make every day brighter",
  "I'm so lucky to have you in my life",
  "I love your cheeks",
  "especially when they turn red",
  "You are the most beautiful girl in the world",
  "You are my peace",
  "You are my happiness"
]

const LoveNotes = () => {
  const [currentNote, setCurrentNote] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentNote((prevNote) => (prevNote + 1) % notes.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="mb-8 text-center">
      <h2 className="text-5xl font-bold text-romantic-red mb-10 mt-8 ">Love Notes</h2>
      <AnimatePresence mode="wait">
        <motion.p
          key={currentNote}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="italic text-3xl font-serif mt-10"
        >
          {notes[currentNote]}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}

export default LoveNotes

