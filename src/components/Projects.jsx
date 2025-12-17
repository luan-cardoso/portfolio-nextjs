import { getAllProjects } from "../../lib/data";
import ProjectsCarousel from "./ProjectsCarousel";

export default async function Projects() {
  const project = await getAllProjects();

  return (
    <div className="flex flex-col gap-14 max-sm:gap-8 relative">
      <div className="flex flex-col gap-1 w-fit mb-16 max-sm:mb-6">
        <h2 className="text-4xl font-bold text-gradient max-lg:text-3xl max-sm:text-lg">
          Projetos em destaque
        </h2>
        <p className="text-xl text-(--gray) max-sm:text-sm">
          Todos os projetos estão disponíveis no meu GitHub.
        </p>
      </div>
      <ProjectsCarousel projects={project} />
    </div>
  );
}
