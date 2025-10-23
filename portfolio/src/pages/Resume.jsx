import React from "react";
import Navbar from "../components/Navbar";

const Resume = () => {
  return (
    <div className="min-h-screen bg-bgcream">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-16 text-darkbrown">
        <h2 className="text-4xl font-bold mb-6">My CV</h2>
        <p className="mb-4">You can view or download my resume below:</p>

        {/* bouton pour télécharger */}
        <a
          href="/cv-rachida.pdf"
          download
          className="inline-block mb-6 px-6 py-2 bg-darkbrown text-white rounded-md hover:opacity-90"
        >
          Download CV
        </a>

        {/* intégration du PDF */}
        <div className="w-full h-[80vh] border border-gray-400 rounded-lg overflow-hidden shadow-md">
          <iframe
            src="/cv-rachida.pdf"
            title="CV"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Resume;
