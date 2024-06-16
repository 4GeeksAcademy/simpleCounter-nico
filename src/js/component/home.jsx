import React, { useEffect, useState } from "react";
import {Timer} from "./Timer"

const Home = () => {

	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter(counter => counter + 1)
		}, 1000)

		return () => clearInterval(interval)
	}, [counter])


	function calculateSeconds(aCounter, placeValue){
		return Math.floor(aCounter / placeValue) % 10
	}


	return (
		<div className="text-center">
			<Timer 
			thousandsDigit = {calculateSeconds(counter, 1000)}
			hundredsDigit = {calculateSeconds(counter, 100)}
			tensDigit = {calculateSeconds(counter, 10)}
			onesDigit = {calculateSeconds(counter, 1)}
			/>
		</div>
	);
};

export default Home;
