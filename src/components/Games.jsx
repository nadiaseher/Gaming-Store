import "./Games.css";

function Games({ games }) {
  return (
    <section className="games" id="games">

      <h2>Popular Games</h2>

      <div className="games-grid">

        {games.map((game) => (
          <div className="game-card" key={game.id}>

            <img src={game.image} alt={game.name} />

            <h3>{game.name}</h3>

            <p>{game.price}</p>

            <button>Buy Now</button>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Games;