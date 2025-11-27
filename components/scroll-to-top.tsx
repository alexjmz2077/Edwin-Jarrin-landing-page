"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Mostrar el botón cuando el usuario haya scrolleado más de 400px (aproximadamente después del hero)
      if (window.scrollY > 400) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-8 right-8 rounded-full shadow-lg text-white hover:opacity-90 transition-all hover:scale-110 z-40 h-14 w-14"
          style={{ backgroundColor: "#25366b" }}
          aria-label="Volver arriba"
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
      )}
    </>
  )
}
