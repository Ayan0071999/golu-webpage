"use client"
import { motion } from "framer-motion"
import Typical from "react-typical"
const LoveYou= () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center mb-8 elegant-text"
    >
      <h1 className="text-8xl font-bold mb-10 text-[var(--romantic-red)] mt-8 loveyou-vh mx-7">
      <Typical
            steps={["I love you", 4000, "মই তোমাক ভাল পাওঁ", 4000, "Te amo", 4000, "أحبك", 4000, "Je t'aime", 4000]} // Switch between different titles
            loop={Infinity}
            wrapper="span"
          />
      </h1>
    </motion.div>
  )
}

export default LoveYou

