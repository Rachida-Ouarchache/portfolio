import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    try {
      const response = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("✅ Message envoyé avec succès !");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Erreur lors de l’envoi.");
      }
    } catch (error) {
      console.error(error);
      setStatus("⚠️ Erreur serveur.");
    }
  };

  return (
    <div className="min-h-screen bg-bgcream">
      <Navbar />
      <div className="max-w-xl mx-auto px-6 py-16 text-darkbrown">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact</h2>
        <form  onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input type="text"
          name="name"
          placeholder="Votre nom"
          value={formData.name}
          onChange={handleChange} className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400" />
          <input  type="email"
          name="email"
          placeholder="Votre email"
          value={formData.email}
          onChange={handleChange} className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400" required />
          <textarea className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400" rows="6" placeholder="Message"></textarea>
          <button type="submit" className="mt-2 bg-darkbrown text-white py-3 rounded-lg font-semibold hover:opacity-90">Envoyer</button>
        </form>
              {status && <p className="mt-4 text-green-700">{status}</p>}

      </div>
    </div>
  );
};

export default Contact;
