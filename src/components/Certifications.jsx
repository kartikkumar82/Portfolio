import React from "react";
import { FaCertificate } from "react-icons/fa";

const Certifications = () => {
  return (
    <section id="certifications" className="min-h-screen  bg-gray-50 py-16 px-6   ">
      <div className="max-w-5xl mx-auto md:mt-10">
        <h2 className="sm:text-5xl font-bold text-center text-gray-800 mb-12 flex items-center justify-center gap-3">
           Certifications
        </h2>

        {/* Certifications List */}
        <div className="space-y-8">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-blue-600">
            <h3 className="text-xl font-semibold text-gray-800">
              Advance SQL
            </h3>
            <p className="text-gray-600">HackerRank</p>
            <a
              href="YOUR_HACKERRANK_CERTIFICATE_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline text-sm mt-2 inline-block"
            >
              View Certificate
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-green-600">
            <h3 className="text-xl font-semibold text-gray-800">
              Excel Fundamentals
            </h3>
            <p className="text-gray-600">Google (Coursera)</p>
            <a
              href="YOUR_COURSE_CERTIFICATE_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline text-sm mt-2 inline-block"
            >
              View Certificate
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-purple-600">
            <h3 className="text-xl font-semibold text-gray-800">
              Data Analysis with Python
            </h3>
            <p className="text-gray-600">Cognitive Class (IBM)</p>
            <a
              href="YOUR_IBM_CERTIFICATE_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline text-sm mt-2 inline-block"
            >
              View Certificate
            </a>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-yellow-600">
            <h3 className="text-xl font-semibold text-gray-800">
              Power BI Workshop
            </h3>
            <p className="text-gray-600">United Latino Students Association</p>
            <a
              href="YOUR_HACKERRANK_CERTIFICATE_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline text-sm mt-2 inline-block"
            >
              View Certificate
            </a>
          </div>

          {/* Card 5 */}
          <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-red-600">
            <h3 className="text-xl font-semibold text-gray-800">
              Data Science & Analytics
            </h3>
            <p className="text-gray-600">HP LIFE</p>
            <a
              href="YOUR_HACKERRANK_CERTIFICATE_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline text-sm mt-2 inline-block"
            >
              View Certificate
            </a>
          </div>

          {/* Card 6 */}
          <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-indigo-600">
            <h3 className="text-xl font-semibold text-gray-800">
              Six Sigma
            </h3>
            <p className="text-gray-600">Cert College (Jaggi Sir)</p>
            <a
              href="YOUR_HACKERRANK_CERTIFICATE_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline text-sm mt-2 inline-block"
            >
              View Certificate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
