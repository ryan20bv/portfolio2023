import React from "react";
import { Routes, Route } from "react-router-dom";

import MiniAppWrapper from "./MiniAppWrapper";
import Raffle from "./miniAppPages/Raffle";
import SimonGame from "./miniAppPages/SimonGame";
import NumToWords from "./miniAppPages/NumToWords";
import Randomizer from "./miniAppPages/Randomizer";
import DiceGame from "./miniAppPages/DiceGame";
import SliderSix from "./miniAppPages/SliderSix";

const MiniApp = () => {
	return (
		<MiniAppWrapper>
			<Routes>
				<Route path='/raffle' element={<Raffle />} />
				<Route path='/simon-game' element={<SimonGame />} />
				<Route path='/num-to-word' element={<NumToWords />} />
				<Route path='/randomizer' element={<Randomizer />} />
				<Route path='/dice-game' element={<DiceGame />} />
				<Route path='/Six' element={<SliderSix />} />
			</Routes>
		</MiniAppWrapper>
	);
};

export default MiniApp;
