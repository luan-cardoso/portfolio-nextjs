import Arrow from "./icons/Arrow";
import ArrowDown from "./icons/ArrowDown";

export default function About() {
  return (
    <div className="flex flex-col gap-14 relative h-full">
      <div className="flex flex-col gap-1 w-fit">
        <h2 className="text-gradient text-4xl font-bold w-fit max-lg:text-3xl max-sm:text-lg">
          Construindo Experiências Digitais
        </h2>
        <p className="text-xl text-(--gray) max-sm:text-sm">
          Especialista em criar aplicações escaláveis, robustas e UI/UX de alta
          qualidade.
        </p>
      </div>
      <div className="flex gap-10 justify-center mt-16 max-sm:mt-0 max-sm:flex-col max-sm:gap-5">
        <div className="w-fit border border-[#252525] rounded-md p-10 max-sm:p-5">
          <p className="font-bold text-gradient text-2xl w-fit max-sm:text-lg max-sm:mb-4">
            O que posso criar?
          </p>
          <p className="text-(--gray) mb-4 max-sm:hidden">
            Desenvolvendo soluções escaláveis e seguras.
          </p>
          <div className="flex flex-col gap-2 text-lg max-sm:text-xs">
            <span className="flex gap-2 items-center">
              <Arrow />
              Páginas Pessoais e Portfólios com foco no SEO.
            </span>
            <span className="flex gap-2 items-center">
              <Arrow />
              Sites Empresariais e E-commerces.
            </span>
            <span className="flex gap-2 items-center">
              <Arrow />
              Aplicações em Tempo Real.
            </span>
            <span className="flex gap-2 items-center">
              <Arrow />
              APIs e Microsserviços.
            </span>
            <span className="flex gap-2 items-center">
              <Arrow />
              Apps Android e iOS [Em Breve].
            </span>
          </div>
        </div>
        <div className="w-fit border border-[#252525] rounded-md p-10 max-sm:p-5">
          <p className="font-bold text-gradient text-2xl w-fit max-sm:text-lg max-sm:mb-4">
            Tecnologias que uso
          </p>
          <p className="text-(--gray) mb-4 max-sm:hidden">
            Trabalhando com tecnologias modernas e funcionais.
          </p>
          <div className="flex flex-col gap-2 text-lg max-sm:text-xs">
            <span className="flex gap-2 items-center">
              <Arrow />
              Typescript/Javascript.
            </span>
            <span className="flex gap-2 items-center">
              <Arrow />
              React, Next.js, TailwindCSS.
            </span>
            <span className="flex gap-2 items-center">
              <Arrow />
              Node.js, Express, Zod, ORMs, Docker.
            </span>
            <span className="flex gap-2 items-center">
              <Arrow />
              MongoDB, PostgreSQL, MySQL, Supabase.
            </span>
          </div>
        </div>
      </div>
      <div className="bottom-10 left-1/2 -translate-x-1/2 absolute flex gap-2 justify-center items-center max-sm:bottom-2 max-sm:text-xs">
        <p>Ver Projetos</p>
        <ArrowDown />
      </div>
    </div>
  );
}
