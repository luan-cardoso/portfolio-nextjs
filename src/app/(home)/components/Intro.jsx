"use client";

import { TypeAnimation } from "react-type-animation";

export default function Intro() {
  return (
    <div className="flex flex-col items-center gap-6 justify-center w-fit h-full">
      <div className="flex items-center gap-6">
        <h1 className="font-extrabold text-6xl">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "SOFTWARE DEV",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "TYPESCRIPT",
              1000,
              "NODE.JS",
              1000,
              "NEXT.JS",
              1000,
              "C# .NET",
              1000,
            ]}
            wrapper="span"
            speed={20}
            repeat={Infinity}
          />
        </h1>
      </div>
      <div className="text-[gray] tracking-wide text-center w-2/3 text-xl leading-5">
        <p>
          Meu nome é <span className="text-(--crimson) font-bold">Luan</span>,
          desenvolvedor TypeScript (Node.js, Next.js), C# .NET, graduando em
          Engenharia de Software.
        </p>
      </div>
    </div>
  );
}
