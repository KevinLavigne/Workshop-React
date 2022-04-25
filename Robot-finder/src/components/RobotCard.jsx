import React from "react";

import Robots from "../data/data";
const RobotCard = () => {
  return (
<div className='cardContainer'>
{Robots.map((el) => (
  <div className='card'>
    <h2><span>name</span>: <br/>{el.name} </h2>
    <h2><span>username</span>: <br/>{el.username}</h2>
    <h2><span>email</span>: <br/>{el.email}</h2>
    <h2><span>website</span>: <br/>{el.website}</h2>
  </div>
))}
</div>
  )}

export default RobotCard