"use client";

import { useState, useRef } from "react";
import Card from "./Card";

export default function ProjectsCarousel({ projects }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const carouselRef = useRef(null);

  // Verificação de segurança
  if (!projects || !Array.isArray(projects) || projects.length === 0) {
    return (
      <div className="text-center py-8 text-gray-400">
        Nenhum projeto disponível no momento.
      </div>
    );
  }

  const totalSlides = projects.length;

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Suporte para gestos de toque (swipe)
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrev();
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Container do carrossel */}
      <div
        className="relative overflow-hidden"
        ref={carouselRef}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="min-w-full flex items-center justify-center"
            >
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

      {/* Indicadores de slide */}
      {totalSlides > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`cursor-pointer h-3 w-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-10 bg-gradient"
                  : "w-2 bg-[#252525] hover:bg-[#353535]"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
