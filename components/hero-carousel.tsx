"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const carouselImages = [
  {
    src: "/Desfile-Edwin-Jarrin.webp",
    alt: "Participación en desfile del Dr. Edwin Jarrín",
  },
  {
    src: "/Edwin-Jarrin-gente.webp",
    alt: "Reunión con la comunidad de Morona Santiago",
  },
  {
    src: "/Conferencia-Edwin-Jarrin.webp",
    alt: "Charla del Dr. Edwin Jarrín en la Asamblea Nacional",
  },
]

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length)
  }

  return (
    <section id="inicio" className="relative w-full h-[70vh] mt-20 overflow-hidden bg-gray-100">
      {/* Carousel Images */}
      <div className="relative w-full h-full">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white"
        onClick={goToNext}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? "bg-white w-8" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Overlay Text */}
      <div className="absolute bottom-20 left-0 right-0 text-center text-white px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-2">Trabajando por Morona Santiago</h2>
        <p className="text-lg md:text-xl">Compromiso, transparencia y resultados</p>
      </div>
    </section>
  )
}
