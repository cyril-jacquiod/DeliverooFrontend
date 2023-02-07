import Meal from "./Meal";
// Je récupère la props category
const Category = ({ category }) => {
  // console.log(category);
  return (
    <section className="category-container">
      {/* J'affiche le titre de ma categorie */}
      <h2>{category.name}</h2>
      <div className="meals-container">
        {/* Je parcours le tableau meals contenu dans la clef meals de mon objet représentant une categorie */}
        {category.meals.map((meal) => {
          // J'affiche un composant Meal pour chaque objet dans le tableau meals (chaque obket représentant un plat)
          // Je donne en props cet objet à mon composant
          return <Meal meal={meal} key={meal.id} />;
        })}
      </div>
    </section>
  );
};

export default Category;
