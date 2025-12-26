import SplitText from "../../../../shared/components/SplitText";

export default function About() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <SplitText
          className="font-bold text-xl text-gradient max-sm:hidden"
          text="Construindo Experiências"
          duration={0.8}
        />
        <h2 className="font-bold text-xl text-gradient hidden max-sm:block max-sm:text-lg">
          Construindo Experiências
        </h2>
        <p className="text-(--gray) max-sm:text-sm">
          Aplicações escaláveis, robustas e seguras.
        </p>
      </div>
      <p className="leading-6 text-lg">
        Desenvolvedor Full Stack especializado em ecossistema TypeScript
        (Next.js & Node.js). Transformo conceitos complexos em aplicações web de
        alto desempenho e experiências digitais memoráveis.
      </p>
    </div>
  );
}
