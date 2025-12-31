import About from "./components/About";
import Intro from "./components/Intro";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Social from "./components/Social";

export default function Home() {
  return (
    <main className="grid grid-cols-1 grid-rows-2 h-full min-h-[90vh] overflow-hidden">
      <section className="relative h-full px-10 flex flex-col justify-center items-center max-sm:justify-start max-sm:mt-10 overflow-hidden">
        <Intro />
        <Social />
      </section>
      <section className="h-full overflow-hidden">
        <div className="p-10 grid grid-cols-3 bg-(--black) grid-rows-1 gap-10 max-sm:grid-cols-1 max-sm:p-5 h-full items-center">
          <div className="bg-[#e6e6e6] h-64 p-6 rounded-md max-sm:border-transparent max-sm:p-4 max-sm:text-center">
            <About />
          </div>
          <div className="bg-[#e6e6e6] p-6 rounded-md max-sm:hidden h-64">
            <Skills />
          </div>
          <div className="bg-[#e6e6e6] 0 p-6 rounded-md max-sm:hidden h-64">
            <Services />
          </div>
        </div>
      </section>
    </main>
  );
}
