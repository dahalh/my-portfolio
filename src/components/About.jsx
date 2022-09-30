import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-purple-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Himanshu, nice to meet you.</p>
          </div>
          <div>
            <p>
              I completed my degree in Bachelor of Information and
              Communications with a major in Entertainment Computing from
              Western Sydney University in July 2021 and graduated September
              this year, with the delay due to Covid. Upon finishing my studies
              in 2021, I attended a Full Stack Development Bootcamp at Dented
              Code Academy in Rockdale. Attending this bootcamp allowed me to
              learn in-depth about JavaScript and its Frontend library ReactJS,
              its backend runtime environment NodeJS, its backend web
              application framework Express.js, as well as MongoDB.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
