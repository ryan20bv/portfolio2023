import React, { useState } from "react";

const useRandomizer = () => {
	const [maxValue, setMaxValue] = useState(42);
	const [index, setIndex] = useState(0);
	const [arrayValues, setArrayValues] = useState([]);
	const [randomArray, setRandomArray] = useState([]);
	const singleButtonHandler = () => {
		if (arrayValues.length >= 6) {
			return;
		}
		let singleNum = Math.ceil(Math.random() * maxValue);
		const found = arrayValues.find((element) => element === singleNum);
		if (found) {
			singleButtonHandler();
			return;
		}
		if (singleNum < 10) {
			singleNum = "0" + singleNum;
		}
		setArrayValues((prevState) => {
			return [...prevState, singleNum];
		});
	};
	const randomizedNumber = (ind) => {
		if (ind >= 6) {
			return;
		}
		let intervalId = setInterval(() => {
			const copyOfRandom = [...randomArray];
			let num = Math.ceil(Math.random() * maxValue);
			if (num < 10) {
				num = "0" + num;
			}
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
				return (prevState = prevState + 1);
			});
		}
	};
	let newIndex = 0;
	const automaticClickHandler = () => {
		randomizedNumber(newIndex);
		let timerId = setInterval(() => {
			newIndex++;
			if (newIndex < 6) {
				automaticClickHandler();
			}
		}, 3000);
		setTimeout(() => {
			clearInterval(timerId);
		}, 3500);
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
