import { Card } from "@/components/ui/card"
import { Mail, Phone, Facebook, Instagram } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contacto" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl text-center mb-10 text-balance font-serif italic" style={{ color: "#25366b" }}>
          Contacto
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {/* Contact Info Card */}
          <Card className="p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4 font-serif" style={{ color: "#25366b" }}>
              Información de Contacto
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg flex-shrink-0" style={{ backgroundColor: "#e8eef7" }}>
                  <Phone className="h-5 w-5" style={{ color: "#25366b" }} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Teléfono</h4>
                  <a href="tel:+593987654321" className="text-gray-600 hover:text-[#25366b] transition-colors text-sm">
                    +593 98 765 4321
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg flex-shrink-0" style={{ backgroundColor: "#e8eef7" }}>
                  <Mail className="h-5 w-5" style={{ color: "#25366b" }} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Correo Electrónico</h4>
                  <a
                    href="mailto:edwin.jarrin@asambleanacional.gob.ec"
                    className="text-gray-600 hover:text-[#25366b] transition-colors break-all text-sm"
                  >
                    edwin.jarrin@asambleanacional.gob.ec
                  </a>
                </div>
              </div>
            </div>
          </Card>

          {/* Social Media Card */}
          <Card className="p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4 font-serif" style={{ color: "#25366b" }}>
              Redes Sociales
            </h3>

            <div className="space-y-3">
              <a
                href="https://www.facebook.com/edwinjarrinrivadeneira"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <div
                  className="p-2 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0"
                  style={{ backgroundColor: "#1877F2" }}
                >
                  <Facebook className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Facebook</h4>
                  <p className="text-xs text-gray-600">@edwinjarrinrivadeneira</p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/edwinjarrinec/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <div
                  className="p-2 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0"
                  style={{ background: "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)" }}
                >
                  <Instagram className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Instagram</h4>
                  <p className="text-xs text-gray-600">@edwinjarrinec</p>
                </div>
              </a>

              <a
                href="https://x.com/edwinjarrinec"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <div
                  className="p-2 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0"
                  style={{ backgroundColor: "#000000" }}
                >
                  <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">X (Twitter)</h4>
                  <p className="text-xs text-gray-600">@edwinjarrinec</p>
                </div>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
