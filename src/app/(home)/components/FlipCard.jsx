import Badge from "../../../../shared/components/Badge";
import Buildings from "../../../../shared/icons/Buildings";

export default function FlipCard({ title, desc, stack, url, clientOrCompany }) {
  const stackArray = Array.isArray(stack) ? stack : [];

  return (
    <div className="group h-80 w-80">
      <div className="relative h-full w-full transition-transform duration-700 transform-3d group-hover:transform-[rotateY(180deg)]">
        <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center  bg-[#202020] px-6 text-center backface-hidden">
          <h1 className="text-2xl font-extrabold uppercase">{title}</h1>

          <div className="absolute bottom-8 flex max-w-[85%] flex-wrap justify-center gap-2  uppercase text-xs tracking-wider">
            {stackArray.map((item, index) => (
              <Badge bg="#161616" key={index}>
                {item}
              </Badge>
            ))}
          </div>
        </div>

        <div className="absolute inset-0 flex h-full w-full flex-col justify-between  bg-[#202020] p-6 backface-hidden transform-[rotateY(180deg)]">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <Buildings />
              <span>{clientOrCompany || "Projeto pessoal"}</span>
            </div>

            <div>
              <p className="mt-3 text-sm">
                {desc || "Sem descrição disponível para este projeto."}
              </p>
            </div>
          </div>

          {url ? (
            <a
              className="inline-flex w-fit items-center justify-center rounded-md border border-black/25 bg-(--crimson) px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-90"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver projeto
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
