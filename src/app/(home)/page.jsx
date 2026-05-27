import CaretDown from "../../../shared/icons/CaretDown";
import Intro from "./components/Intro";
import Navigation from "./components/Navigation";
import Social from "./components/Social";
import Image from "next/image";
import { Gaegu } from "next/font/google";
import ProjectsGrid from "./components/ProjectsGrid";
import { getAllProjects } from "../../../shared/lib/data";

const gaegu = Gaegu({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default async function Home() {
  const projects = await getAllProjects();
  return (
    <main className="max-w-6xl px-10 w-full mx-auto h-screen overflow-y-scroll snap-y snap-mandatory snap-container">
      <section className="relative h-screen snap-start flex items-center justify-center">
        {/* Navigation */}
        <div className="absolute top-10 left-0 w-full">
          <Navigation />
        </div>

        <div className="max-w-5xl mx-auto relative grid-bg h-[60vh] w-fit grid grid-cols-[2fr_3fr] items-center">
          <div className="flex flex-col items-center relative">
            <Image
              src="/luan.jpg"
              width={350}
              height={350}
              alt="Picture of the author"
              className="rounded-full"
            />
            <h1
              className={`shadow-2xl absolute bottom-1 bg-(--crimson) p-2 -rotate-6 text-4xl w-fit ${gaegu.className}`}
            >
              Luan Cardoso
            </h1>
          </div>
          <Intro />
          <div className="absolute bottom-0 right-0">
            <Social />
          </div>
        </div>

        {/* Span centralizado */}
        <span className="text-[gray] absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2">
          Role para ver mais
          <CaretDown />
        </span>
      </section>

      <section className="h-screen snap-start flex items-center justify-center py-10">
        <ProjectsGrid projects={projects} />
      </section>
    </main>
  );
}
