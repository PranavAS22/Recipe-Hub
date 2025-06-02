import { useEffect, useRef, useState } from 'react'
import RecipeCard from './RecipeCard'

export default function Carousel() {
  const [recipes, setRecipes] = useState([])
  const carouselRef = useRef(null)

  useEffect(() => {
    async function fetchRecipes() {
      const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      const data = await res.json()
      if (data.meals) {
        setRecipes(data.meals.slice(0, 15)) // more than 5 to enable sliding
      }
    }
    fetchRecipes()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      const container = carouselRef.current
      if (!container) return

      const cardWidth = container.offsetWidth / 5
      const maxScrollLeft = container.scrollWidth - container.clientWidth
      const nextScrollLeft = container.scrollLeft + cardWidth * 5

      if (nextScrollLeft > maxScrollLeft) {
        container.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        container.scrollBy({ left: cardWidth * 5, behavior: 'smooth' })
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="carousel-container" ref={carouselRef}>
      {recipes.map((r) => (
        <div className="carousel-item" key={r.idMeal}>
          <RecipeCard recipe={r} />
        </div>
      ))}
    </div>
  )
}
