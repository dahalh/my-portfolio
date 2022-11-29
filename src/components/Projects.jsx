import React from "react";
// import Calculator from "../assets/calculator.png";
// import Contact from "../assets/contact.png";
// import Expenses from "../assets/expensestracker.jpg";
// import Movie from "../assets/movie-search.jpg";
// import NotToDo from "../assets/not-to-do.png";
// import Blog from "../assets/blog.jpg";
import { ProjectList } from "../data/ProjectList";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-purple-600">
            Projects
          </p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {ProjectList.map((project, id) => {
            return (
              <div
                key={id}
                style={{ backgroundImage: `url(${project.image})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
              >
                <div className="opacity-0 group-hover:opacity-100">
                  <span className="text-2xl font-bold text-white tracking-wider">
                    {project.name}
                  </span>
                  <div className="pt-8 text-center">
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Demo
                      </button>
                    </a>
                    <a href={project.code} target="_blank" rel="noreferrer">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
