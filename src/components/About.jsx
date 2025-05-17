import React from "react";
import htmlIcon from "../assets/HTML.svg";
import cssIcon from "../assets/CSS.svg";
import jsIcon from "../assets/Javascript.svg";
import reactIcon from "../assets/React-Dark.svg";
import reduxIcon from "../assets/Redux.svg";
import materailUiIcon from "../assets/MaterialUI-Dark.svg";
import netlifyIcon from "../assets/Netlify-Dark.svg";
import bootstrapIcon from "../assets/Bootstrap.svg";
import firebaseIcon from "../assets/Firebase-Dark.svg";
import gitIcon from "../assets/Git.svg";
import githubIcon from "../assets/Github-Dark.svg";

function About() {
  const skills = [
    { icon: htmlIcon, name: "HTML" },
    { icon: cssIcon, name: "CSS" },
    { icon: jsIcon, name: "JavaScript" },
    { icon: reactIcon, name: "React" },
    { icon: reduxIcon, name: "Redux" },
    { icon: materailUiIcon, name: "Material UI" },
    { icon: bootstrapIcon, name: "Bootstrap" },
    { icon: netlifyIcon, name: "Netlify" },
    { icon: firebaseIcon, name: "Firebase" },
    { icon: gitIcon, name: "Git" },
    { icon: githubIcon, name: "GitHub" },
  ];

  return (
    <section id="about" className="bg-[#0f172a] text-white px-6 md:py-6 py-16 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-yellow-400 text-center mb-12 md:mb-20">
          About Me
        </h2>

        {/* Content Layout */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 text-center md:text-left">
          {/* Text Column */}
          <div className="md:w-1/2 space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Hi, I'm a{" "}
              <span className="text-orange-400 font-semibold">
                Frontend Developer
              </span>{" "}
              with practical experience in building modern and responsive web
              interfaces using
              <span className="text-orange-400 font-semibold"> HTML</span>,
              <span className="text-orange-400 font-semibold"> CSS</span>,
              <span className="text-orange-400 font-semibold"> JavaScript</span>
              ,<span className="text-orange-400 font-semibold"> React.js</span>,
              and
              <span className="text-orange-400 font-semibold">
                {" "}
                Tailwind CSS
              </span>
              .
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I focus on writing clean, maintainable code and delivering
              user-friendly designs that perform smoothly across all devices.
              Currently, I'm learning backend technologies to become a{" "}
              <span className="text-orange-400 font-semibold">
                Full-Stack Developer
              </span>
              , In Sha Allah.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm deeply passionate about coding, continuous learning, and
              solving real-world problems through technology.
            </p>
          </div>

          {/* Skills Column */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-6 text-center">
              Technical Skills
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 justify-center">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center group"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-14 h-14 md:w-16 md:h-16 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                  />
                  <span className="mt-2 text-sm text-gray-300 group-hover:text-white">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
