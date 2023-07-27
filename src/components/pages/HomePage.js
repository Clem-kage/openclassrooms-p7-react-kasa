import "./../../style/homePage.css";
import ItemLog from "./../elements/itemAccom";
import React, { useState, useEffect } from "react";
import Footer from "./../elements/footer";

const HomePage = () => {
  const [donnees, setDonnees] = useState([]);
  useEffect(() => {
    // Fonction pour effectuer la requête et mettre à jour l'état des données
    const recupererDonnees = async () => {
      try {
        const reponse = await fetch("./data/logements.json");
        if (!reponse.ok) {
          window.location.href = "http://localhost:3000/error";
          throw new Error("Réponse du serveur non valide");
        }
        const donnees = await reponse.json();
        setDonnees(donnees);
      } catch (erreur) {
        console.error("Erreur lors de la récupération des données:", erreur);
        window.location.href = "http://localhost:3000/error";
      }
    };

    recupererDonnees();
  }, []);

  return (
    <div>
      <div className="visuelHome">
        <h2>Chez vous, partout et ailleurs</h2>
      </div>
      <main id="home">
        <div className="home-container">
          {donnees.map((element) => (
            <ItemLog key={element.id} data={element}></ItemLog>
          ))}
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};
export default HomePage;
