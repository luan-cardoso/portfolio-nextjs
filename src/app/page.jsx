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
      <section className="scroll-section section-1 grid grid-cols-2 grid-rows-1 relative">
        <div className="p-16 flex flex-col justify-center">
          <div className="flex flex-col justify-center gap-8">
            <div className="flex text-2xl items-center gap-2">
              <Arrow />
              <h1>Olá, sou Luan Cardoso &#x1F44B;&#x1F3FB;</h1>
            </div>
            <h1 className="text-7xl font-extrabold leading-12">
              SOFTWARE <br />
              <SplitText
                className="font-medium text-5xl text-gradient"
                text="Developer."
                duration={0.8}
              />
              <span className="font-medium text-5xl text-gradient max-sm:text-4xl hidden max-sm:block w-fit">
                Developer.
              </span>
            </h1>
            <p className="text-lg leading-6 tracking-wider">
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
            <div className="flex flex-col gap-2 mt-10">
              <p className="text-gradient text-lg font-semibold w-fit">
                Posso fazer para você:
              </p>
              <div className="flex flex-col gap-1">
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
        <div className="relative">
          <Image
            src="/desktop.jpg"
            alt="desktop image"
            fill="true"
            className="object-cover object-center"
          />
          
        </div>
        <div className="flex gap-2 justify-center items-center absolute bottom-10 left-16">
            <p>ver projetos</p>
            <ArrowDown />
        </div>
      </section>

      <section className="scroll-section section-2 py-10 max-w-7xl mx-auto px-10 max-sm:px-5">
        <Projects />
      </section>
      <section className="scroll-section section-3 pt-10 max-w-7xl mx-auto px-10 max-sm:px-5">
        <About />
      </section>
    </div>
  );
}
