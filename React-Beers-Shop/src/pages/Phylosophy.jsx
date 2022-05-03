import react from "react";
import "../styles/Phylosophy.css"

const Phylosophy = (props) => {
  return (
    <div>
      <h1>{props.props.title}</h1>
      <div className="phylo-flex">
        <img className="phylo-img" src={props.props.image.src} />
        <h2>{props.props.description}</h2>
      </div>
    </div>
  );
};
export default Phylosophy;
