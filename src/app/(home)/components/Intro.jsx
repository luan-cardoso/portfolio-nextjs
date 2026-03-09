import { Yesteryear } from "next/font/google";
import SplitText from "../../../../shared/components/SplitText";

const yesteryear = Yesteryear({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Intro() {
  return (
    <div className="flex flex-col items-center w-fit">
      <div className="flex items-center gap-4 max-sm:gap-2">
        <h1
          className={`text-red-500 text-7xl ${yesteryear.className} font-light max-sm:text-4xl`}
        >
          Luan
        </h1>
        <SplitText
          className="font-extrabold text-8xl max-sm:hidden"
          text="CARDOSO"
          duration={0.8}
        />
        <span className="font-extrabold text-8xl max-sm:text-4xl hidden max-sm:block">
          CARDOSO
        </span>
      </div>
      <div className="tracking-wider flex items-center py-2 px-4 text-2xl rounded-sm font-bold w-fit max-sm:text-sm">
        <p>DESENVOLVEDOR DE SOFTWARE</p>
      </div>
    </div>
  );
}
