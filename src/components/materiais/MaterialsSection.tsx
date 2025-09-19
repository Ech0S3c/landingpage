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
    title: "Redes de Computadores",
    href: "https://ech0s3c.github.io/material/Redes/",
    imageSrc: "/Card-class.svg",
  },
  {
    id: 5,
    title: "Sistema Operacionais",
    href: "https://ech0s3c.github.io/material/Sistemas-Operacionais/",
    imageSrc: "/Card-class.svg",
  },
  {
    id: 6,
    title: "Em breve",
    href: "#forense-digital",
    imageSrc: "/Card-class.svg",
  },
]

export default function MaterialsSection() {
  return (
    <section className="py-16 px-4 bg-black mt-14">
      <div className="max-w-7xl mx-auto">
        {/* Título da seção */}
        <h2 className="text-4xl font-bold text-white text-center mb-10" style={{ fontSize: "45px"}}>Materiais</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 auto-rows-max place-items-center">
          {materials.map((material) => (
            <Link
              key={material.id}
              href={material.href}
              target="_blank"
              className="group block transform transition-all duration-300 hover:scale-105 hover:shadow-2xl w-full max-w-sm"
            >
              <div className="relative w-full aspect-square">
                {/* Imagem de fundo */}
                <Image
                  src={material.imageSrc}
                  alt={material.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}


