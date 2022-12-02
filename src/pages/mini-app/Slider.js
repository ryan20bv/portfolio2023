import React, { useRef, useEffect, useState } from "react";

const Slider = (props) => {
	const [screenXValue, setScreenXValue] = useState(0);
	onmousemove = (e) => {
		// console.log(e.screenX);
		// console.dir(e);
		setScreenXValue(e.clientX);
	};

	// console.log(screenXValue);

	const sliderDivRef = useRef();
	// console.dir(sliderDivRef);
	useEffect(() => {
		sliderDivRef.current.scrollLeft = 0;
	}, []);
	const value = props.outPutClientWidth / 6;
	// 0-1200 0 200 400 600 800 1000 1200
	// 0 -320 53.3 106 159.9 213.2 266
	const moveSlider = () => {
		if (screenXValue < value) {
			sliderDivRef.current.scrollLeft = 0;
		} else if (screenXValue >= value && screenXValue < value * 2) {
			sliderDivRef.current.scrollLeft = 80;
		} else if (screenXValue >= value * 2 && screenXValue < value * 3) {
			sliderDivRef.current.scrollLeft = 160;
		} else if (screenXValue >= value * 3 && screenXValue < value * 4) {
			sliderDivRef.current.scrollLeft = 218;
		} else if (screenXValue >= value * 4) {
			sliderDivRef.current.scrollLeft = 350;
		}
	};

	const enterSliderDivHandler = () => {
		// console.log(sliderDivRef.current.scrollLeft);
		moveSlider();
	};
	return (
		<div
			className={props.classes.slider_div}
			ref={sliderDivRef}
			onMouseEnter={enterSliderDivHandler}
			onMouseMove={moveSlider}
		>
			{props.children}
		</div>
	);
};

export default Slider;
