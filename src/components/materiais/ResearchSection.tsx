import type React from "react"
import Link from "next/link"

interface Research {
  id: string
  title: string
  year: string
  authors: string[]
  summary: string
  impact: string
  tags: string[]
  link: string
}

const ResearchSection: React.FC = () => {
  const researches: Research[] = [
    {
      id: "1",
      title: "Análise de Vulnerabilidades em IoT",
      year: "2025",
      authors: ["John Doe", "John Doe"],
      summary:
        "Estudo abrangente sobre as vulnerabilidades em dispositivos IoT comuns e estratégias para mitigação de riscos em ambientes domésticos e industriais.",
      impact: "Alto impacto na indústria de dispositivos conectados",
      tags: ["IoT", "Segurança", "Treinamento"],
      link: "https://lume.ufrgs.br/bitstream/handle/10183/222479/001126492.pdf?sequence=1",
    },
    {
      id: "2",
      title: "Análise de Vulnerabilidades em IoT",
      year: "2025",
      authors: ["John Doe", "John Doe"],
      summary:
        "Estudo abrangente sobre as vulnerabilidades em dispositivos IoT comuns e estratégias para mitigação de riscos em ambientes domésticos e industriais.",
      impact: "Alto impacto na indústria de dispositivos conectados",
      tags: ["IoT", "Segurança", "Treinamento"],
      link: "https://lume.ufrgs.br/bitstream/handle/10183/222479/001126492.pdf?sequence=1",
    },
  ]

  return (
    <section className="bg-black py-12 md:py-20 relative mt-0 p-0">

      <div className="container mx-auto px-32 md:px-48 mt-0 p-0">
        <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-8 md:mb-16"  style={{ fontSize: "45px"}}>Pesquisa & Inovação</h2>

        {/* Container */}
        <div className="max-w-7xl mx-auto border-[2px] rounded-lg p-8" style={{ backgroundColor: "#201E21", borderColor: "#7327FF" }}>
          <div className="space-y-0">
            {researches.map((research, index) => (
              <div key={research.id}>
                <div className="py-8">
                  {/* Layout principal */}
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Coluna esquerda */}
                    <div className="lg:col-span-3 space-y-6">
                      {/* Header com título */}
                      <div>
                        <h3 className="font-medium mb-2" style={{ fontSize: "22px", color: "#A372FF" }}>Título do Estudo</h3>
                        <h4 className="text-white font-semibold text-xl" style={{ fontSize: "26px"}}>{research.title}</h4>
                      </div>

                      {/* Autores */}
                      <div>
                        <p className="font-medium mb-1" style={{ fontSize: "22px", color: "#A372FF" }}>Autores</p>
                        <p className="text-white text-sm" style={{ fontSize: "26px"}}>{research.authors.join(", ")}</p>
                      </div>

                      {/* Resumo */}
                      <div>
                        <p className="font-medium mb-2" style={{ fontSize: "22px", color: "#A372FF" }}>Resumo</p>
                        <p className="text-gray-300 text-sm leading-relaxed" style={{ fontSize: "18px"}}>{research.summary}</p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {research.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            style={{ fontSize: "20px", color: "#B59AE5", border: "2px solid rgba(115, 39, 255, 0.5)", backgroundColor: "rgba(115, 39, 255, 0.5)" }}
                            className="px-3 py-1 rounded-full font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Coluna direita */}
                    <div className="space-y-6">
                      {/* Ano */}
                      <div>
                        <p className="font-medium mb-1" style={{ fontSize: "22px", color: "#A372FF" }}>Ano</p>
                        <p className="text-white font-semibold text-lg" style={{ fontSize: "26px"}}>{research.year}</p>
                      </div>

                      {/* Impacto */}
                      <div>
                        <p className="font-medium mb-2" style={{ fontSize: "22px", color: "#A372FF" }}>Impacto</p>
                        <p className="text-gray-300 text-sm leading-relaxed" style={{ fontSize: "18px"}}>{research.impact}</p>
                      </div>

                      {/* Link */}
                      <div>
                        <p className="font-medium mb-1" style={{ fontSize: "22px", color: "#A372FF" }}>Link</p>
                        <Link
                          href={research.link}
                          style={{ fontSize: "20px", color: "#A372FF" }}
                          className="text-purple-400 hover:text-purple-300 font-bold text-base transition-colors inline-flex items-center gap-1"
                        >
                          Visualizar
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Linha separadora entre cards */}
                {index < researches.length - 1 && <div className="border-t border-purple-500/50"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResearchSection
