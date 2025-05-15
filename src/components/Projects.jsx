import React from "react";

const Projects = () => {
  return (
    <section id="project" className="text-center py-12 container mx-auto px-4">
      <h2 className="text-5xl text-[#e43232] mb-6 font-semibold">My Projects</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {[
          {
            title: "Weather App",
            desc: "A simple weather app that fetches real-time weather data based on user input. Built using HTML, CSS, and JavaScript with OpenWeather API.",
            link: "https://github.com/electron244/Weather-App",
          },
          {
            title: "To Do App",
            desc: "A simple To-Do application built using React. The app allows users to manage their tasks by adding, marking as completed, and deleting tasks.",
            link: "https://github.com/electron244/To-Do-App",
          },
          {
            title: "Tic-Tac-Toe Game",
            desc: "A fun and interactive tic-tac-toe game where two players can play. Implemented with JavaScript logic.",
            link: "https://github.com/electron244/Tik-Tak-Toe-Game",
          },
        ].map((project, index) => (
          <div
            key={index}
            className="bg-[#282c34] w-[350px] p-6 rounded-lg text-left flex flex-col justify-between h-[300px] text-xl transition-transform hover:-translate-y-1"
          >
            <h3 className="text-white font-semibold text-xl mb-2">{project.title}</h3>
            <p className="text-sm text-[#bbb] mb-auto">{project.desc}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button className="w-full mt-4 py-2 bg-[#e43232] hover:bg-[#c22525] text-white font-bold rounded">
                View Project
              </button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
