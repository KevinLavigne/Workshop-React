import React, { useState } from 'react';
/** Import de la donnée */
import './App.css';
import RobotCard from './components/RobotCard';
import Robots from './data/data';


function App() {

	const [search,setSearch] = useState("")
	return (
		<div className="App">
			<div>
				<label>search by name :</label><br/>
				<input type="search" onChange={(e) => setSearch(e.target.value)}/>
			</div>
			<h1>Robot Finder</h1>
			{Robots.filter((robot) => robot.name.includes(search)).map((robot, index) => (
      <RobotCard key={index} {...robot} />
			))}
		</div>
	);
}

export default App;
