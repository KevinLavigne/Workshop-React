import React from "react";
import RobotAdress from "./RobotAdress";

const RobotCard = ({name, username, email, website, address, id}) => {
  
  const [display, setDisplay] = React.useState(false)
  function handlheDisplay(){
    setDisplay(!display);
  }
  return (
<div className='cardContainer'>
  <div className='card'>
    <img src={`https://robohash.org/${id}?set=set2`} ></img>
    <h2><span>name</span>: <br/>{name} </h2>
    <h2><span>username</span>: <br/>{username}</h2>
    <h2><span>email</span>: <br/>{email}</h2>
    <h2><span>website</span>: <br/>{website}</h2>
    <button type="button" onClick={handlheDisplay}>display adress</button>
    {display ? <RobotAdress {...address}/> : ""}
  </div>
</div>
  )}

export default RobotCard