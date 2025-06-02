export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="logo">Recipe<span className="highlight">Hub</span></h3>
        <p className="footer-copy">&copy; {new Date().getFullYear()} RecipeHub. All rights reserved.</p>
      </div>
    </footer>
  )
}
