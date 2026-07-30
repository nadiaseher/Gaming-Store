import "./Navbar.css";

function Navbar({ search, setSearch }) {
  return (
    <nav className="navbar">
      <h2>🎮 Gaming Store</h2>

      <input
        type="text"
        placeholder="Search Games..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#games">Games</a></li>
        <li><a href="#categories">Categories</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;