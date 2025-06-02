import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import SocialIcons from '../components/SocialIcons'
import PrintButton from '../components/PrintButton'
import SearchBar from '../components/SearchBar' // Add this line

function getIngredients(recipe) {
  const ingredients = []
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`]
    const measure = recipe[`strMeasure${i}`]
    if (ingredient && ingredient.trim()) {
      ingredients.push(`${measure?.trim() || ''} ${ingredient.trim()}`.trim())
    }
  }
  return ingredients
}

export default function RecipeDetailsPage() {
  const { id } = useParams()
  const [recipe, setRecipe] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const [searchResults, setSearchResults] = useState([]) // To enable SearchBar

  useEffect(() => {
    async function fetchRecipe() {
      setLoading(true)
      try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        const data = await res.json()
        if (data.meals) {
          setRecipe(data.meals[0])
        } else {
          alert('Recipe not found')
          navigate('/')
        }
      } catch (error) {
        alert('Error fetching recipe')
        navigate('/')
      }
      setLoading(false)
    }
    fetchRecipe()
  }, [id, navigate])

  if (loading) return <p className="loading-text">Loading...</p>
  if (!recipe) return null

  const ingredients = getIngredients(recipe)

  return (
    <>
      {/* Header with title and search bar */}
      <div className="site-wrapper">
        <header className="homepage-header">
      <Link to="/" className="logo">
        <h1>
          Recipe<span className="highlight">Hub</span>
        </h1>
      </Link>
      <SearchBar setSearchResults={setSearchResults} />
    </header>

      </div>

      <main className="container recipe-details">
        <section id="recipe-content" className="recipe-header">
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="recipe-image"
            loading="lazy"
          />
          <div className="recipe-info">
            <h1 className="recipe-title">{recipe.strMeal}</h1>
            <div className="recipe-meta">
              <span><strong>Category:</strong> {recipe.strCategory}</span>
              <span><strong>Area:</strong> {recipe.strArea}</span>
              <span><strong>Cooking Time:</strong> Approx 30-40 mins</span>
            </div>

            <div className="ingredients-section">
              <h2>Ingredients</h2>
              <ul className="ingredients-list">
                {ingredients.map((ing, i) => (
                  <li key={i}>{ing}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="instructions-section">
          <h2>Instructions</h2>
          <p id="instructions">{recipe.strInstructions}</p>
        </section>

        <div className="action-buttons">
          <PrintButton recipeId="recipe-content" instructionsId="instructions" />
          <SocialIcons />
        </div>
      </main>
    </>
  )
}
