import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Aviso Legal - Dr. Edwin Jarrín Rivadeneira",
  description: "Aviso Legal del sitio web oficial",
}

export default function AvisoLegalPage() {
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
            Aviso Legal
          </h1>

          <Card className="p-8">
            <div className="prose prose-lg max-w-none">
              <p className="mb-6 leading-relaxed text-gray-700">
                Última actualización:{" "}
                {new Date().toLocaleDateString("es-EC", { year: "numeric", month: "long", day: "numeric" })}
              </p>

              <h2 className="text-2xl font-bold mb-4" style={{ color: "#25366b" }}>
                Datos identificativos
              </h2>
              <p className="mb-6 leading-relaxed text-gray-700">
                En cumplimiento con el deber de información recogido en la legislación ecuatoriana, se facilitan a
                continuación los siguientes datos:
              </p>
              <ul className="list-none pl-0 mb-6 space-y-2 text-gray-700">
                <li>
                  <strong>Titular:</strong> Dr. Edwin Jarrín Rivadeneira
                </li>
                <li>
                  <strong>Cargo:</strong> Asambleísta del Ecuador por Morona Santiago
                </li>
                <li>
                  <strong>Correo electrónico:</strong> edwin.jarrin@asambleanacional.gob.ec
                </li>
              </ul>

              <h2 className="text-2xl font-bold mb-4" style={{ color: "#25366b" }}>
                Objeto del sitio web
              </h2>
              <p className="mb-6 leading-relaxed text-gray-700">
                El presente sitio web tiene como objeto informar a la ciudadanía sobre las actividades, proyectos y
                gestión del Dr. Edwin Jarrín Rivadeneira como Asambleísta de la República del Ecuador por la provincia
                de Morona Santiago.
              </p>

              <h2 className="text-2xl font-bold mb-4" style={{ color: "#25366b" }}>
                Condiciones de uso
              </h2>
              <p className="mb-6 leading-relaxed text-gray-700">
                El acceso y navegación en este sitio web implica la aceptación de las condiciones de uso aquí
                establecidas. El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que se
                ofrecen y a no emplearlos para:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público</li>
                <li>
                  Difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico, de apología del
                  terrorismo o atentatorio contra los derechos humanos
                </li>
                <li>Provocar daños en los sistemas físicos y lógicos del sitio web</li>
                <li>
                  Introducir o difundir virus informáticos o cualesquiera otros sistemas físicos o lógicos que sean
                  susceptibles de provocar daños
                </li>
              </ul>

              <h2 className="text-2xl font-bold mb-4" style={{ color: "#25366b" }}>
                Propiedad intelectual
              </h2>
              <p className="mb-6 leading-relaxed text-gray-700">
                Todos los contenidos del sitio web, incluyendo textos, fotografías, gráficos, imágenes, iconos,
                tecnología, software, así como su diseño gráfico y códigos fuente, constituyen una obra cuya propiedad
                pertenece al Dr. Edwin Jarrín Rivadeneira, sin que puedan entenderse cedidos al usuario ninguno de los
                derechos de explotación sobre los mismos más allá de lo estrictamente necesario para el correcto uso del
                sitio web.
              </p>

              <h2 className="text-2xl font-bold mb-4" style={{ color: "#25366b" }}>
                Protección de datos
              </h2>
              <p className="mb-6 leading-relaxed text-gray-700">
                Los datos personales que se faciliten a través de este sitio web serán tratados de acuerdo con la
                legislación vigente en Ecuador sobre protección de datos personales. Para más información, consulte
                nuestra Política de Privacidad.
              </p>

              <h2 className="text-2xl font-bold mb-4" style={{ color: "#25366b" }}>
                Enlaces externos
              </h2>
              <p className="mb-6 leading-relaxed text-gray-700">
                Este sitio web puede contener enlaces a sitios web de terceros. El Dr. Edwin Jarrín Rivadeneira no asume
                ninguna responsabilidad por el contenido de dichos sitios web ni por las prácticas de privacidad que
                estos implementen.
              </p>

              <h2 className="text-2xl font-bold mb-4" style={{ color: "#25366b" }}>
                Modificaciones
              </h2>
              <p className="mb-6 leading-relaxed text-gray-700">
                Nos reservamos el derecho de modificar el presente aviso legal en cualquier momento. Los cambios serán
                publicados en esta página con la fecha de última actualización.
              </p>

              <h2 className="text-2xl font-bold mb-4" style={{ color: "#25366b" }}>
                Legislación aplicable
              </h2>
              <p className="mb-6 leading-relaxed text-gray-700">
                Las presentes condiciones generales se rigen por la legislación ecuatoriana. Para cualquier controversia
                que pudiera derivarse del acceso o uso de este sitio web, el usuario y el titular se someten a los
                tribunales competentes del Ecuador.
              </p>

              <h2 className="text-2xl font-bold mb-4" style={{ color: "#25366b" }}>
                Contacto
              </h2>
              <p className="mb-6 leading-relaxed text-gray-700">
                Para cualquier duda o consulta sobre este aviso legal, puede contactarnos en:{" "}
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
