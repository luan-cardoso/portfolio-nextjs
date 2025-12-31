import Badge from "../../../../shared/components/Badge";
import Buildings from "../../../../shared/icons/Buildings";
import Eye from "../../../../shared/icons/Eye";

export default function Card({ title, desc, stack, url, clientOrCompany }) {
  const stackArray = Array.isArray(stack) ? stack : [];

  return (
    <div className="grid grid-cols-1 grid-rows-[2fr_8fr] w-[560px] h-[350px] max-sm:w-[300px] max-sm:h-[300px] rounded-2xl bg-lime-200 border border-black/25">
      <div className="rounded-t-2xl bg-lime-200 flex gap-4 items-center px-10 py-4 ">
        <div className="flex gap-1 items-center">
          <Buildings />
          <p>{clientOrCompany}</p>
        </div>
        {url ? (
          <div className="w-fit cursor-pointer max-sm:top-3 max-sm:right-3 ">
            <a
              className="flex gap-1 items-center justify-center"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Eye />
              Acessar
            </a>
          </div>
        ) : null}
      </div>
      <div className="relative rounded-2xl bg-(--black) p-10 flex flex-col gap-4 max-sm:p-4">
        <h2 className="text-2xl whitespace-nowrap overflow-hidden text-ellipsis max-sm:text-sm font-semibold text-[#e6e6e6]">
          {title}
        </h2>
        <p className="text-lg leading-5 max-sm:text-sm text-[#e6e6e6]">
          {desc}
        </p>
        <div className="text-(--gray) flex flex-row gap-3 absolute bottom-12 max-sm:bottom-6 text-sm font-semibold">
          {stackArray.map((item, index) => (
            <Badge bg="#303030" key={index}>
              {item}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
