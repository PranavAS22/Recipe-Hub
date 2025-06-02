import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SplashScreen from '../components/SplashScreen'
import RecipeCard from '../components/RecipeCard'
import SearchBar from '../components/SearchBar'
import Carousel from '../components/Carousel'

export default function HomePage() {
  const [randomRecipes, setRandomRecipes] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchRandom() {
      setLoading(true)
      const recipes = []
      for (let i = 0; i < 5; i++) {
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        const data = await res.json()
        if (data.meals) recipes.push(data.meals[0])
      }
      setRandomRecipes(recipes)
      setLoading(false)
    }
    fetchRandom()
  }, [])

  return (
    <>
      <SplashScreen />
      <div className="site-wrapper">
      <header className="homepage-header">
      <Link to="/" className="logo">
        <h1>
          Recipe<span className="highlight">Hub</span>
        </h1>
      </Link>
      <SearchBar setSearchResults={setSearchResults} />
    </header>


      <main className="container">
        {searchResults.length > 0 ? (
          <>
            <h2 className="section-title">Search Results</h2>
            <div className="recipe-grid">
              {searchResults.map(r => (
                <RecipeCard key={r.idMeal} recipe={r} />
              ))}
            </div>
          </>
        ) : (
          <>
            <h2 className="section-title">Discover New Recipes</h2>
            {loading ? (
              <p className="loading-text">Loading delicious ideas...</p>
            ) : (
              <div className="recipe-grid">
                {randomRecipes.map(r => (
                  <RecipeCard key={r.idMeal} recipe={r} />
                ))}
              </div>
            )}
          </>
        )}

        <h2 className="section-title popular-title">Popular Recipes</h2>
        <Carousel />
      </main>
      </div>
    </>
  )
}
