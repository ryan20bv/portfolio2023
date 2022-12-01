import React, { useEffect } from "react";

import useRandomizer from "./assets/hooks/use-randomizer";
import classes from "./assets/styles/randomizer.module.css";
const Randomizer = () => {
	const {
		maxValue,
		changeMaxValue,
		singleClickHandler,
		arrayValues,
		randomArray,
		resetValues,
		automaticClickHandler,
	} = useRandomizer();
	// useEffect(() => {
	// 	console.log(index);
	// }, [index]);
	// useEffect(() => {
	// 	console.log("random", randomArray);
	// 	console.log("array", arrayValues);
	// }, [arrayValues, randomArray]);
	return (
		<main className={classes.randomizer}>
			<h1>Randomizer</h1>
			<section className={classes.range}>
				<div>
					<label htmlFor='min'>min number: </label>
					<input
						type='number'
						maxLength='3'
						id='min'
						defaultValue='1'
						readOnly
					/>
				</div>
				<div>
					<label htmlFor='max'>max number:</label>
					<input
						type='number'
						maxLength='3'
						id='max'
						defaultValue={maxValue}
						onChange={changeMaxValue}
					/>
				</div>
			</section>
			<section className={classes.button}>
				<button className={classes.single} onClick={singleClickHandler}>
					Single
				</button>
				<button className={classes.reset} onClick={resetValues}>
					Reset
				</button>
				<button className={classes.automatic} onClick={automaticClickHandler}>
					Automatic
				</button>
			</section>
			<section className={classes.bottom}>
				<div>
					<p>
						{arrayValues[0]
							? arrayValues[0]
							: randomArray[0]
							? randomArray[0]
							: "??"}
					</p>
				</div>
				<div>
					<p>
						{arrayValues[1]
							? arrayValues[1]
							: randomArray[1]
							? randomArray[1]
							: "??"}
					</p>
				</div>
				<div>
					<p>
						{arrayValues[2]
							? arrayValues[2]
							: randomArray[2]
							? randomArray[2]
							: "??"}
					</p>
				</div>
				<div>
					<p>
						{arrayValues[3]
							? arrayValues[3]
							: randomArray[3]
							? randomArray[3]
							: "??"}
					</p>
				</div>
				<div>
					<p>
						{arrayValues[4]
							? arrayValues[4]
							: randomArray[4]
							? randomArray[4]
							: "??"}
					</p>
				</div>
				<div>
					<p>
						{arrayValues[5]
							? arrayValues[5]
							: randomArray[5]
							? randomArray[5]
							: "??"}
					</p>
				</div>
			</section>
			<footer>@2022</footer>
		</main>
	);
};

export default Randomizer;
