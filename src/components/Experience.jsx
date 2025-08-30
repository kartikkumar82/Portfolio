import React from "react";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen bg-gray-50 py-16 px-6 flex flex-col items-center justify-center h-screen">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl sm:text-5xl font-bold text-center text-gray-800 mb-10 flex items-center justify-center gap-3">
          <FaBriefcase className="text-blue-600" /> Experience
        </h2>

        {/* Timeline container */}
        <div className="relative border-l-4 border-blue-600 pl-8 space-y-10">

          {/* Data Analyst Intern */}
          <div>
            <div className="absolute -left-4 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <FaBriefcase className="text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
               Data Analyst Intern | Codveda
            </h3>
            <p className="text-sm text-gray-500">Aug 2024 – Present</p>
            <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
              <li>
                Analyzed large datasets (500K+ rows) using SQL and Python to generate actionable business insights.
              </li>
              <li>
                Built interactive Power BI dashboards to track 10+ KPIs, reducing manual reporting time by 30%.
              </li>
              <li>
                Conducted data cleaning, exploratory data analysis (EDA), and statistical modeling to support business strategies.
              </li>
              <li>
                Collaborated with cross-functional teams to deliver automated reports, improving decision-making speed.
              </li>
            </ul>
          </div>

          {/* Frontend Development Intern */}
          <div>
            <div className="absolute -left-4 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <FaBriefcase className="text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
               Frontend Development Intern | CodexIntern
            </h3>
            <p className="text-sm text-gray-500">Jul 2025 – Aug 2025</p>
            <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
              <li>
                Developed and optimized JavaScript-based dashboards integrating APIs for real-time data visualization.
              </li>
              <li>
                Enhanced UI/UX performance, reducing dashboard loading time by 20%.
              </li>
              <li>
                Partnered with designers and analysts to create data-driven visual reports for clients.
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
