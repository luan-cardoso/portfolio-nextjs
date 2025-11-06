import Image from "next/image";
import Badge from "../components/Badge";
import ArrowDown from "../components/icons/ArrowDown";
import GitHub from "../components/icons/GitHub";
import WhatsApp from "../components/icons/WhatsApp";
import Nav from "../components/Nav";
import Projects from "../components/Projects";
import About from "../components/About";

export default function HomePage() {
  return (
    <div className="scroll-container">
      <section className="scroll-section section-1 grid grid-cols-1 grid-rows-[1fr_7fr_2fr] py-10">
        <Nav />
        <div className="grid grid-cols-2 grid-rows-1">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="text-2xl">
              Olá, sou Luan Cardoso &#x1F44B;&#x1F3FB;
            </h1>
            <h1 className="text-7xl font-extrabold leading-12">
              SOFTWARE <br />
              <span className="font-medium text-5xl text-gradient">
                Developer.
              </span>
            </h1>
            <p className="text-lg leading-6 tracking-wider">
              Sou um Desenvolvedor Web Fullstack, atualmente morando em
              Fortaleza CE. Meu trabalho é transformar ideias em experiências
              digitais excepcionais!
            </p>
            <div>
              <p className="text-sm text-[var(--gray)] mb-2">Get in Touch!</p>
              <div className="flex gap-2">
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
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div
              className="rotate-12 border-2 border-[var(--gradient)] overflow-hidden p-6"
              style={{
                width: 400,
                height: 400,
                borderImageSource: "var(--gradient)",
                borderImageSlice: 1,
              }}
            >
              <Image
                className="w-full h-full object-contain"
                src="/memoji.png"
                width={400}
                height={400}
                alt="Meu memoji"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <p>ver projetos</p>
          <ArrowDown />
        </div>
      </section>

      <section className="scroll-section section-2 py-10">
        <Projects />
      </section>
      <section className="scroll-section section-3 py-10">
        <About />
      </section>
    </div>
  );
}
