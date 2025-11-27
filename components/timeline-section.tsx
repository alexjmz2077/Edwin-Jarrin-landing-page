"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type Activity = {
  title: string
  description: string
  image: string
}

type MonthData = {
  month: string
  activities: Activity[]
}

type YearData = {
  year: string
  months: MonthData[]
}

const timelineData: YearData[] = [
  {
    year: "2025",
    months: [
      {
        month: "Enero",
        activities: [
          {
            title: "Inauguración del período legislativo",
            description:
              "Inicio del nuevo período legislativo con la presentación de proyectos prioritarios para Morona Santiago, enfocados en infraestructura vial y desarrollo agrícola sostenible.",
            image: "/legislative-session-ecuador.jpg",
          },
          {
            title: "Reunión con líderes comunitarios",
            description:
              "Encuentro con representantes de las comunidades indígenas de la provincia para establecer una agenda de trabajo colaborativa y escuchar las necesidades directas de la población.",
            image: "/community-meeting-ecuador-amazon.jpg",
          },
          {
            title: "Visita a proyectos de infraestructura",
            description:
              "Recorrido por las obras de infraestructura en curso, incluyendo la construcción de carreteras y puentes, para supervisar el progreso y garantizar la calidad de los trabajos.",
            image: "/infrastructure-projects-ecuador.jpg",
          },
        ],
      },
      {
        month: "Febrero",
        activities: [
          {
            title: "Proyecto de Ley de Desarrollo Amazónico",
            description:
              "Presentación del proyecto de ley para impulsar el desarrollo sostenible de la región amazónica, incluyendo incentivos para emprendimientos locales y protección del medio ambiente.",
            image: "/amazon-rainforest-development-project.jpg",
          },
        ],
      },
      {
        month: "Marzo",
        activities: [
          {
            title: "Visita a comunidades rurales",
            description:
              "Recorrido por las zonas rurales de Morona Santiago para evaluar las necesidades de infraestructura básica y servicios públicos.",
            image: "/placeholder.svg",
          },
        ],
      },
      {
        month: "Abril",
        activities: [
          {
            title: "Debate sobre presupuesto",
            description:
              "Participación activa en el debate del presupuesto general del estado, defendiendo las asignaciones para la región amazónica.",
            image: "/placeholder.svg",
          },
        ],
      },
      {
        month: "Mayo",
        activities: [
          {
            title: "Foro de desarrollo sostenible",
            description:
              "Organización de foro internacional sobre desarrollo sostenible en la Amazonía.",
            image: "/placeholder.svg",
          },
        ],
      },
      {
        month: "Junio",
        activities: [
          {
            title: "Propuesta educativa",
            description:
              "Presentación de proyecto para mejorar la calidad educativa en escuelas rurales.",
            image: "/placeholder.svg",
          },
        ],
      },
    ],
  },
  {
    year: "2026",
    months: [
      {
        month: "Enero",
        activities: [
          {
            title: "Aprobación de presupuesto para educación",
            description:
              "Gestión exitosa para la asignación de recursos extraordinarios destinados a mejorar la infraestructura educativa en zonas rurales de Morona Santiago.",
            image: "/school-construction-rural-ecuador.jpg",
          },
        ],
      },
    ],
  },
  {
    year: "2027",
    months: [],
  },
  {
    year: "2028",
    months: [],
  },
  {
    year: "2029",
    months: [],
  },
]

const allMonths = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
]

