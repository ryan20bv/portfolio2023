import React, { useState } from "react";
import Nav from "../../ui/Nav";
import Slider from "./Slider";
import MiniAppOutput from "./MiniAppOutput";
import SliderContainer from "./SliderContainer";

import classes from "./miniApp.module.css";

// const sliderContainer = document.getElementById("slider_container");

const MiniApp = () => {
	const [screenX, setScreenX] = useState(null);
	// const handler = ()=> {

	// }
	onmousemove = (e) => {
		// console.log(e.screenX);
		setScreenX(e.screenX);
	};

	return (
		<main className={classes.main}>
			<section className={classes.nav_container}>
				<Nav miniAppClassName={classes.mini_app_nav} />
			</section>
			<section className={classes.content}>
				<MiniAppOutput classes={classes} />
				<Slider classes={classes} screenXValue={screenX}>
					<SliderContainer classes={classes} />
				</Slider>
			</section>
		</main>
	);
};

export default MiniApp;
