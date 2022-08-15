import React, { useState } from "react";

const useRandomizer = () => {
	const [maxValue, setMaxValue] = useState(6);
	const [index, setIndex] = useState(0);
	const [arrayValues, setArrayValues] = useState([]);
	const [randomArray, setRandomArray] = useState([]);
	const singleButtonHandler = () => {
		if (arrayValues.length >= 6) {
			return;
		}
		const singleNum = Math.ceil(Math.random() * maxValue);
		const found = arrayValues.find((element) => element === singleNum);
		if (found) {
			singleButtonHandler();
			return;
		}
		setArrayValues((prevState) => {
			return [...prevState, singleNum];
		});
	};
	const randomizedNumber = (ind) => {
		console.log("one");
		if (ind >= 6) {
			console.log("return");
			return;
		}
		let intervalId = setInterval(() => {
			const copyOfRandom = [...randomArray];
			const num = Math.ceil(Math.random() * maxValue);
			copyOfRandom[ind] = num;
			setRandomArray(copyOfRandom);
		}, 100);
		setTimeout(() => {
			clearInterval(intervalId);
			singleButtonHandler();
		}, 2000);
	};
	const singleClickHandler = () => {
		randomizedNumber(index);
		if (index < 6) {
			setIndex((prevState) => {
				console.log("two");
				return (prevState = prevState + 1);
			});
		}
	};
	const automaticClickHandler = () => {
		singleClickHandler();
		console.log("auto", index);
		let timerId = setInterval(() => {
			automaticClickHandler();
		}, 2000);
		setTimeout(() => {
			clearInterval(timerId);
		}, 2200);
	};
	const resetValues = () => {
		setIndex(0);
		setArrayValues([]);
		setRandomArray([]);
	};
	const changeMaxValue = (e) => {
		setMaxValue(e.target.value);
	};
	return {
		maxValue,
		changeMaxValue,
		singleClickHandler,
		arrayValues,
		randomArray,
		resetValues,
		automaticClickHandler,
		index,
	};
};

export default useRandomizer;
