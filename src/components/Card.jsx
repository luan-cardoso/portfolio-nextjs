import Badge from "./Badge";
import Eye from "./icons/Eye";

export default function Card() {
  return (
    <div className="relative flex flex-col gap-4 bg-[#1b1b1b] w-[450px] h-[300px] max-sm:w-[300px] max-sm:h-[200px] p-10 max-sm:p-4 border border-[#252525] rounded-md max-sm:gap-1">
      <h1 className="text-gradient text-xl whitespace-nowrap overflow-hidden text-ellipsis max-sm:text-sm font-semibold">
        Gerador de planos de aula com IA
      </h1>
      <p className="max-sm:text-sm">
        Looluta, in ducimus eius minima reiciendis nam dolore dolores iure error
        dolor, molestias, a repudiandae culpa cupiditate. Voluptates corporis at
        deleniti maxime?
      </p>
      <div className="flex gap-3 absolute bottom-10 max-sm:bottom-2 text-sm font-semibold">
        <Badge>Nextjs</Badge>
        <Badge>TailwindCSS</Badge>
        <Badge>Nodejs</Badge>
      </div>
      <div className="w-fit absolute top-2 right-2 text-[var(--gray)] cursor-pointer">
        <Badge>
          <Eye />
        </Badge>
      </div>
    </div>
  );
}
