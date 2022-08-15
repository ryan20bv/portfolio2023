import React, { useState } from "react";

const useNum = () => {
	const [inputValue, setInputValue] = useState("");
	const [wordOutputValue, setWordOutputValue] = useState("");

	const hookInputChangeHandler = (number) => {
		setInputValue(number);
	};

	const _setIdentifier = [
		" ",
		" ",
		"Thousand , ",
		"Million , ",
		"Billion , ",
		"Trillion , ",
		"Quadrillion , ",
		"Quintillion , ",
		"Zillion , ",
	];
	// ones
	const _onesArray = [
		"Zero ",
		"One ",
		"Two ",
		"Three ",
		"Four ",
		"Five ",
		"Six ",
		"Seven ",
		"Eight ",
		"Nine ",
	];
	const _teensArray = [
		"Ten ",
		"Eleven ",
		"Twelve ",
		"Thirteen ",
		"Fourteen ",
		"Fifteen ",
		"Sixteen ",
		"Seventeen ",
		"Eighteen ",
		"Nineteen ",
	];

	const _tensArray = [
		"Zero ",
		"Ten ",
		"Twenty ",
		"Thirty ",
		"Forty ",
		"Fifty ",
		"Sixty ",
		"Seventy ",
		"Eighty ",
		"Ninety ",
	];
	let originalValue = "";
	let originalLength = "";
	let originalArray;
	let returnedWord = "";

	const ones_Handler = (val) => {
		return _onesArray[val];
	};
	const teens_Handler = (val) => {
		const slicedVal = val.slice(1);
		return _teensArray[slicedVal];
	};
	const twoDigit_Handler = (val) => {
		const quotient = Math.floor(val / 10);
		return _tensArray[quotient];
	};
	const three_digit = (val) => {
		let quotient = Math.floor(val / 100);

		return _onesArray[quotient];
	};

	const showOutput = (wordValue) => {
		setWordOutputValue(wordValue);
	};
	const processOfConvertingHandler = (numValue) => {
		let newValue;
		const valueLength = numValue.length;
		if (valueLength === 3) {
			if (numValue >= 100) {
				returnedWord += three_digit(numValue);
				returnedWord += "Hundred ";
				if (numValue % 100 === 0) {
					// showOutput(wordOutput);
					return;
				}
			}
		} else if (valueLength === 2) {
			if (numValue >= 20 && numValue < 100) {
				returnedWord += twoDigit_Handler(numValue);
				const modOfNum = numValue % 10;
				if (modOfNum === 0) {
					return;
				}
			} else if (numValue >= 10 && numValue < 20) {
				returnedWord += teens_Handler(numValue);
				return;
			}
		} else if (valueLength === 1) {
			returnedWord += ones_Handler(numValue);
		}
		newValue = numValue.slice(1);
		if (!newValue) {
			// showOutput(wordOutput);
			return;
		}
		processOfConvertingHandler(newValue);
	};
	const startConvertingHandler = (passedArray) => {
		let lengthOfArray = passedArray.length;
		passedArray.forEach((setValue) => {
			const identity = _setIdentifier[lengthOfArray];
			// const parseSet = parseInt(set);
			if (setValue > 0) {
				processOfConvertingHandler(setValue);
				returnedWord += identity;
			}

			lengthOfArray--;
		});
		if (returnedWord.trim().slice(-1) === ",") {
			showOutput(returnedWord.trim().slice(0, -1));
			return;
		}
		showOutput(returnedWord);
	};

	const putInArray = (value, area, length) => {
		const slicedNum = value.slice(area, length);
		originalArray.unshift(slicedNum);

		if (length > 3) {
			putInArray(value, area - 3, length - 3);
		} else {
			startConvertingHandler(originalArray);
		}
	};
	const convertToWordHandler = (e) => {
		originalValue = inputValue;
		originalLength = originalValue.length;
		originalArray = [];
		if (originalValue.trim() === "0") {
			returnedWord = ones_Handler(originalValue);
			showOutput(returnedWord);
			return;
		}
		putInArray(originalValue, -3, originalLength);
	};
	return {
		hookInputChangeHandler: hookInputChangeHandler,
		inputValue: inputValue,
		convertToWordHandler: convertToWordHandler,
		wordOutputValue: wordOutputValue,
	};
};

export default useNum;
