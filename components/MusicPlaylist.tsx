"use client"
import ReactPlayer from "react-player"

const playlist = [
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "https://www.youtube.com/watch?v=ZbZSe6N_BXs",
  "https://www.youtube.com/watch?v=4fndeDfaWCg",
]

const MusicPlaylist = () => {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-romantic text-romantic-red mb-4">Our Playlist</h2>
      <ReactPlayer url={playlist} controls={true} width="100%" />
    </div>
  )
}

export default MusicPlaylist

