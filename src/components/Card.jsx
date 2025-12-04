import Badge from "./Badge";
import Eye from "./icons/Eye";

export default function Card({ title, desc, stack, url }) {
  const stackArray = Array.isArray(stack) ? stack : [];

  return (
    <div className="relative flex flex-col gap-4 bg-[#1b1b1b] w-[450px] h-[300px] max-sm:w-[300px] max-sm:h-[200px] p-10 max-sm:p-4 border border-[#252525] rounded-md max-sm:gap-1">
      <h2 className="text-gradient text-xl whitespace-nowrap overflow-hidden text-ellipsis max-sm:text-sm font-semibold">
        {title}
      </h2>
      <p className="max-sm:text-sm">{desc}</p>
      <div className="flex gap-3 absolute bottom-10 max-sm:bottom-2 text-sm font-semibold">
        {stackArray.map((item, index) => (
          <Badge key={index}>{item}</Badge>
        ))}
      </div>
      {url ? (
        <div className="w-fit absolute top-2 right-2 text-(--gray) cursor-pointer">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <Badge>
              <Eye />
            </Badge>
          </a>
        </div>
      ) : null}
    </div>
  );
}
