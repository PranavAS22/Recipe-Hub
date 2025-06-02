import { Link } from 'react-router-dom'

export default function RecipeCard({ recipe }) {
  return (
    <Link to={`/recipe/${recipe.idMeal}`} className="recipe-card-link" aria-label={`View details for ${recipe.strMeal}`}>
      <div className="recipe-card">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          loading="lazy"
          className="recipe-card-image"
        />
        <div className="recipe-card-content">
          <h3 className="recipe-card-title">{recipe.strMeal}</h3>
          <p className="recipe-card-subtitle">{recipe.strArea} &bull; {recipe.strCategory}</p>
        </div>
      </div>
    </Link>
  )
}
