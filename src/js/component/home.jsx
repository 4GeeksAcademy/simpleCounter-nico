import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { CountDownTimer } from "./CountDownTimer";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<CountDownTimer />
		</div>
	);
};

export default Home;
