import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Biografía - Dr. Edwin Jarrín Rivadeneira",
  description: "Biografía completa del Dr. Edwin Jarrín Rivadeneira, Asambleísta de Morona Santiago",
}

export default function BiografiaPage() {
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
            Biografía Completa
          </h1>

          <Card className="p-8 mb-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#25366b" }}>
                Inicios y Formación
              </h2>
              <p className="mb-6 leading-relaxed text-gray-700">
                El Dr. Edwin Jarrín Rivadeneira nació en Macas, capital de la provincia de Morona Santiago, en el
                corazón de la región amazónica ecuatoriana. Desde temprana edad, demostró un profundo interés por el
                servicio público y el bienestar de su comunidad.
              </p>

              <h2 className="text-2xl font-bold mb-4" style={{ color: "#25366b" }}>
                Trayectoria Académica
              </h2>
              <p className="mb-6 leading-relaxed text-gray-700">
                Completó sus estudios superiores con honores, obteniendo el título de Doctor en [Campo de Estudio]. Su
                compromiso con la excelencia académica lo llevó a especializarse en gestión pública y desarrollo
                regional, áreas fundamentales para su futura carrera política.
              </p>

              <h2 className="text-2xl font-bold mb-4" style={{ color: "#25366b" }}>
                Carrera Política
              </h2>
              <p className="mb-6 leading-relaxed text-gray-700">
                Su entrada en la política estuvo motivada por el deseo de generar cambios significativos en su provincia
                natal. A lo largo de su carrera, ha ocupado diversos cargos de responsabilidad, siempre manteniendo su
                compromiso con la transparencia y el servicio a la ciudadanía.
              </p>

              <h2 className="text-2xl font-bold mb-4" style={{ color: "#25366b" }}>
                Como Asambleísta
              </h2>
              <p className="mb-6 leading-relaxed text-gray-700">
                Actualmente, como Asambleísta de la República del Ecuador por Morona Santiago, el Dr. Jarrín trabaja
                incansablemente en la promoción de leyes y proyectos que beneficien directamente a su provincia y a toda
                la región amazónica. Sus principales áreas de enfoque incluyen:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Desarrollo sostenible de la Amazonía ecuatoriana</li>
                <li>Mejoramiento de la infraestructura vial y educativa</li>
                <li>Fortalecimiento de los sistemas de salud en zonas rurales</li>
                <li>Protección de los derechos de las comunidades indígenas</li>
                <li>Impulso a proyectos de emprendimiento local</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4" style={{ color: "#25366b" }}>
                Visión y Compromiso
              </h2>
              <p className="mb-6 leading-relaxed text-gray-700">
                El Dr. Jarrín Rivadeneira mantiene una visión clara del futuro de Morona Santiago: una provincia
                próspera, con oportunidades equitativas para todos sus habitantes, que preserve su riqueza natural
                mientras promueve un desarrollo económico sostenible. Su compromiso inquebrantable es trabajar cada día
                para hacer de esta visión una realidad.
              </p>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </main>
  )
}
