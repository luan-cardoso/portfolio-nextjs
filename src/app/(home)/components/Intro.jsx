import { Yesteryear } from "next/font/google";
import SplitText from "../../../../shared/components/SplitText";

const yesteryear = Yesteryear({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Intro() {
  return (
    <div className="flex flex-col items-center gap-5 w-fit">
      <div className="flex items-center gap-4 max-sm:gap-2">
        <h1
          className={`text-indigo-400 text-8xl ${yesteryear.className} font-light max-sm:text-4xl`}
        >
          Software
        </h1>
        <SplitText
          className="font-extrabold text-7xl max-sm:hidden"
          text="DEV"
          duration={0.8}
        />
        <span className="font-extrabold text-8xl max-sm:text-4xl hidden max-sm:block">
          DEV
        </span>
      </div>
      <div className="tracking-wide flex text-center px-4 text-xl rounded-sm w-fit max-sm:text-sm">
        <p>
          Meu nome é <span className="text-indigo-400 font-bold">Luan</span>,
          desenvolvedor, fascinado por tecnologia, graduando em Engenharia de
          Software.
        </p>
      </div>
    </div>
  );
}
