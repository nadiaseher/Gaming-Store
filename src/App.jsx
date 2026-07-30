import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Games from "./components/Games";
import Categories from "./components/Categories";
import Featured from "./components/Featured";
import Offer from "./components/Offer";
import Footer from "./components/Footer";

import gamesData from "./data/Game";

function App() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");


  const filteredGames = gamesData.filter((game) => {

    const searchMatch = game.name
      .toLowerCase()
      .includes(search.toLowerCase());


    const categoryMatch =
      category === "All" ||
      game.category === category;


    return searchMatch && categoryMatch;

  });


  return (
    <>
      <Navbar 
        search={search}
        setSearch={setSearch}
      />


      <div id="home">
        <Hero />
      </div>


      <Games games={filteredGames} />


      <Categories setCategory={setCategory} />


      <Featured />


      <Offer />


      <div id="contact">
        <Footer />
      </div>

    </>
  );
}

export default App;