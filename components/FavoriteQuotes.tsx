"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const quotes = [
  "Love is composed of a single soul inhabiting two bodies. - Aristotle",
  "The best thing to hold onto in life is each other. - Audrey Hepburn",
  "I love you not only for what you are, but for what I am when I am with you. - Roy Croft",
]

const FavoriteQuotes = () => {
  const [currentQuote, setCurrentQuote] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prevQuote) => (prevQuote + 1) % quotes.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="mb-8 text-center word-love">
      <h2 className="text-5xl font-bold text-romantic-red mb-6 mt-10">Words of Love</h2>
      <AnimatePresence mode="wait">
        <motion.p
          key={currentQuote}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-lg italic font-extrabold text-4xl text-red-700"
  
        >
          {quotes[currentQuote]}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}

export default FavoriteQuotes

