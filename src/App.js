import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Category from "./components/Category";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  // RECUPERATION DES DONNEES BACKEND IMAGES CATEGORIES...
  const fetchData = async () => {
    const response = await axios.get(
      "http://site--deliveroo-backend--zxhf4nr8wgx5.code.run"
    );
    console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // AFFICHAGE MESSAGE D'ATTENTE TANT QUE isLoading IS true
  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div className="App">
      <div className="hero-container container">
        <div>
          <h1>{data.restaurant.name}</h1>
          <p className="hero-description">{data.restaurant.description}</p>
        </div>
        <img src={data.restaurant.picture} alt="meal" />
      </div>
      <main>
        <div className="container main-part">
          <section className="left-part">
            {/* Je parcours le tableau categories, chacuns des objets de ce tableau sera mentionnable sous le nom category */}
            {data.categories.map((category, index) => {
              // Si ma catégorie contient des plats, j'affiche un composant Category
              if (category.meals.length !== 0) {
                // Je donne l'objet représentant une categorie en props à mon composant
                return <Category category={category} key={index} />;
              } else {
                // Sinon rien
                return null;
              }
            })}
          </section>
          <section className="right-part">salut</section>
        </div>
      </main>
    </div>
  );
}

export default App;
