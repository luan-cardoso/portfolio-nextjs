export default function Sec3() {
  return (
    <div className="flex flex-col gap-14 max-sm:gap-8 relative h-full">
      <div className="flex flex-col gap-1 w-fit">
        <h2 className="text-gradient text-4xl font-bold w-fit max-lg:text-3xl max-sm:text-lg">
          Sobre mim
        </h2>
        <p className="text-lg  max-sm:text-sm">Me conheça melhor.</p>
      </div>
      <div className="text-lg flex flex-col gap-4 text-justify max-lg:text-md max-sm:text-sm">
        <p>
          Sou um Desenvolvedor Web especializado em transformar requisitos
          complexos em aplicações robustas e funcionais. Com formação em
          Engenharia de Software, eu me dedico a construir soluções digitais que
          não apenas funcionam, mas que escalam e entregam resultados. Meu foco
          está em desenvolver experiências web modernas e eficientes, utilizando
          as melhores práticas para otimizar a performance.
        </p>
        <p>
          Minha stack principal é construída sobre o JavaScript e TypeScript,
          tecnologias que garantem a solidez e escalabilidade dos projetos. Sou
          proficiente em React e Next.js para desenvolver interfaces rápidas e
          otimizadas para SEO, e utilizo Node.js no backend para construir APIs
          robustas e seguras. Atuando de maneira Full-Stack, entregando soluções
          completas do início ao fim. Além disso, busco expandir minha expertise
          para o Desenvolvimento Mobile utilizando React Native, garantindo que as
          soluções sejam verdadeiramente multiplataforma.
        </p>
      </div>
      <div className="flex gap-10 justify-center mt-16 max-sm:mt-0 max-sm:gap-1">
        <div className="w-fit border border-[#252525] rounded-md p-4">
          <p className="font-bold text-gradient mb-4 w-fit max-sm:text-xs">
            Frontend
          </p>
          <img alt="skills badges frontend" src="https://skillicons.dev/icons?i=react,next,css,tailwindcss&theme=dark" />
        </div>
        <div className="w-fit border border-[#252525] rounded-md p-4">
          <p className="font-bold text-gradient mb-4 w-fit max-sm:text-xs">
            Backend
          </p>
          <img alt="skills badges backend" src="https://skillicons.dev/icons?i=nodejs,express,vercel&theme=dark" />
        </div>
        <div className="w-fit border border-[#252525] rounded-md p-4">
          <p className="font-bold text-gradient mb-4 w-fit max-sm:text-xs">
            Database
          </p>
          <img alt="skills badges database" src="https://skillicons.dev/icons?i=mongo,mysql,postgres,supabase&theme=dark" />
        </div>
      </div>
      <div className="w-full flex justify-end items-center py-4 absolute bottom-0 text-sm text-[var(--gray)] max-lg:text-xs max-sm:hidden">
        Designed and developed by Luan Cardoso
      </div>
    </div>
  );
}
