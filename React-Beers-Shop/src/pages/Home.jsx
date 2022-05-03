import react from "react";
import home from "../data/home";
import Hero from "./Hero"
import Phylosophy from "./Phylosophy";
import Customers from "./Customers";
const Home = () => {
  return (
    <>
    <h1 className="title">Here is the home page</h1>
    <Hero hero={home.hero}/>
    <Phylosophy props={home.phylosophy}/>
    <Customers title={home.customer.title} items={home.customer.items}/>
    </>
  )
}

export default Home