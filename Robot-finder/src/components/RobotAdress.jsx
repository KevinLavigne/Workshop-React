import React from "react";

const RobotAdress = ({street, suite, city, zipcode}) => {
  return (
    <>
    <h1>Adress :</h1>
    <h2><span>street</span>: <br/>{street} </h2>
    <h2><span>suite</span>: <br/>{suite} </h2>
    <h2><span>city</span>: <br/>{city} </h2>
    <h2><span>zipcode</span>: <br/>{zipcode} </h2>
    </>
  )
}

export default RobotAdress