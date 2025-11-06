export default function Sec3() {
  return (
    <div className="flex flex-col gap-14">
      <div>
        <h1 className="text-gradient text-4xl font-bold w-fit">Sobre mim.</h1>
        <p className="text-lg">Me conheça melhor.</p>
      </div>
      <div  className="text-lg flex flex-col gap-4 text-justify">
        <p>
        Sou um Desenvolvedor Web especializado em transformar requisitos complexos em aplicações robustas e funcionais. Com formação em Engenharia de Software, eu me dedico a construir soluções digitais que não apenas funcionam, mas que escalam e entregam resultados. Meu foco está em desenvolver experiências web modernas e eficientes, utilizando as melhores práticas para otimizar a performance.
        </p>
        <p>
        Minha stack principal é construída sobre o JavaScript e TypeScript, tecnologias que garantem a solidez e escalabilidade dos projetos. Sou proficiente em React e Next.js para desenvolver interfaces rápidas e otimizadas para SEO, e utilizo Node.js no backend para construir APIs robustas e seguras. Atuando de maneira Full-Stack, entregando soluções completas do início ao fim. Além disso, busco expandir minha expertise para o Desenvolvimento Mobile utilizando Flutter, garantindo que as soluções sejam verdadeiramente multiplataforma.
        </p> 
      </div>
      <div className="flex gap-10 justify-center mt-16">
        <div className="w-fit border border-[#252525] rounded-md p-4">
            <p className="font-bold text-gradient mb-4 w-fit">Frontend</p>
            <img src="https://skillicons.dev/icons?i=react,next,css,tailwindcss&theme=dark"/>
        </div>
        <div className="w-fit border border-[#252525] rounded-md p-4">
            <p className="font-bold text-gradient mb-4 w-fit">Backend</p>
            <img src="https://skillicons.dev/icons?i=nodejs,express,vercel&theme=dark"/>
        </div>
        <div className="w-fit border border-[#252525] rounded-md p-4">
            <p className="font-bold text-gradient mb-4 w-fit">Database</p>
            <img src="https://skillicons.dev/icons?i=mongo,mysql,postgres,supabase&theme=dark"/>
        </div>
      </div>
    </div>
  );
}
