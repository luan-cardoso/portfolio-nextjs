import About from "./components/About";
import Intro from "./components/Intro";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Social from "./components/Social";

export default function Home() {
  return (
    <main className="grid grid-cols-1 grid-rows-2 h-screen">
      <section className="relative h-full px-10 flex flex-col justify-center items-center max-sm:justify-start max-sm:mt-10">
        <Intro />
        <Social />
      </section>
      <section className="h-full bg-white/5">
        <div className="p-10 grid grid-cols-3 grid-rows-1 gap-10 max-sm:grid-cols-1 max-sm:p-5">
          <div className="bg-transparent p-6 border border-white/10 rounded-md max-sm:border-transparent max-sm:p-0 max-sm:text-center">
            <About />
          </div>
          <div className="bg-transparent p-6 border border-white/10 rounded-md max-sm:hidden">
            <Skills />
          </div>
          <div className="bg-transparent p-6 border border-white/10 rounded-md max-sm:hidden">
            <Services />
          </div>
        </div>
      </section>
    </main>
  );
}
