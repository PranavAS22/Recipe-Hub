import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import RecipeDetailsPage from './pages/RecipeDetailsPage'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetailsPage />} />
        </Routes>
        <Footer />
      </>
    </Router>
  )
}

export default App
