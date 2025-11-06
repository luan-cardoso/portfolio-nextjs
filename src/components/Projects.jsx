import Card from "./Card";

export default function Sec2() {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-2 w-fit">
        <h1 className="text-4xl font-bold text-gradient">
          Projetos em destaque.
        </h1>
        <p className="text-lg">
          Todos os projetos estão disponíveis no meu Github.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-10">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