export default function TimelineSection() {
  const [selectedYear, setSelectedYear] = useState<string>("2025")
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null)
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null)

  const getMonthActivities = (month: string) => {
    const yearData = timelineData.find((y) => y.year === selectedYear)
    return yearData?.months.find((m) => m.month === month)?.activities || []
  }

  return (
    <section id="cronologia" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-serif italic text-center mb-8" style={{ color: "#25366b" }}>
          Cronología de Trabajo
        </h2>

        {/* Year Selector */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {timelineData.map((yearData) => (
            <Button
              key={yearData.year}
              onClick={() => {
                setSelectedYear(yearData.year)
                setSelectedActivity(null)
                setSelectedMonth(null)
              }}
              variant="outline"
              size="lg"
              className={`text-lg font-light px-8 py-4 rounded-md transition-all ${
                selectedYear === yearData.year 
                  ? "text-white border-0 shadow-lg" 
                  : "border-2 hover:bg-[#25366b]/10 hover:border-[#25366b]"
              }`}
              style={
                selectedYear === yearData.year
                  ? { backgroundColor: "#25366b" }
                  : { borderColor: "#25366b", color: "#25366b" }
              }
            >
              {yearData.year}
            </Button>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Months Row */}
            <div className="grid grid-cols-12 gap-2 mb-4">
              {allMonths.map((month) => {
                const activities = getMonthActivities(month)
                const hasActivities = activities.length > 0

                return (
                  <div key={month} className="flex flex-col items-center">
                    <span
                      className="text-xs font-light whitespace-nowrap"
                      style={{ color: hasActivities ? "#25366b" : "#9ca3af" }}
                    >
                      {month}
                    </span>
                  </div>
                )
              })}
            </div>

            {/* Year Indicator Line */}
            <div className="flex items-center mb-4">
              <div className="grid grid-cols-12 gap-2 w-full">
                {allMonths.map((month) => {
                  const isSelected = selectedMonth === month
                  return (
                    <div
                      key={month}
                      className="h-1 transition-all duration-300"
                      style={{
                        backgroundColor: isSelected ? "#25366b" : "transparent",
                      }}
                    />
                  )
                })}
              </div>
            </div>

            {/* Horizontal Timeline Line */}
            <div className="relative h-1 bg-gray-300" />

            {/* Activity Cards Row (Below) */}
            <div className="grid grid-cols-12 gap-2 min-h-[140px]">
              {allMonths.map((month) => {
                const activities = getMonthActivities(month)

                return (
                  <div key={month} className="relative">
                    {/* Vertical Connector Line */}
                    {activities.length > 0 && (
                      <div
                        className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-300"
                        style={{ top: "0", height: "40px" }}
                      />
                    )}
                    {activities.length > 0 && (
                      <div className="flex flex-col gap-2 pt-10">
                        {activities.map((activity, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              setSelectedActivity(activity)
                              setSelectedMonth(month)
                            }}
                            className="bg-white border-2 rounded-md p-2 shadow-sm hover:shadow-lg transition-all text-[10px] font-normal text-left hover:scale-105 relative z-10"
                            style={{
                              borderColor: selectedActivity === activity ? "#25366b" : "#cbd5e1",
                              backgroundColor: selectedActivity === activity ? "#e8eef7" : "white",
                            }}
                          >
                            <p className="line-clamp-3 leading-tight" style={{ color: "#1e293b" }}>
                              {activity.title}
                            </p>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Activity Detail Card */}
          {selectedActivity && (
            <Card
              className="mt-16 overflow-hidden shadow-2xl border-2 animate-in fade-in-50"
              style={{ borderColor: "#25366b" }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 md:p-12 bg-gradient-to-br from-white to-gray-50">
                  <h3 className="text-3xl font-serif italic mb-6 text-balance" style={{ color: "#25366b" }}>
                    {selectedActivity.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-700">{selectedActivity.description}</p>
                </div>
                <div className="relative h-80 md:h-auto bg-gray-100">
                  <div className="absolute inset-0 p-6 flex items-center justify-center">
                    <div
                      className="relative w-full h-full bg-white p-3 shadow-xl max-h-[400px]"
                      style={{
                        boxShadow: "0 10px 40px rgba(0,0,0,0.15), inset 0 0 0 1px rgba(0,0,0,0.1)",
                      }}
                    >
                      <img
                        src={selectedActivity.image || "/placeholder.svg"}
                        alt={selectedActivity.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {!selectedActivity && (
            <div className="text-center text-gray-400 text-lg font-light mt-12 py-12 border-2 border-dashed border-gray-200 rounded-lg">
              Selecciona una actividad para ver los detalles
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
