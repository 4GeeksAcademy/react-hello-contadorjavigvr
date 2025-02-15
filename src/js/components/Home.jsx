import React from "react";
import Counter from "./Contador"
//include images into your bundle


//create your first component
let seconds = 456
const Home = () => {
	setInterval(() => { seconds++; 
		document.getElementById("counter").innerText = `Los segundos son: ${seconds}`;
	 }, 1000);
	  return (
	  <div className="App"> 
	  <Counter time={seconds}/> 
	  </div>);
};

export default Home;
