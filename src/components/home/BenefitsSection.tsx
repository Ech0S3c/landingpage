import Card from "../general/Card";

const BenefitsSection = () => {
    const benefits = [
        {
            icon: "/D3.svg",
            title: "Comunidade",
            description:
                "Conecte-se a estudantes e profissionais, troque experiências e cresça junto. Eventos, grupos de estudo e suporte constante.",
        },
        {
            icon: "/G4.svg",
            title: "Aprendizado",
            description:
                "Oficinas, trilhas e CTFs para aprender na prática. Conteúdo atualizado e mentoria para acelerar sua evolução.",
        },
        {
            icon: "/C1.svg",
            title: "Networking",
            description:
                "Aproximação com empresas e comunidades do setor. Participe de meetups e tenha acesso a oportunidades e referências.",
        },
        {
            icon: "/H4.svg",
            title: "Preparação de Carreira",
            description:
                "Orientação de portfólio, entrevistas e certificações. Desafios e feedback para conquistar estágios e vagas.",
        },
        {
            icon: "/F4.svg",
            title: "Projetos Práticos",
            description:
                "Desenvolva projetos reais e open source, da ideia ao deploy. Trabalhe em equipe e construa um portfólio sólido.",
        },
    ];

    return (
        <section className="bg-black py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-12 md:mb-20">
                    Benefícios
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-8 md:mb-12">
                    {benefits.slice(0, 3).map((card, index) => (
                        <Card key={index} icon={card.icon} title={card.title} text={card.description} />
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 max-w-5xl mx-auto">
                    {benefits.slice(3).map((card, index) => (
                        <Card key={index + 3} icon={card.icon} title={card.title} text={card.description} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
