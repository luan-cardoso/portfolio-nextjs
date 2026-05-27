"use client";

import { useState } from "react";
import FlipCard from "./FlipCard";

const PROJECTS_PER_PAGE = 5;

export default function ProjectsGrid({ projects }) {
  const allProjects = Array.isArray(projects) ? projects : [];
  const totalPages = Math.max(
    1,
    Math.ceil(allProjects.length / PROJECTS_PER_PAGE),
  );
  const [currentPage, setCurrentPage] = useState(0);

  if (allProjects.length === 0) {
    return <p>Nenhum projeto encontrado</p>;
  }

  const startIndex = currentPage * PROJECTS_PER_PAGE;
  const visibleProjects = allProjects.slice(
    startIndex,
    startIndex + PROJECTS_PER_PAGE,
  );
  const isLastPage = currentPage === totalPages - 1;

  function handleNextPage() {
    setCurrentPage((previousPage) => (previousPage + 1) % totalPages);
  }

  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-6 place-items-center max-w-6xl mx-auto">
      {visibleProjects.map((project) => (
        <FlipCard
          key={project._id}
          title={project.title}
          desc={project.desc}
          stack={project.stack}
          url={project.url}
          clientOrCompany={project.clientOrCompany}
        />
      ))}

      {totalPages > 1 ? (
        <button
          type="button"
          onClick={handleNextPage}
          className="flex h-80 w-80 flex-col items-center justify-center gap-4 bg-(--crimson) px-8 text-center text-white transition-transform duration-200 hover:scale-[1.02]"
          aria-label={
            isLastPage
              ? "Voltar para a primeira página de projetos"
              : "Ir para a próxima página de projetos"
          }
        >
          <span className="text-sm font-semibold uppercase tracking-[0.35em]">
            {String(currentPage + 1).padStart(2, "0")} /{" "}
            {String(totalPages).padStart(2, "0")}
          </span>
          <span className="text-2xl font-extrabold uppercase">
            {isLastPage ? "Início" : "Próxima"}
          </span>
          <span className="max-w-44 text-sm leading-5">
            {isLastPage
              ? "Clique para voltar ao começo da lista de projetos."
              : "Clique para ver mais projetos."}
          </span>
        </button>
      ) : null}
    </div>
  );
}
