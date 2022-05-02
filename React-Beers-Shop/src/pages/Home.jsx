import react from "react";
import home from "../data/home";
import hero from "./Hero"
const Home = () => {
  return (
    <>
    <h1>Here is the home page</h1>
    <Hero props={home.hero}/>
    </>
  )
}

export default Home