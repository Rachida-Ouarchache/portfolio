import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa"; 
import Navbar from "../components/Navbar";
import profile from "../assets/profile.jpg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-bgcream overflow-hidden">
      <Navbar />

      <main className="container mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">
        {/* Partie gauche : texte animé */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-darkbrown leading-tight">
            I am <br />
            <motion.span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-darkbrown to-orange-600"
              initial={{ backgroundPosition: "200% 0%" }}
              animate={{ backgroundPosition: "0% 0%" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              Rachida Ouarhache
            </motion.span>
          </h1>

          {/* ligne décorative */}
          <motion.div
            className="mt-6 w-2/3 border-b-2 border-dotted border-darkbrown"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>

          {/* Icônes réseaux sociaux */}
          <div className="mt-8 flex items-center gap-6">
            {/* GitHub */}
            <a
              href="https://github.com/Rachida-Ouarchache" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-darkbrown hover:text-orange-600 transition transform hover:scale-110"
              title="GitHub"
            >
              <FaGithub size={36} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/rachida-ouarhache-a20b63280/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-darkbrown hover:text-orange-600 transition transform hover:scale-110"
              title="LinkedIn"
            >
              <FaLinkedin size={36} />
            </a>
          </div>

          {/* 🟠 Bouton pour les projets */}
          <motion.button
            onClick={() => navigate("/projects")}
            className="mt-10 px-6 py-3 bg-darkbrown text-white text-lg font-medium rounded-xl shadow-lg hover:bg-orange-600 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Voir mes projets 🚀
          </motion.button>
        </motion.div>

        {/* Partie droite : image + texte descriptif */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col items-start md:items-center"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-56 h-56 md:w-72 md:h-72">
            {/* Cercle d’arrière-plan animé */}
            <motion.div
              className="absolute -left-6 top-4 w-56 h-56 md:w-72 md:h-72 bg-darkbrown rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            ></motion.div>

            {/* Image de profil avec effet hover */}
            <motion.img
              src={profile}
              alt="Rachida"
              className="relative z-10 rounded-full w-56 h-56 md:w-72 md:h-72 object-cover shadow-lg"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          </div>

          {/* Texte description */}
          <motion.p
            className="mt-6 text-darkbrown text-base md:text-lg max-w-md text-left md:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Développeuse web passionnée spécialisée en <br />
            <span className="font-semibold">React</span>,{" "}
            <span className="font-semibold">Flask</span> et le design moderne.
          </motion.p>
        </motion.div>
      </main>
    </div>
  );
};

export default Home;
