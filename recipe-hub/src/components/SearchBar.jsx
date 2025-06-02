import { useState, useEffect } from 'react'

export default function SearchBar({ setSearchResults }) {
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (query.length === 0) {
      setSearchResults([])
      return
    }

    const timeoutId = setTimeout(async () => {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      const data = await res.json()
      if (data.meals) {
        setSearchResults(data.meals)
      } else {
        setSearchResults([])
      }
    }, 500)

    return () => clearTimeout(timeoutId)
  }, [query, setSearchResults])

  return (
    <div className="search-bar-container">
      <input
        type="search"
        placeholder="Search recipes..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="search-input"
      />
    </div>
  )
}