import react from "react";
import home from "../data/home";
import Hero from "./Hero"
import Phylosophy from "./Phylosophy";
const Home = () => {
  return (
    <>
    <h1 className="title">Here is the home page</h1>
    <Hero hero={home.hero}/>
    <Phylosophy props={home.phylosophy}/>
    </>
  )
}

export default Home