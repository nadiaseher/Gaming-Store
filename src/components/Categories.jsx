import "./Categories.css";

function Categories({ setCategory }) {

  const categories = [
    "All",
    "Action",
    "Adventure",
    "Racing",
    "Sports",
    "Horror"
  ];

  return (
    <section className="categories" id="categories">

      <h2>Game Categories</h2>

      <div className="category-container">

        {categories.map((category) => (
          <div
            className="category-card"
            key={category}
            onClick={() => setCategory(category)}
          >
            <h3>{category}</h3>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Categories;