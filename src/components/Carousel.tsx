import { useMemo, useState, useCallback, useEffect } from 'react'
import './Carousel.css'

export type CarouselProps = {
  images: readonly string[]
  height?: number
}

export default function Carousel({ images, height }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const lastIndex = images.length - 1
  const [isForward, setIsForward] = useState(true)

  const goPrev = useCallback(() => {
    setCurrentIndex((idx) => (idx <= 0 ? 0 : idx - 1))
  }, [])

  const goNext = useCallback(() => {
    setCurrentIndex((idx) => (idx >= lastIndex ? lastIndex : idx + 1))
  }, [lastIndex])

  useEffect(() => {
    if (images.length <= 1) return
    const id = setInterval(() => {
      setCurrentIndex((idx) => {
        if (isForward) {
          if (idx < lastIndex) return idx + 1
          // reached end → reverse direction and step back one
          setIsForward(false)
          return Math.max(0, idx - 1)
        } else {
          if (idx > 0) return idx - 1
          // reached start → switch to forward and step ahead one
          setIsForward(true)
          return Math.min(lastIndex, idx + 1)
        }
      })
    }, 3000)
    return () => clearInterval(id)
  }, [images.length, isForward, lastIndex])

  const trackStyle = useMemo(() => ({
    transform: `translateX(${-100 * currentIndex}%)`,
    ...(height ? { height: `${height}px` } : {}),
  }), [currentIndex, height])

  if (images.length === 0) return null

  return (
    <div className="carousel" dir="ltr">
      <div className="carousel-viewport" aria-roledescription="carousel">
        <div className="carousel-track" style={trackStyle}>
          {images.map((src, i) => (
            <div className="carousel-slide" key={src + i} aria-hidden={i !== currentIndex}>
              <img src={src} alt="" loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      <button className="carousel-control prev" aria-label="Previous" onClick={goPrev}>
        ‹
      </button>
      <button className="carousel-control next" aria-label="Next" onClick={goNext}>
        ›
      </button>

      <div className="carousel-indicators" role="tablist" aria-label="Gallery pagination">
        {images.map((_, i) => (
          <button
            key={i}
            className={i === currentIndex ? 'dot active' : 'dot'}
            aria-label={`Go to slide ${i + 1}`}
            aria-selected={i === currentIndex}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </div>
  )
}


