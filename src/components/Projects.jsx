import Card from "./Card";
import { getAllProjects } from "../../lib/data";

export default async function Sec2() {
  const project = await getAllProjects();

  return (
    <div className="flex flex-col gap-16 max-sm:gap-8">
      <div className="flex flex-col gap-1 w-fit">
        <h2 className="text-4xl font-bold text-gradient max-lg:text-3xl max-sm:text-lg">
          Projetos em destaque
        </h2>
        <p className="text-lg max-sm:text-sm">
          Todos os projetos estão disponíveis no meu Github.
        </p>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-2 gap-y-5 gap-x-10 max-lg:overflow-y-auto max-lg:grid-cols-1 max-lg:h-[700px] max-sm:h-[500px] items-center">
        {project.map((project, index) => (
          <div key={index}>
            <Card
              title={project.title}
              desc={project.desc}
              stack={project.stack}
              url={project.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
