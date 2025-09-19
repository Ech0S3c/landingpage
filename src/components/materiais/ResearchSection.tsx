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
  const researches: Research[] = []

  return (
    <section className="bg-black py-12 md:py-20 relative">
      {/* Ajuste do padding horizontal para mobile */}
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8 md:mb-16">
          Pesquisa & Inovação
        </h2>

        {/* Container dos cards */}
        <div className="max-w-7xl mx-auto border-[2px] rounded-lg p-4 sm:p-8" style={{ backgroundColor: "#201E21", borderColor: "#7327FF" }}>
          {researches.length === 0 ? (
            <div className="text-center py-8">
              <svg 
                className="w-12 h-12 mx-auto text-purple-400 opacity-50 mb-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                />
              </svg>
              
              <h3 className="text-lg font-semibold text-white mb-2">
                Nenhum material está disponível no momento
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed max-w-xl mx-auto">
                Estamos trabalhando para disponibilizar pesquisas e materiais de inovação em cibersegurança. 
                Em breve, você encontrará aqui estudos, artigos e descobertas da nossa equipe.
              </p>
              
              <div className="pt-3">
                <p className="text-purple-400 font-medium text-sm">
                  Fique atento às próximas atualizações!
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-0">
              {researches.map((research, index) => (
                <div key={research.id}>
                  <div className="py-8">
                    {/* Grid que empilha no mobile */}
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                      {/* Coluna esquerda */}
                      <div className="lg:col-span-3 space-y-6">
                        <div>
                          <h3 className="font-medium mb-2 text-lg sm:text-xl" style={{ color: "#A372FF" }}>
                            Título do Estudo
                          </h3>
                          <h4 className="text-white font-semibold text-xl sm:text-2xl">
                            {research.title}
                          </h4>
                        </div>

                        <div>
                          <p className="font-medium mb-1 text-lg sm:text-xl" style={{ color: "#A372FF" }}>
                            Autores
                          </p>
                          <p className="text-white text-base sm:text-lg">
                            {research.authors.join(", ")}
                          </p>
                        </div>

                        <div>
                          <p className="font-medium mb-2 text-lg sm:text-xl" style={{ color: "#A372FF" }}>
                            Resumo
                          </p>
                          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                            {research.summary}
                          </p>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {research.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              style={{
                                fontSize: "16px",
                                color: "#B59AE5",
                                border: "2px solid rgba(115, 39, 255, 0.5)",
                                backgroundColor: "rgba(115, 39, 255, 0.5)",
                              }}
                              className="px-3 py-1 rounded-full font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Coluna direita */}
                      <div className="space-y-6">
                        <div>
                          <p className="font-medium mb-1 text-lg sm:text-xl" style={{ color: "#A372FF" }}>
                            Ano
                          </p>
                          <p className="text-white font-semibold text-lg sm:text-xl">
                            {research.year}
                          </p>
                        </div>

                        <div>
                          <p className="font-medium mb-2 text-lg sm:text-xl" style={{ color: "#A372FF" }}>
                            Impacto
                          </p>
                          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                            {research.impact}
                          </p>
                        </div>

                        <div>
                          <p className="font-medium mb-1 text-lg sm:text-xl" style={{ color: "#A372FF" }}>
                            Link
                          </p>
                          <Link
                            href={research.link}
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

                  {/* Linha separadora */}
                  {index < researches.length - 1 && <div className="border-t border-purple-500/50"></div>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ResearchSection
