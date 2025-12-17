import Badge from "../components/Badge";
import ArrowDown from "../components/icons/ArrowDown";
import GitHub from "../components/icons/GitHub";
import WhatsApp from "../components/icons/WhatsApp";
import Projects from "../components/Projects";
import About from "../components/About";
import SplitText from "../components/SplitText";
import DarkVeil from "../components/DarkVeil";
import Heart from "../components/icons/Heart";

export default function HomePage() {
  return (
    <div className="scroll-container">
      {/*Home*/}
      <section className="scroll-section section-1 relative overflow-hidden flex flex-col items-center">
        {/*Intro*/}
        <div className="absolute inset-0 w-full h-full">
          <DarkVeil />
        </div>
        <div className="gap-8 flex flex-col items-center absolute text-center mt-52 max-sm:mt-28">
          <div className="bg-gradient flex gap-2 items-center py-2 px-4 text-2xl rounded-sm max-sm:text-lg">
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
          <p className="text-xl leading-6 tracking-wider max-sm:text-sm max-sm:leading-5 w-[500px] max-sm:w-[350px]">
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
        <div className="absolute top-10 right-10 z-10 text-xs tracking-widest max-sm:hidden">
          <Badge>luan.cardoso0029@gmail.com</Badge>
        </div>
        <div className="bottom-32 absolute flex gap-2 justify-center items-center max-sm:bottom-12">
          <p>Ver mais</p>
          <ArrowDown />
        </div>
      </section>
      <section className="scroll-section section-3 py-20 max-w-7xl mx-auto px-10 max-sm:py-10 max-sm:px-8">
        <About />
      </section>
      <section className="relative scroll-section section-2 py-20 max-w-7xl mx-auto px-10 max-sm:px-10 max-sm:py-10">
        <Projects />
        <div className="absolute bottom-10 right-10 flex text-sm text-(--gray) gap-2 items-center max-sm:text-[9px] max-sm:bottom-5 font-bold">
          <p>Projeto feito com Next.js, TailwindCSS.</p>
          <Heart />
          <p>Luan, 2025</p>
        </div>
      </section>
    </div>
  );
}
