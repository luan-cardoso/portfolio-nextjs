import Arrow from "../../../../shared/icons/Arrow";
import SplitText from "../../../../shared/components/SplitText";

export default function Skills() {
  return (
    <div className="flex flex-col gap-3 text-(--black)">
      <div>
        <SplitText
          className="font-bold text-xl"
          text="Tecnologias"
          duration={0.8}
        />
        <p>Tecnologias modernas e funcionais.</p>
      </div>
      <div className="text-xl leading-4 tracking-wide">
        <div className="flex flex-col text-lg">
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
            Node.js, Express, Zod, Docker.
          </span>
          <span className="flex gap-2 items-center">
            <Arrow />
            MongoDB, PostgreSQL, Supabase.
          </span>
        </div>
      </div>
    </div>
  );
}
