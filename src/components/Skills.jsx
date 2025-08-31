import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Data",
      skills: ["Python (Pandas, NumPy, Matplotlib, Seaborn)", "SQL (PostgreSQL, MySQL)"],
    },
    {
      title: "Data Visualization & BI",
      skills: ["Power BI", "Tableau", "Excel (Pivot Tables, VLOOKUP)", "Matplotlib", "Seaborn"],
    },
    {
      title: "Database & ETL",
      skills: ["Data Modeling", "Query Optimization", "Data Warehousing (Basics)", "Indexing"],
    },
    {
      title: "Tools & Platforms",
      skills: ["Jupyter Notebook", "VS Code", "Git", "GitHub"],
    },
    {
      title: "Analytics Expertise",
      skills: ["Data Cleaning", "Exploratory Data Analysis (EDA)", "Statistical Analysis", "Machine Learning (Basics)"],
    },
    {
      title: "Soft Skills",
      skills: ["Problem-Solving", "Analytical Thinking", "Communication", "Collaboration", "Time Management"],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 bg-white shadow-lg rounded-xl hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-4">
                {category.title}
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm sm:text-base">
                {category.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
