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

export default function HomePage() {
  return (
    <div className="scroll-container ">
      <section className="scroll-section section-1 grid grid-cols-1 grid-rows-[1fr_7fr_2fr] max-sm:grid-rows-[1fr_5fr_1fr] pt-10 max-sm:pt-0">
        <Nav />
        <div className="grid grid-cols-2 grid-rows-1 max-sm:grid-cols-1 max-sm:grid-rows-[1fr_1fr] max-sm:gap-2">
          <div className="flex flex-col justify-center gap-8 max-lg:gap-5 max-sm:gap-4">
            <div className="flex text-2xl items-center gap-2 max-lg:text-xl max-sm:hidden">
              <Arrow />
              <h1>Olá, sou Luan Cardoso &#x1F44B;&#x1F3FB;</h1>
            </div>
            <h1 className="text-7xl font-extrabold leading-12 max-lg:text-6xl max-sm:text-5xl max-sm:leading-8">
              SOFTWARE <br />
              <SplitText
                className="font-medium text-5xl text-gradient max-sm:hidden"
                text="Developer."
                duration={0.8}
              />
              <span className="font-medium text-5xl text-gradient max-sm:text-4xl hidden max-sm:block w-fit">
                Developer.
              </span>
            </h1>
            <p className="text-lg leading-6 tracking-wider max-sm:text-sm max-sm:leading-4">
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
                <p className="text-sm text-[var(--gray)] max-sm:text-xs">
                  Get in Touch!
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="animate__animated animate__fadeIn animate__delay-1s flex">
              <div
                className="flex border-2 w-fit h-fit gap-8 p-4 items-center"
                style={{
                  borderImageSource: "var(--gradient)",
                  borderImageSlice: 1,
                }}
              >
                <Image
                  className="w-[220px] h-[220px] max-sm:w-[100px] max-sm:h-[100px] object-contain -rotate-12 max-md:hidden max-lg:hidden max-sm:block"
                  src="/memoji.png"
                  width={400}
                  height={400}
                  alt="Meu memoji"
                  quality={100}
                />
                <div className="flex flex-row gap-8 max-sm:justify-center">
                  <div className="flex flex-col gap-2 justify-center">
                    <p className="text-gradient text-lg max-sm:text-sm font-semibold w-fit">
                      Posso fazer para você:
                    </p>
                    <div className="max-sm:text-xs flex flex-col gap-1">
                      <div className="flex gap-2 items-center text-nowrap">
                        <Arrow />
                        Páginas Pessoais
                      </div>
                      <div className="flex gap-2 items-center text-nowrap">
                        <Arrow />
                        Sites Empresariais
                      </div>
                      <div className="flex gap-2 items-center text-nowrap">
                        <Arrow />
                        Portfólios
                      </div>
                      <div className="flex gap-2 items-center text-nowrap">
                        <Arrow />
                        E-commerce
                      </div>
                      <div className="flex gap-2 items-center text-nowrap">
                        <Arrow />
                        Apps iOS [em breve]
                      </div>
                      <div className="flex gap-2 items-center text-nowrap">
                        <Arrow />
                        Apps Android [em breve]
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </h1>
          </div>
        </div>
        <div className="flex gap-2 justify-center items-center max-sm:text-sm">
          <p>ver projetos</p>
          <ArrowDown />
        </div>
      </section>

      <section className="scroll-section section-2 py-10">
        <Projects />
      </section>
      <section className="scroll-section section-3 pt-10">
        <About />
      </section>
    </div>
  );
}
