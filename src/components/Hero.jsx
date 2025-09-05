import React from "react";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-50 to-blue-100 text-center">
      <h1 className="text-5xl font-bold text-gray-800">Hi, I'm Kartik Kumar</h1>
      <p className="mt-4 text-lg text-gray-600">
        Data Analyst | SQL | Python | Power BI | Machine Learning
      </p>
      <div className="mt-6 space-x-4">
        <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
          View Projects
        </a>
        <a
          href="/Kartik3.pdf"
          className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50"
          download
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
