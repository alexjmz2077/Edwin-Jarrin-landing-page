import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Signature */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4">
              <img
                src="/Foto-Edwin-Jarrin.webp?height=80&width=200"
                alt="Firma Dr. Edwin Jarrín Rivadeneira"
                className="h-16"
              />
            </div>
            <p className="text-sm text-gray-600 text-center md:text-left">Dr. Edwin Jarrín Rivadeneira</p>
            <p className="text-sm text-gray-600 text-center md:text-left">Asambleísta de Morona Santiago</p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col items-center">
            <h4 className="font-semibold text-gray-900 mb-4" style={{ color: "#25366b" }}>
              Información Legal
            </h4>
            <nav className="flex flex-col gap-2 text-center">
              <Link href="/politica-cookies" className="text-sm text-gray-600 hover:text-[#25366b] transition-colors">
                Política de Cookies
              </Link>
              <Link href="/aviso-legal" className="text-sm text-gray-600 hover:text-[#25366b] transition-colors">
                Aviso Legal
              </Link>
            </nav>
          </div>

          {/* Credits */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="font-semibold text-gray-900 mb-4" style={{ color: "#25366b" }}>
              Desarrollo Web
            </h4>
            <p className="text-sm text-gray-600">
              Desarrollado por <span className="font-semibold">Jaime Jiménez</span>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Dr. Edwin Jarrín Rivadeneira. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
