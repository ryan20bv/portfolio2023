import React from "react";
import { Routes, Route } from "react-router-dom";
import SliderOne from "./miniAppPages/SliderOne";
import SliderTwo from "./miniAppPages/SliderTwo";
import SliderThree from "./miniAppPages/SliderThree";
import SliderFour from "./miniAppPages/SliderFour";
import SliderFive from "./miniAppPages/SliderFive";
import SliderSix from "./miniAppPages/SliderSix";

const MiniAppOutput = ({ classes }) => {
	return (
		<div className={classes.output}>
			MiniApp
			<Routes>
				<Route path='/slider/one' element={<SliderOne />} />
				<Route path='/slider/two' element={<SliderTwo />} />
				<Route path='/slider/three' element={<SliderThree />} />
				<Route path='/slider/four' element={<SliderFour />} />
				<Route path='/slider/five' element={<SliderFive />} />
				<Route path='/slider/Six' element={<SliderSix />} />
			</Routes>
		</div>
	);
};

export default MiniAppOutput;
