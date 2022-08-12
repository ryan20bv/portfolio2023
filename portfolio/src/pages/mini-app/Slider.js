import React, { useRef, useEffect, useState } from "react";

const Slider = (props) => {
	const [screenXValue, setScreenXValue] = useState(null);
	onmousemove = (e) => {
		// console.log(e.screenX);
		setScreenXValue(e.screenX);
	};

	const sliderDivRef = useRef();
	useEffect(() => {
		sliderDivRef.current.scrollLeft = 150;
	}, []);
	// 0-1200 0 200 400 600 800 1000 1200
	// 0 -320 53.3 106 159.9 213.2 266
	const moveSlider = () => {
		if (screenXValue < 200) {
			sliderDivRef.current.scrollLeft = 0;
		} else if (screenXValue >= 200 && screenXValue < 400) {
			sliderDivRef.current.scrollLeft = 55;
		} else if (screenXValue >= 400 && screenXValue < 600) {
			sliderDivRef.current.scrollLeft = 110;
		} else if (screenXValue >= 600 && screenXValue < 800) {
			sliderDivRef.current.scrollLeft = 160;
		} else if (screenXValue >= 800 && screenXValue < 1000) {
			sliderDivRef.current.scrollLeft = 218;
		} else if (screenXValue >= 1000) {
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
