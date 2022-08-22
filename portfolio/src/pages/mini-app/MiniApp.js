import React from "react";
import { Routes, Route } from "react-router-dom";

import MiniAppWrapper from "./MiniAppWrapper";
import TodoList from "./miniAppPages/TodoList";
import SimonGame from "./miniAppPages/SimonGame";
import NumToWords from "./miniAppPages/NumToWords";
import Randomizer from "./miniAppPages/Randomizer";
import DiceGame from "./miniAppPages/DiceGame";
import SliderSix from "./miniAppPages/SliderSix";

const MiniApp = () => {
	return (
		<MiniAppWrapper>
			<Routes>
				<Route path='/todo' element={<TodoList />} />
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
