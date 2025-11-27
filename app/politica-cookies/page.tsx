import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Política de Cookies - Dr. Edwin Jarrín Rivadeneira",
  description: "Política de Cookies del sitio web oficial",
}

export default function PoliticaCookiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al inicio
            </Button>
          </Link>

          <h1 className="text-5xl font-bold mb-8 text-balance" style={{ color: "#25366b" }}>
            Política de Cookies
          </h1>

          <Card className="p-8">
            <div className="prose prose-lg max-w-none">
              <p className="mb-6 leading-relaxed text-gray-700">
                Última actualización:{" "}
                {new Date().toLocaleDateString("es-EC", { year: "numeric", month: "long", day: "numeric" })}
              </p>

              <h2 className="text-2xl font-bold mb-4" style={{ color: "#25366b" }}>
                ¿Qué son las cookies?
              </h2>
              <p className="mb-6 leading-relaxed text-gray-700">
                Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio
                web. Se utilizan ampliamente para hacer que los sitios web funcionen de manera más eficiente y para
                proporcionar información a los propietarios del sitio.
              </p>

              <h2 className="text-2xl font-bold mb-4" style={{ color: "#25366b" }}>
                ¿Cómo utilizamos las cookies?
              </h2>
              <p className="mb-6 leading-relaxed text-gray-700">Este sitio web utiliza cookies para:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Mejorar la experiencia del usuario</li>
                <li>Analizar el tráfico del sitio web</li>
                <li>Recordar sus preferencias de navegación</li>
                <li>Proporcionar funcionalidades de redes sociales</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4" style={{ color: "#25366b" }}>
                Tipos de cookies que utilizamos
              </h2>

              <h3 className="text-xl font-semibold mb-3" style={{ color: "#25366b" }}>
                Cookies esenciales
              </h3>
              <p className="mb-6 leading-relaxed text-gray-700">
                Estas cookies son necesarias para el funcionamiento del sitio web y no se pueden desactivar en nuestros
                sistemas.
              </p>

              <h3 className="text-xl font-semibold mb-3" style={{ color: "#25366b" }}>
                Cookies de análisis
              </h3>
              <p className="mb-6 leading-relaxed text-gray-700">
                Nos permiten contar las visitas y fuentes de tráfico para poder medir y mejorar el rendimiento de
                nuestro sitio.
              </p>

              <h2 className="text-2xl font-bold mb-4" style={{ color: "#25366b" }}>
                Control de cookies
              </h2>
              <p className="mb-6 leading-relaxed text-gray-700">
                Puede controlar y/o eliminar las cookies como desee. Puede eliminar todas las cookies que ya están en su
                computadora y puede configurar la mayoría de los navegadores para evitar que se coloquen. Sin embargo,
                si hace esto, es posible que tenga que ajustar manualmente algunas preferencias cada vez que visite un
                sitio y que algunos servicios y funcionalidades no funcionen.
              </p>

              <h2 className="text-2xl font-bold mb-4" style={{ color: "#25366b" }}>
                Contacto
              </h2>
              <p className="mb-6 leading-relaxed text-gray-700">
                Si tiene alguna pregunta sobre nuestra política de cookies, puede contactarnos en:{" "}
                <a
                  href="mailto:edwin.jarrin@asambleanacional.gob.ec"
                  className="font-semibold hover:underline"
                  style={{ color: "#029048" }}
                >
                  edwin.jarrin@asambleanacional.gob.ec
                </a>
              </p>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </main>
  )
}
