import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-bgcream">
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 py-16 text-darkbrown">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
        <p className="mb-4 leading-relaxed">
          I’m a UX Designer focused on accessibility and inclusive experiences.
          I transform research into clear interfaces and love mentoring junior designers.
        </p>
        <p className="leading-relaxed">
          I speak at conferences, write about UX ethics and collaborate with teams to
          make digital products usable by everyone.
        </p>
      </div>
    </div>
  );
};

export default About;
