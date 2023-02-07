// Je récupère la props meal et j'affiche les différentes infos d'un plat

const Meal = ({ meal }) => {
  return (
    <article>
      <div>
        <p className="meal-title">{meal.title}</p>
        <p className="meal-description">{meal.description}</p>
        <div className="price-popular-container">
          <p>{meal.price} €</p>
          {meal.popular && <p style={{ color: "orange" }}>Populaire</p>}
        </div>
      </div>
      {meal.picture && <img src={meal.picture} alt="meal" />}
    </article>
  );
};

export default Meal;
