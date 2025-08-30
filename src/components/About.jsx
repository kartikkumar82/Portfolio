import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 bg-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
          About Me
        </h2>

        <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 text-left sm:text-left md:text-left">
          Hi! I’m Kartik Kumar, a passionate Data Analyst dedicated to turning
          complex data into actionable insights. With expertise in SQL, Python,
          Excel, and data visualization tools like Power BI and Machine Learning,
          I specialize in uncovering patterns, solving problems, and helping
          businesses make informed, data-driven decisions.
        </p>

        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 text-left">
          I enjoy working on real-world datasets, building dashboards and
          analytical projects that not only visualize data effectively but also
          tell a compelling story. My projects range from movie recommendation
          systems to sales performance dashboards, showcasing my ability to
          handle data from collection and cleaning to analysis and visualization.
        </p>

        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 text-left">
          I am always eager to learn new tools, explore advanced analytics
          techniques, and apply data insights to create value and improve
          decision-making. I thrive in environments where data meets strategy,
          and I love helping teams turn numbers into meaningful stories.
        </p>

        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 text-left">
          Let’s connect if you want to turn your data into actionable insights!
        </p>
      </div>
    </section>
  );
};

export default About;
