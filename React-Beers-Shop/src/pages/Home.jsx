import react from "react";
import home from "../data/home";
import Hero from "./Hero"
const Home = () => {
  return (
    <>
    <h1 className="title">Here is the home page</h1>
    <Hero hero={home.hero}/>
    </>
  )
}

export default Home