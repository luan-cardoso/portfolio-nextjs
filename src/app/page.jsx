import Badge from "../components/Badge";
import ArrowDown from "../components/icons/ArrowDown";
import GitHub from "../components/icons/GitHub";
import WhatsApp from "../components/icons/WhatsApp";
import Projects from "../components/Projects";
import About from "../components/About";
import SplitText from "../components/SplitText";
import "animate.css";
import Arrow from "../components/icons/Arrow";
import TextType from "../components/TextType";

export default function HomePage() {
  return (
    <div className="scroll-container">
      {/*Home*/}
      <section className="scroll-section section-1 relative overflow-hidden flex flex-col items-center">
        {/*Intro*/}
        <div id="background" className="relative" />
        <div className="gap-12 flex flex-col items-center absolute text-center mt-52 max-sm:mt-36">
          <div className="bg-gradient flex gap-2 items-center py-2 px-4 -rotate-3 text-2xl rounded-sm max-sm:text-lg">
            <p>Olá, sou Luan Cardoso &#x1F44B;&#x1F3FB;</p>
          </div>
          <h1 className="text-8xl font-extrabold max-sm:text-6xl">
            SOFTWARE
            <SplitText
              className="font-medium text-6xl text-gradient max-sm:hidden ml-6"
              text="Developer."
              duration={0.8}
            />
            <span className="ml-6 font-medium text-6xl text-gradient max-sm:text-4xl hidden max-sm:block">
              Developer.
            </span>
          </h1>
          <p className="text-lg leading-6 tracking-wider max-sm:text-sm max-sm:leading-5 w-[500px] max-sm:w-[350px]">
            Sou um desenvolvedor TypeScript, especialista em Next.js, Node.js e
            outras diversas tecnologias modernas para web. Meu trabalho é
            transformar ideias em experiências digitais excepcionais!
          </p>
          <div className="flex gap-2 bottom-0 items-center">
            <a href="https://github.com/luan-cardoso" target="_blank">
              <Badge>
                <GitHub />
                GitHub
              </Badge>
            </a>
            <a href="https://wa.me/5585988811690" target="_blank">
              <Badge>
                <WhatsApp />
                WhatsApp
              </Badge>
            </a>
            <p className="text-sm text-(--gray) max-sm:text-xs">
              Get in Touch!
            </p>
          </div>
        </div>
        {/*Posso fazer para você*/}
        <div className="flex flex-col gap-1 absolute bottom-10 right-10 z-10 max-sm:bottom-5 max-sm:right-5 max-sm:hidden">
          <p className="text-gradient text-lg font-semibold w-fit">
            Posso fazer para você:
          </p>
          <div className="flex gap-2 items-center text-nowrap">
            <Arrow />
            <TextType
              className="text-gradient max-sm:hidden"
              text={["Páginas Pessoais"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
            <p className="hidden max-sm:block">Páginas Pessoais</p>
          </div>
          <div className="flex gap-2 items-center text-nowrap">
            <Arrow />
            <TextType
              className="text-gradient max-sm:hidden"
              text={["Sites Empresariais"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
            <p className="hidden max-sm:block">Sites Empresariais</p>
          </div>
          <div className="flex gap-2 items-center text-nowrap">
            <Arrow />
            <TextType
              className="text-gradient max-sm:hidden"
              text={["Portfólios"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
            <p className="hidden max-sm:block">Portfólios</p>
          </div>
          <div className="flex gap-2 items-center text-nowrap">
            <Arrow />
            <TextType
              className="text-gradient max-sm:hidden"
              text={["E-commerces"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
            <p className="hidden max-sm:block">E-commerces</p>
          </div>
          <div className="flex gap-2 items-center text-nowrap">
            <Arrow />
            <TextType
              className="text-gradient max-sm:hidden"
              text={["Apps iOS [em breve]"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
            <p className="hidden max-sm:block">Apps iOS [em breve]</p>
          </div>
          <div className="flex gap-2 items-center text-nowrap">
            <Arrow />
            <TextType
              className="text-gradient max-sm:hidden"
              text={["Apps Android [em breve]"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
            <p className="hidden max-sm:block">Apps Android [em breve]</p>
          </div>
        </div>
        <div className="absolute top-10 right-10 z-10 text-xs tracking-widest max-sm:top-3 max-sm:right-3">
          <Badge>luan.cardoso0029@gmail.com</Badge>
        </div>
        <div className="bottom-32 absolute flex gap-2 justify-center items-center max-sm:bottom-12">
          <p>Ver projetos</p>
          <ArrowDown />
        </div>
      </section>

      <section className="scroll-section section-2 py-10 max-w-7xl mx-auto px-10 max-sm:px-8">
        <Projects />
      </section>
      <section className="scroll-section section-3 pt-10 max-w-7xl mx-auto px-10 max-sm:px-8">
        <About />
      </section>
    </div>
  );
}
