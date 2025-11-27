"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const biographyImages = ["/Saludo-Edwin-Jarrin.webp", "/Charla-Edwin-Jarrin.webp", "/Pose-Edwin-Jarrin.webp"]

export default function BiographySection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % biographyImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="biografia" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Image Slideshow with Polaroid effect */}
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-serif italic mb-8" style={{ color: "#25366b" }}>
              Biografía
            </h2>
            <div className="relative">
              {/* Polaroid frame effect */}
              <div className="bg-white p-4 pb-16 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="relative h-[400px] overflow-hidden">
                  {biographyImages.map((src, index) => (
                    <img
                      key={index}
                      src={src || "/placeholder.svg"}
                      alt={`Biografía imagen ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        index === currentImageIndex ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  ))}
                </div>
                {/* Caption area */}
                <div className="mt-4 text-center">
                  
                </div>
              </div>
              {/* Shadow effect */}
              <div className="absolute -bottom-2 left-4 right-4 h-4 bg-black/10 blur-xl -z-10" />
            </div>
          </div>

          {/* Content */}
          <div className="mt-8 md:mt-16">
            <Card className="p-8 bg-white border-none shadow-lg">
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                El Dr. Edwin Jarrín Rivadeneira nació en Macas, capital de la provincia de Morona Santiago. Desde joven
                mostró un profundo compromiso con el servicio público y el desarrollo de su comunidad.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                Con una sólida formación académica y años de experiencia, ha dedicado su vida a
                trabajar por el bienestar de los ciudadanos de Morona Santiago.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-8">
                Actualmente se desempeña como Asambleísta del Ecuador, representando con orgullo a la provincia de
                Morona Santiago, donde impulsa proyectos de desarrollo sostenible, educación y salud para toda la región
                amazónica.
              </p>
              <Link href="/biografia">
                <Button
                  size="lg"
                  className="text-white hover:opacity-90 transition-all hover:scale-105"
                  style={{ backgroundColor: "#25366b" }}
                >
                  Ver biografía completa
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
