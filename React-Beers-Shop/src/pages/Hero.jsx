import { Link } from "react-router-dom";
import background from "../../assets/herobeers.jpeg";
import "../styles/Hero.css";

const Hero = (props) => {
  return (
    <div className="hero">
      <img className="background" src={background}></img>
      <div></div>
      <div>
      <h1>{props.hero.title}</h1>
      {console.log(props)}
      <h2>{props.hero.subTitle}</h2>
      <Link className="hero-button" to={props.hero.link.to}>
        {props.hero.link.label}
      </Link>
      </div>
    </div>
  );
};
export default Hero;
