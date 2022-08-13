import React from "react";

import classes from "./assets/styles/numToWord.module.css";
const NumToWords = () => {
	return (
		<div className={classes.num}>
			<h1>Number to Word</h1>
			<form action=''>
				<label htmlFor=''>Input the number here:</label>
				<input type='text' value='103' />
				<button>Convert to Word/s</button>
			</form>
			<div>
				<p>
					One Hundred THousand One Billion Three Hundred Fifty Thousand One
					Hundred THousand One Billion Three Hundred Fifty Thousand
				</p>
			</div>
			<footer>@2022</footer>
		</div>
	);
};

export default NumToWords;
