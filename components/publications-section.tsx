"use client"

import { Card } from "@/components/ui/card"
import { Instagram } from "lucide-react"

// Datos de ejemplo de publicaciones de Instagram
const instagramPosts = [
  {
    id: 1,
    image: "/Intervencion-Universidades-Edwin-Jarrin.webp",
    caption: "Intervención en torno a la creación de las Universidades Amazónicas...",
    likes: 281,
    date: "2025-25-11",
  },
  {
    id: 2,
    image: "/Ley-Movilidad-Humana-Edwin-Jarrin.webp",
    caption: "Reforma a la Ley Orgánica contra la Trata de Personas y el Tráfico Ilícito de Migrantes...",
    likes: 456,
    date: "2025-29-10",
  },
  {
    id: 3,
    image: "/Aprobacion-ley-movilidad-humana.webp",
    caption: "Se aprobó en primer debate el Informe unificado del Proyecto de Ley Orgánica Reformatoria a la Ley de Movilidad Humana....",
    likes: 567,
    date: "2025-02-09",
  },
]

export default function PublicationsSection() {
  return (
    <section id="publicaciones" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-serif italic mb-6" style={{ color: "#25366b" }}>
            Publicaciones
          </h2>
          <p className="text-lg text-gray-600 mb-6">Mantente al día con nuestras últimas actividades y noticias</p>
          <a
            href="https://www.instagram.com/edwinjarrinec/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-lg font-medium hover:opacity-80 transition-opacity"
            style={{ color: "#25366b" }}
          >
            <Instagram className="h-6 w-6" />
            Síguenos en Instagram
          </a>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {instagramPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-700 line-clamp-2 mb-2">{post.caption}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>❤️ {post.likes} me gusta</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
