import React from "react";

import Nav from "../../ui/Nav";
import Slider from "./Slider";
import SliderContainer from "./SliderContainer";

import classes from "./miniAppWrapper.module.css";
const MiniAppWrapper = (props) => {
	return (
		<>
			<main className={classes.main}>
				<section className={classes.nav_container}>
					<Nav addedClass={classes.mini_app_nav} />
				</section>
				<section className={classes.content}>
					<div className={classes.output}>{props.children}</div>

					<Slider classes={classes}>
						<SliderContainer classes={classes} />
					</Slider>
				</section>
			</main>
		</>
	);
};

export default MiniAppWrapper;
