const Phylosophy = (props) => {
  return (
    <div>
      <h1>{props.props.title}</h1>
      <div>
        <img src={props.props.image.src} />
        <h2>{props.props.description}</h2>
      </div>
    </div>
  );
};
export default Phylosophy;
