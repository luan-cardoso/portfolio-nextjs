import Badge from "../../../../shared/components/Badge";
import Eye from "../../../../shared/icons/Eye";

export default function Card({ title, desc, stack, url }) {
  const stackArray = Array.isArray(stack) ? stack : [];

  return (
    <div className="relative flex flex-col gap-4 w-[650px] h-[400px] max-sm:w-[300px] max-sm:h-[300px] p-12 max-sm:p-6 border border-[#252525] rounded-md">
      <h2 className="w-fit text-gradient text-2xl whitespace-nowrap overflow-hidden text-ellipsis max-sm:text-sm font-semibold">
        {title}
      </h2>
      <p className="text-xl max-sm:text-sm">{desc}</p>
      <div className="flex gap-3 absolute bottom-12 max-sm:bottom-6 text-sm font-semibold text-[var(--gray)]">
        {stackArray.map((item, index) => (
          <Badge key={index}>{item}</Badge>
        ))}
      </div>
      {url ? (
        <div className="w-fit absolute top-6 right-6 cursor-pointer max-sm:top-3 max-sm:right-3">
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
