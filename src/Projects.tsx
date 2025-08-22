import React from "react";

const projects = [
  {
    title: "Frontend Mentor | Ping Coming Soon Page",
    description: "A responsive landing page, focusing on layout,styling and email validation.",
    tech: "React + Tailwind CSS + Typescript",
    codeLink: "https://github.com/KingOdo/ping-single-coming-soon-page",
    viewLink: "https://ping-single-coming-soon-page.vercel.app/",
  },
  {
    title: "Hotel Management System",
    description: "A full-stack web application for managing hotel reservations and guests.Various Unit Testing to ensure functionality.",
    tech: "C# + .NET Core",
    codeLink: "#",
    viewLink: "#",
  },
  {
    title: "Portfolio Website",
    description: "My personal web portfolio.",
    tech: "Typescript + React + Tailwind CSS",
    codeLink: "https://github.com/KingOdo/Portfolio",
    viewLink: "#",
  },
];

const Projects = () => {
  return (
    <section className="bg-[#f9f9f9] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Every now then, I take breaks to work on <span className="text-black">exciting side projects</span>
        </h2>
        <p className="text-gray-700 mb-8 max-w-2xl">
         I take the time to experiment and build things that I find useful and intresting. A few examples of these projects can be found
          on my GitHub page.
        </p>
        <a
          href="https://github.com/KingOdo"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition"
        >
          View Github
        </a>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {project.title}
              </h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <p className="text-sm text-gray-500 mt-2">{project.tech}</p>
              <div className="flex gap-4 mt-4">
                <a href={project.codeLink} className="text-blue-600 hover:underline">
                  Code
                </a>
                <a href={project.viewLink} className="text-blue-600 hover:underline">
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
