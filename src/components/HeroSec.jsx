import React from "react";
import profile_img from "../assets/myHeroImage.jpg";
import { Typewriter } from "react-simple-typewriter";

function HeroSec() {
  return (
    <section id="home" className="min-h-screen pt-20 px-6 md:px-20 bg-gradient-to-r from-slate-900 via-[#111827] to-slate-900 text-white flex items-center">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8 w-full">
        {/* Left Content */}
        <div className="text-center md:text-left flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm <span className="text-yellow-400">Muhammad Waqas</span>
          </h1>

          {/* Typewriter effect here */}
          <h2 className="text-2xl md:text-3xl font-semibold text-orange-400 mb-4 h-10">
            <Typewriter
              words={[
                "Frontend Developer",
                "React Developer",
                "JavaScript Enthusiast",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <p className="text-gray-300 mb-6 leading-relaxed">
            I specialize in building fast, modern, and responsive websites using
            React and Tailwind CSS. With a focus on clean design and optimal
            performance, I create user-friendly experiences that not only look
            great but also function seamlessly across all devices.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            {/* <button className="md:px-6 md:py-2 px-3 py-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white rounded-full font-medium hover:scale-105 transition duration-300">
              Connect  With Me
            </button> */}
            <button className="md:px-6 md:py-2 px-3 py-1 border border-yellow-400 text-yellow-400 rounded-full font-medium hover:bg-yellow-400 hover:text-black transition duration-300">
              Download CV
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={profile_img}
            alt="Waqas Profile"
            className="md:w-90 md:h-90 h-64 w-64 rounded-full object-contain shadow-lg hover:scale-105 transition duration-300 "
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSec;
