"use client"

import { useState } from "react"
import Image from "next/image"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

const images = [
  "/Images/photo1.jpg",
  "/Images/photo2.jpg",
  "/Images/photo3.jpg",
]

const PhotoGallery = () => {
  const [photoIndex, setPhotoIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      {images.map((src, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
          onClick={() => {
            setPhotoIndex(index)
            setIsOpen(true)
          }}
        >
          <Image src={src || "/placeholder.svg"} alt={`Photo ${index + 1}`} width={300} height={300} />
        </div>
      ))}
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
        />
      )}
    </div>
  )
}

export default PhotoGallery

