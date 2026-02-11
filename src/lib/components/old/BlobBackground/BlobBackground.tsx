import React, { useEffect, useState } from 'react'
import './blob-background.css'

function randomPercent(min: number, max: number) {
  return `${Math.floor(Math.random() * (max - min) + min)}%`
}

function randomSize(min: number, max: number) {
  return `${Math.floor(Math.random() * (max - min) + min)}px`
}

function randomOpacity(min: number, max: number) {
  return (Math.random() * (max - min) + min).toFixed(2)
}

type BlobConfig = {
  top: string
  left: string
  size: string
  opacity: string
  color: string
  anim: string
}

export const BlobBackground: React.FC = () => {
  const [blobs, setBlobs] = useState<BlobConfig[] | null>(null)

  useEffect(() => {
    // Generate random values only on client
    setBlobs([
      {
        top: randomPercent(15, 40),
        left: randomPercent(0, 15),
        size: randomSize(400, 600),
        opacity: randomOpacity(0.2, 0.4),
        color: 'fill-pink-500',
        anim: 'blob-anim-slow',
      },
      {
        top: randomPercent(20, 45),
        left: randomPercent(15, 35),
        size: randomSize(400, 600),
        opacity: randomOpacity(0.2, 0.4),
        color: 'fill-violet-600',
        anim: 'blob-anim-medium',
      },
      {
        top: randomPercent(5, 25),
        left: randomPercent(30, 60),
        size: randomSize(400, 600),
        opacity: randomOpacity(0.2, 0.4),
        color: 'fill-cyan-500',
        anim: 'blob-anim-fast',
      },
    ])
  }, [])

  if (!blobs) return null // nothing on server, only render after mount

  return (
    <div className="z-[-1] fixed inset-0 pointer-events-none overflow-hidden">
      {blobs.map((blob, i) => (
        <svg
          key={i}
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className={`blur-3xl absolute ${blob.anim}`}
          style={{
            top: blob.top,
            left: blob.left,
            width: blob.size,
            height: blob.size,
            opacity: blob.opacity,
          }}
        >
          <path
            d="M43.2,-26C54.3,-5.7,60.5,16.4,52.4,30.8C44.4,45.2,22.2,51.9,0.2,51.8C-21.8,51.6,-43.5,44.7,-57.4,26.9C-71.3,9.1,-77.3,-19.5,-66.4,-39.7C-55.5,-59.9,-27.7,-71.6,-5.9,-68.3C16,-64.9,32.1,-46.3,43.2,-26Z"
            transform="translate(100 100)"
            className={blob.color}
          />
        </svg>
      ))}
    </div>
  )
}
