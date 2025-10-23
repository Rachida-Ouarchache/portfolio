import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xgvnjgon", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("✅ Message envoyé avec succès !");
        form.reset();
      } else {
        setStatus("❌ Erreur lors de l’envoi.");
      }
    } catch (error) {
      console.error(error);
      setStatus("⚠️ Erreur de connexion au serveur Formspree.");
    }
  };

  return (
    <div className="min-h-screen bg-bgcream">
      <Navbar />
      <div className="max-w-xl mx-auto px-6 py-16 text-darkbrown">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Contactez-moi
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Votre email"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
          />

          <textarea
            name="message"
            placeholder="Votre message"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            rows="6"
            required
          ></textarea>

          <button
            type="submit"
            className="mt-2 bg-darkbrown text-white py-3 rounded-lg font-semibold hover:opacity-90"
          >
            Envoyer
          </button>
        </form>

        {status && <p className="mt-4 text-center text-green-700">{status}</p>}
      </div>
    </div>
  );
};

export default Contact;
