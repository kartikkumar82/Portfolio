import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section
      id="education"
      className="py-16 bg-gray-50 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 "
    >
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-6 sm:p-8 md:p-10">
        <h2 className="text-3xl sm:text-5xl font-bold text-center text-gray-800 mb-8 flex items-center justify-center gap-3">
          <FaGraduationCap className="text-blue-600 text-2xl " /> Education
        </h2>

        {/* B.Tech Degree */}
        <div className="border-l-4 border-blue-600 pl-4 sm:pl-6 mb-6">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
            🎓 Bachelor of Technology (B.Tech) in Computer Science & Engineering (CSE)
          </h3>
          <p className="text-gray-700 mt-1 text-sm sm:text-base">
            College of Engineering and Rural Technology, Meerut
          </p>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">Aug 2022 – Jul 2026</p>

          <p className="mt-3 font-medium text-gray-800 text-sm sm:text-base">
            Current CGPA: <span className="text-blue-600">8.0 / 10</span>
          </p>

          <div className="mt-4">
            <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Coursework:</h4>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 text-xs sm:text-sm">
              <li>Data Structures & Algorithms</li>
              <li>Database Management Systems</li>
              <li>Machine Learning (Basics)</li>
              <li>Data Analytics</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
