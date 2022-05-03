import Malt from "./Malt";
import "../styles/discovery.css";

const Discovery = (props) => {
  return (
    <div className="discovery-container">
      <h1>{props.title}</h1>
      <div className="malts-container">
        {props.items.map((items, index) => (
          <Malt key={index} title={items.title} desc={items.description} />
        ))}
      </div>
    </div>
  );
};

export default Discovery;
