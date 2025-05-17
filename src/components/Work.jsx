import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Github } from "lucide-react";
import projects from "../data/projects";

function Work() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const project = projects[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="projects" className="bg-[#0f172a] min-h-screen text-white md:py-20 px-6 md:px-20 md:mb-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-yellow-400 text-center md:mb-8 mb-8">
          My Recent Work
        </h2>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-16">
          Here are some of the projects I’ve recently worked on. Each one
          showcases different skills and technologies I've used to solve
          real-world problems and build user-friendly interfaces.
        </p>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left Side: Text Content */}
          <div className="md:w-1/2 space-y-6">
            <h3 className="text-2xl font-semibold text-orange-400">
              {project.name}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {project.description}
            </p>

            {/* GitHub & Live Demo Buttons */}
            <div className="flex gap-4 flex-wrap">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-500 transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>

              <a
                href={project.netlifyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-400 hover:text-green-500 transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 3l7 7m0 0v11a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h11m6 7H14"
                  />
                </svg>
                Live Demo
              </a>
            </div>
          </div>

          {/* Right Side: Image and Arrows */}
          <div className="md:w-1/2 w-full relative flex flex-col items-center">
            <div className="rounded-xl overflow-hidden shadow-lg border border-yellow-400 w-full">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-auto max-h-[400px] object-cover rounded-md"
              />
            </div>

            {/* Arrows */}
            <div className="flex justify-center items-center gap-6 mt-6">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full border border-gray-500 hover:bg-yellow-400 hover:text-black transition"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-full border border-gray-500 hover:bg-yellow-400 hover:text-black transition"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
