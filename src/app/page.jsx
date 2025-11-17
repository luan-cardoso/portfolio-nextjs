import Image from "next/image";
import Badge from "../components/Badge";
import ArrowDown from "../components/icons/ArrowDown";
import GitHub from "../components/icons/GitHub";
import WhatsApp from "../components/icons/WhatsApp";
import Nav from "../components/Nav";
import Projects from "../components/Projects";
import About from "../components/About";
import SplitText from "../components/SplitText";
import "animate.css";
import Arrow from "../components/icons/Arrow";
import TextType from "../components/TextType";

export default function HomePage() {
  return (
    <div className="scroll-container ">
      <section className="scroll-section section-1 grid grid-cols-2 grid-rows-1 max-sm:grid-cols-1 max-lg:grid-cols-1">
        <div className="p-16 flex flex-col justify-center max-sm:py-10 max-sm:px-8">
          <div className="flex flex-col justify-center gap-6 max-sm:gap-4">
            <div className="flex text-lg items-center gap-2">
              <Arrow />
              <h1>Olá, sou Luan Cardoso &#x1F44B;&#x1F3FB;</h1>
            </div>
            <h1 className="text-7xl font-extrabold leading-12 max-sm:text-5xl max-sm:leading-9">
              SOFTWARE <br />
              <SplitText
                className="font-medium text-5xl text-gradient max-sm:hidden"
                text="Developer."
                duration={0.8}
              />
              <span className="font-medium text-5xl text-gradient max-sm:text-4xl hidden max-sm:block">
                Developer.
              </span>
            </h1>
            <p className="text-lg leading-6 tracking-wider max-sm:text-sm max-sm:leading-5">
              Sou um Desenvolvedor Web Fullstack, atualmente morando em
              Fortaleza CE. Meu trabalho é transformar ideias em experiências
              digitais excepcionais!
            </p>
            <div>
              <div className="flex gap-2 bottom-0 items-center">
                <a href="https://github.com/luan-cardoso" target="_blank">
                  <Badge>
                    <GitHub />
                    Github
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
            <div className="flex flex-col gap-2 mt-10 max-sm:mt-5">
              <p className="text-gradient text-lg font-semibold w-fit">
                Posso fazer para você:
              </p>
              <div className="flex flex-col gap-1">
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
                <div className="mt-10 flex gap-2 justify-center items-center max-sm:mt-5">
                  <p>ver projetos</p>
                  <ArrowDown />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative max-sm:hidden max-lg:hidden">
          <Image
            src="/desktop.jpg"
            alt="desktop image"
            fill="true"
            className="object-cover object-center rounded-3xl p-20"
          />
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
