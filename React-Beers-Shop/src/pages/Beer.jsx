const Beer = (beer) => {
  console.log(beer);
  return (
    <div className="beer-container">
      <h1>{beer.name}</h1>
      <div className="flex">
        <h2>first brew : {beer.first_brewed}</h2>
        <h2>alcool % : {beer.abv}</h2>
      </div>
      <p>description : {beer.description}</p>
    </div>
  );
};
export default Beer;
