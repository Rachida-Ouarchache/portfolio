import React from "react";
import Navbar from "../components/Navbar";
import { FaHtml5, FaCss3Alt, FaPhp, FaReact, FaNodeJs, FaPython, FaDatabase, FaBootstrap } from "react-icons/fa";

const About = () => {
  const techs = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 w-6 h-6" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 w-6 h-6" /> },
    { name: "PHP", icon: <FaPhp className="text-purple-600 w-6 h-6" /> },
    { name: "JavaScript", icon: <FaReact className="text-yellow-400 w-6 h-6" /> },
    { name: "React.js", icon: <FaReact className="text-blue-400 w-6 h-6" /> },
    { name: "Redux", icon: <FaReact className="text-purple-500 w-6 h-6" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 w-6 h-6" /> },
    { name: "Express", icon: <FaNodeJs className="text-gray-700 w-6 h-6" /> },
    { name: "MongoDB", icon: <FaDatabase className="text-green-700 w-6 h-6" /> },
    { name: "Python", icon: <FaPython className="text-blue-500 w-6 h-6" /> },
    { name: "Flask", icon: <FaPython className="text-gray-700 w-6 h-6" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-indigo-500 w-6 h-6" /> },
  ];

  return (
    <div className="min-h-screen bg-bgcream text-darkbrown">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-16">
       <h2 className="text-4xl font-bold text-darkbrown mb-8 pb-2">
        À propos de moi
      </h2>
        
        <p className="text-lg leading-relaxed mb-6">
          Je suis une développeuse passionnée par le <strong>développement web et mobile</strong>, curieuse et toujours prête à apprendre de nouvelles technologies.
          Au cours de ma formation en développement informatique, j’ai réalisé plusieurs projets concrets, tels que :
        </p>

        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>Une <strong>application d’archivage</strong> pour la Faculté des sciences juridiques, économiques et sociales d’Oujda,</li>
          <li>Une <strong>application d’annonces</strong> pour l’EST Oujda,</li>
          <li>Et une <strong>application de gestion de bibliothèque</strong> développée dans le cadre de mon projet de fin d’études.</li>
        </ul>

        <p className="text-lg leading-relaxed mb-8">
          Ces projets m’ont permis de renforcer mes compétences techniques et d’acquérir une solide expérience dans la conception d’interfaces modernes, la gestion de bases de données et le développement d’applications complètes.
        </p>

        <h3 className="text-2xl font-semibold mb-6">💻 Technologies maîtrisées</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-12">
          {techs.map((tech) => (
            <div key={tech.name} className="flex items-center gap-2 bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
              {tech.icon}
              <span className="font-medium">{tech.name}</span>
            </div>
          ))}
        </div>

        <p className="text-lg leading-relaxed">
          Motivée, sérieuse et passionnée, je cherche à participer à des projets innovants où je pourrai mettre mes compétences à profit tout en continuant à progresser dans le domaine du développement.
        </p>
      </div>
    </div>
  );
};

export default About;

