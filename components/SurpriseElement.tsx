"use client"

import { useState, useEffect } from "react"
import Countdown from "react-countdown-now"
import ReactPlayer from "react-player"

const SurpriseElement = () => {
  const [showVideo, setShowVideo] = useState(false)
  const [countdownDate, setCountdownDate] = useState<number | null>(null)

  useEffect(() => {
    setCountdownDate(new Date("2025-04-07T00:00:00").getTime()) // Set countdown 10 seconds from now
  }, []) // Runs only on the client side

  const handleCountdownComplete = () => {
    setShowVideo(true)
  }

  return (
    <div className="mb-8 text-center">
      <h2 className="text-5xl font-romantic font-bold text-romantic-red mb-4">Time left for Anniversary</h2>

      {!showVideo ? (
        countdownDate ? ( // Render countdown only after it's set
          <Countdown date={countdownDate} onComplete={handleCountdownComplete} />
        ) : (
          <p>Happy Anniversarty</p>
        )
      ) : (
        <ReactPlayer url="https://youtu.be/-sbKzeFczbw?si=-4FyUxeDQjy5zeQt" controls={true} width="100%" />
      )}
    </div>
  )
}

export default SurpriseElement
