import React from "react";
import { Routes, Route } from "react-router-dom";
import SliderOne from "./miniAppPages/SliderOne";
import SimonGame from "./miniAppPages/SimonGame";
import NumToWords from "./miniAppPages/NumToWords";
import Randomizer from "./miniAppPages/Randomizer";
import DiceGame from "./miniAppPages/DiceGame";
import SliderSix from "./miniAppPages/SliderSix";

const MiniAppOutput = ({ classes }) => {
	return (
		<div className={classes.output}>
			MiniApp
			<Routes>
				<Route path='/one' element={<SliderOne />} />
				<Route path='/simon-game' element={<SimonGame />} />
				<Route path='/num-to-word' element={<NumToWords />} />
				<Route path='/randomizer' element={<Randomizer />} />
				<Route path='/dice-game' element={<DiceGame />} />
				<Route path='/Six' element={<SliderSix />} />
			</Routes>
		</div>
	);
};

export default MiniAppOutput;
