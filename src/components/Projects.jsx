import Card from "./Card";

export default function Sec2() {
  return (
    <div className="flex flex-col gap-16 max-sm:gap-8">
      <div className="flex flex-col gap-1 w-fit">
        <h1 className="text-4xl font-bold text-gradient max-lg:text-3xl max-sm:text-lg">
          Projetos em destaque
        </h1>
        <p className="text-lg max-sm:text-sm">
          Todos os projetos estão disponíveis no meu Github.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="grid grid-cols-2 gap-10 max-lg:overflow-y-auto max-lg:grid-cols-1 max-lg:h-[700px] max-sm:h-[500px]">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <p className="text-sm hidden max-lg:block max-sm:block">
          use o scroll &#x261D;&#x1F3FB;
        </p>
      </div>
    </div>
  );
}
