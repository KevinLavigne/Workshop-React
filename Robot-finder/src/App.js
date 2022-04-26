import React from 'react';
/** Import de la donnée */
import './App.css';
import RobotCard from './components/RobotCard';
import Robots from './data/data';

function App() {
	return (
		<div className="App">
			<h1>Robot Finder</h1>
			{Robots.map((robot, index) => (
      <RobotCard key={index} {...robot} />
			))}
		</div>
	);
}

export default App;
