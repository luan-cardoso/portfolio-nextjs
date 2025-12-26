import Arrow from "../../../../shared/icons/Arrow";
import SplitText from "../../../../shared/components/SplitText";

export default function Skills() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <SplitText
          className="font-bold text-xl text-gradient"
          text="Tecnologias"
          duration={0.8}
        />
        <p className="text-[var(--gray)]">Tecnologias modernas e funcionais.</p>
      </div>
      <div className="text-xl leading-6 tracking-wide">
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
