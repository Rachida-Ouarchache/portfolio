import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import portfolio from "../assets/portfolio.png";


const projects = [
  {
    id: 1,
    title: "Mon Portfolio",
    description: "Un site personnel moderne construit avec React, Vite et Tailwind.",
    image: portfolio,
    link: "https://example.com/portfolio"
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-bgcream text-darkbrown">
      <Navbar />
      <section className="container mx-auto px-6 md:px-12 lg:px-20 py-16">
        {/* Titre animé */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-center mb-12"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Mes <span className="text-orange-600">Projets</span>
        </motion.h1>

        {/* Grille des projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-darkbrown text-white rounded-lg hover:bg-orange-600 transition"
                >
                  Voir le projet
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
