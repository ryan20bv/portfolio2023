import React, { useState } from "react";

const useRandomizer = () => {
	const [maxValue, setMaxValue] = useState(6);
	const [index, setIndex] = useState(1);
	const [arrayValues, setArrayValues] = useState([]);

	const singleButtonHandler = () => {
		if (arrayValues.length >= 6) {
			return;
		}
		const singleNum = Math.ceil(Math.random() * maxValue);
		console.log(singleNum);
		console.log(index);
		const found = arrayValues.find((element) => element === singleNum);
		if (found) {
			singleButtonHandler();
			return;
		}
		// arrayValues.splice(index, 0, singleNum);
		setArrayValues((prevState) => {
			return [...prevState, singleNum];
		});
		setIndex((prevState) => {
			return prevState + 1;
		});
	};
	const randomizedNumber = () => {
		let intervalId = setInterval(() => {
			Math.ceil(Math.random() * maxValue);
		}, 300);
	};
	const changeMaxValue = (e) => {
		setMaxValue(e.target.value);
	};
	return { maxValue, changeMaxValue, singleButtonHandler, arrayValues };
};

export default useRandomizer;
