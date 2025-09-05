import React from "react";

const projects = [
  {
    title: "Movie Recommendation System",
    desc: "Built with Python & ML to recommend movies based on similarity.",
    link: "https://github.com/kartikkumar82/movie_recommender_system",
  },
  {
    title: "Whatsapp Chat Analysis",
    desc: "Analyzed WhatsApp chat data using Python and Machine Learning for insights & trends.",
    link: "https://whatsappchatanalyzer-ztivqdmu3pzimjz6eysd6b.streamlit.app/",
  },
  {
    title: "IPL Capstone Project",
    desc: "Data analysis & visualization of IPL matches using Python.",
    link: "https://github.com/kartikkumar82/IPL_Capstone_Project",
  },
  {
    title: "SQL Projects (7 Days Challenge)",
    desc: "7 SQL projects solving real-world business cases.",
    link: "https://github.com/kartikkumar82?tab=repositories",
  },
  {
    title: "Heart Stroke Prediction",
    desc: "ML model predicting heart stroke risk using health data.",
    link: "https://github.com/kartikkumar82/Heart_Stroke-_Prediction",
  },
  {
    title: "Blinkit Dashboard PowerBI",
    desc: "Sales & delivery performance dashboard using KPIs & visuals.",
    link: "https://github.com/kartikkumar82/Blinkit_Dashboard_PowerBI",
  },
  {
    title: "Portfolio Page",
    desc: "Personal portfolio website built with React & TailwindCSS.",
    link: "https://github.com/yourgithub/sql-projects",
  },
  {
    title: "Ola End to End Analysis",
    desc: "Comprehensive data analysis of Ola rides using SQl and PowerBI.",
    link: "https://github.com/kartikkumar82/Ola_Data_Analysis_Project",
  },
  
  {
    title: "Sales Dashboard PowerBI",
    desc: "Interactive sales dashboard visualizing key metrics with PowerBI.",
    link: "https://github.com/kartikkumar82/Sales_Dashboard_PowerBI",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 bg-gray-50 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-10">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-600">
                {p.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm sm:text-base">{p.desc}</p>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-blue-500 hover:underline text-sm sm:text-base"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
