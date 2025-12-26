import ProjectsCarousel from "./components/ProjectsCarousel";
import { getAllProjects } from "../../../shared/lib/data";

export default async function Projects() {
  const projects = await getAllProjects();

  return (
    <div className="px-10">
      <h2 className="text-2xl font-bold text-gradient mt-10 w-fit max-sm:text-lg">
        Projetos em destaque
      </h2>
      <p className="text-lg text-[var(--gray)] mb-20 max-sm:text-sm max-sm:mb-10">
        Todos os meus projetos estão disponíveis no meu GitHub.
      </p>
      <ProjectsCarousel projects={projects} />
    </div>
  );
}
