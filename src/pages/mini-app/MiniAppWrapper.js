import React, { useRef, useState, useEffect } from "react";

import Nav from "../../ui/Nav";
import Slider from "./Slider";
import SliderContainer from "./SliderContainer";

import classes from "./miniAppWrapper.module.css";
const MiniAppWrapper = (props) => {
	const outPutRef = useRef();
	const [outPutClientWidth, setOutPutClientWidth] = useState();

	useEffect(() => {
		setOutPutClientWidth(outPutRef.current.clientWidth);
	}, []);

	return (
		<>
			<main className={classes.main}>
				<section className={classes.nav_container}>
					<Nav addedClass={classes.mini_app_nav} />
				</section>

				<div className={classes.output} ref={outPutRef}>
					{props.children}
				</div>

				<Slider classes={classes} outPutClientWidth={outPutClientWidth}>
					<SliderContainer classes={classes} />
				</Slider>
			</main>
		</>
	);
};

export default MiniAppWrapper;
