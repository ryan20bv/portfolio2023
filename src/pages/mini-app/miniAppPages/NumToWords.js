import React, { useEffect, useRef } from "react";
import useNum from "./assets/hooks/use-num";

import classes from "./assets/styles/numToWord.module.css";
const NumToWords = () => {
	const {
		hookInputChangeHandler,
		inputValue,
		convertToWordHandler,
		wordOutputValue,
	} = useNum();
	const inputRef = useRef();
	const changeHandler = (e) => {
		let enteredValue = e.target.value;

		if (e.target.value === "00") {
			enteredValue = 0;
		}

		if (!enteredValue) {
			inputRef.current.value = "";
			return;
		}
		const formatValue = enteredValue.replaceAll(",", "");
		hookInputChangeHandler(formatValue);
		const localeStringValue = parseInt(formatValue).toLocaleString();

		inputRef.current.value = localeStringValue;
	};

	// const clickHandler = () => {
	// 	inputRef.current.value = "";
	// };
	const submitHandler = (e) => {
		e.preventDefault();
		convertToWordHandler();
	};
	let content;
	if (!wordOutputValue) {
		content = " ";
	} else {
		content = <p>{wordOutputValue}</p>;
	}
	return (
		<div className={classes.num}>
			<h1>Number to Word</h1>
			<form onSubmit={(e) => submitHandler(e)}>
				<label htmlFor='numInput'>Input the number here:</label>
				<input
					type='text'
					id='numInput'
					ref={inputRef}
					// value=''
					maxLength='21'
					onChange={changeHandler}
					// onClick={clickHandler}
				/>
				<button>Convert to Word/s</button>
			</form>
			<div>{content}</div>
			<footer>@2022</footer>
		</div>
	);
};

export default NumToWords;
