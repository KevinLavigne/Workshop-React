import axios from "axios";
import react, { useState } from "react";
import Beer from "./Beer";
import beerData from "../data/beer";
import "../styles/beer.css";

const Beers = () => {
  const [beers, setBeers] = useState([beerData[0]]);
  const addBeer = () => {
    axios
      .get("https://api.punkapi.com/v2/beers/random")
      .then((res) => res.data)
      .then((data) => {
        setBeers([...beers, data[0]]);
      });
  };
  console.log(beers);
  return (
    <div className="beers-container">
      <h1>The Beer To Discover</h1>
      <button type="button" onClick={() => addBeer()}>
        add a Beer
      </button>
      {beers.map((beer, index) => (
        <Beer key={index} {...beer} />
      ))}
    </div>
  );
};
export default Beers;
