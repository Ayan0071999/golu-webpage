"use client"
import { motion } from "framer-motion"
import Typical from "react-typical"
const PersonalizedMessage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center mb-8 elegant-text"
    >
      <h1 className="text-8xl font-bold mb-4 text-[var(--romantic-red)]">
      <Typical
            steps={["Golu....", 2000, "My love ", 2000,"মোৰ প্ৰেম",2000,"Mi amor", 2000,"حبي",2000,"Mon amour",2000]} // Switch between different titles
            loop={Infinity}
            wrapper="span"
          />
      </h1>
      <p className="text-lg">
        Every moment with you is a treasure, every memory a gift. Our love story is my favorite, and I'm so grateful to
        be writing it with you.
      </p>
    </motion.div>
  )
}

export default PersonalizedMessage

