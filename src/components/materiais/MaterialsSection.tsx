import React from "react"
import Image from "next/image"
import Link from "next/link"

interface MaterialCard {
  id: number
  title: string
  href: string
  imageSrc: string
}

const materials: MaterialCard[] = [
  {
    id: 1,
    title: "Introdução à Cibersegurança",
    href: "https://ech0s3c.github.io/material/Conceitos%20Base/parte0",
    imageSrc: "/Card-cyber.svg",
  },
  {
    id: 2,
    title: "Criptografia",
    href: "https://ech0s3c.github.io/material/Criptografia/",
    imageSrc: "/Card-cryptography.svg",
  },
  {
    id: 3,
    title: "Segurança Pessoal",
    href: "https://ech0s3c.github.io/material/Seguran%C3%A7a%20Pessoal/",
    imageSrc: "/Card-security.svg",
  },
  {
    id: 4,
    title: "Aula",
    href: "#analise-vulnerabilidades",
    imageSrc: "/Card-class.svg",
  },
  {
    id: 5,
    title: "Aula",
    href: "#ethical-hacking",
    imageSrc: "/Card-class.svg",
  },
  {
    id: 6,
    title: "Aula",
    href: "#forense-digital",
    imageSrc: "/Card-class.svg",
  },
]

export default function MateriaisSection() {
  return (
    <section className="py-16 px-4 bg-black mt-14">
      <div className="max-w-7xl mx-auto">
        {/* Título da seção */}
        <h2 className="text-4xl font-bold text-white text-center mb-10" style={{ fontSize: "45px"}}>Materiais</h2>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15">
          {materials.map((material) => (
            <Link
              key={material.id}
              href={material.href}
              className="group block transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative w-full h-75">
                {/* Imagem de fundo */}
                <Image
                  src={material.imageSrc}
                  alt=""
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}


