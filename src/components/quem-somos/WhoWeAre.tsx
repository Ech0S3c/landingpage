// components/sections/QuemSomos.tsx
import Image from 'next/image';

export default function WhoWeAre() {
  return (
    <section className="bg-primary text-light px-6 py-section font-body mt-0">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Texto */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-4xl lg:text-5xl font-heading mb-4">Quem Somos Nós</h2>
          <p className="text-muted max-w-xl mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Imagem e descrição */}
        <div className="flex-1 flex flex-col items-center lg:items-start">
          <div className="border-2 border-secondary rounded-xl overflow-hidden">
            <Image
              src="/assets/team.jpg"
              alt="Nosso Time"
              width={600}
              height={400}
              className="w-full max-w-md object-cover"
            />
          </div>

          <div className="mt-4 text-center lg:text-left max-w-md">
            <h3 className="text-2xl font-heading text-light mb-2">Nosso Time</h3>
            <p className="text-muted mb-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
            <span className="text-sm text-muted block mt-2">Diretoria 2025</span>
          </div>
        </div>
      </div>
    </section>
  );
}
