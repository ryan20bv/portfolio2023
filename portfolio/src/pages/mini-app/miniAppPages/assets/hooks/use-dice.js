import React, { useState } from "react";

const useDice = () => {
	const [leftValue, setLeftValue] = useState(6);
	const [rightValue, setRightValue] = useState(6);
	let intervalId = "";
	const randomLeftHandler = () => {
		const numLeft = Math.ceil(Math.random() * 6);

		setLeftValue(numLeft);
	};
	const randomRightHandler = () => {
		const numRight = Math.ceil(Math.random() * 6);

		setRightValue(numRight);
	};
	const rollDiceHandler = () => {
		intervalId = setInterval(() => {
			randomLeftHandler();
			randomRightHandler();
		}, 300);
		setTimeout(() => {
			clearInterval(intervalId);
			randomLeftHandler();
			randomRightHandler();
		}, 3000);
	};
	const clickHandler = (e) => {
		rollDiceHandler();
	};
	return {
		clickHandler: clickHandler,

		leftValue: leftValue,
		rightValue: rightValue,
	};
};

export default useDice;
