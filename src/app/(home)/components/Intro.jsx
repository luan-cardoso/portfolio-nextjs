import SplitText from "../../../../shared/components/SplitText";
import TextType from "../../../../shared/components/TextType";

export default function Intro() {
  return (
    <div className="flex flex-col items-center w-fit gap-6">
      <div className="bg-gradient flex gap-2 items-center py-2 px-4 text-2xl rounded-sm w-fit max-sm:text-xl">
        <p>Olá, sou Luan Cardoso &#x1F44B;&#x1F3FB;</p>
      </div>
      <h1 className="text-8xl font-extrabold max-sm:text-6xl max-sm:text-center">
        <TextType
          text={["Software", "Next.js", "Node.js"]}
          typingSpeed={145}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
        />
        <SplitText
          className="font-medium text-6xl text-gradient max-sm:hidden"
          text="Developer."
          duration={0.8}
        />
        <span className="ml-6 font-medium text-6xl text-gradient max-sm:text-4xl hidden max-sm:block">
          Developer.
        </span>
      </h1>
    </div>
  );
}
