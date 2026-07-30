import "./Featured.css";

function Featured() {
  return (
    <section className="featured">
      <h2>Featured Games</h2>

      <div className="featured-container">
        <div className="featured-card">
          <h3>Red Dead Redemption 2</h3>
          <p>Experience the Wild West adventure.</p>
        </div>

        <div className="featured-card">
          <h3>Call of Duty</h3>
          <p>Fight in the ultimate action shooter.</p>
        </div>

        <div className="featured-card">
          <h3>Minecraft</h3>
          <p>Build and explore endless worlds.</p>
        </div>
      </div>
    </section>
  );
}

export default Featured;