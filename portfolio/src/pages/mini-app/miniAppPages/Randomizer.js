import React, { useEffect } from "react";

import useRandomizer from "./assets/hooks/use-randomizer";
import classes from "./assets/styles/randomizer.module.css";
const Randomizer = () => {
	const { maxValue, changeMaxValue, singleButtonHandler, arrayValues } =
		useRandomizer();
	useEffect(() => {
		console.log(arrayValues);
	}, [arrayValues]);
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
				<button className={classes.single} onClick={singleButtonHandler}>
					Single
				</button>
				<button className={classes.reset}>Reset</button>
				<button className={classes.automatic}>Automatic</button>
			</section>
			<section className={classes.bottom}>
				<div>
					<p>{arrayValues[0] ? arrayValues[0] : "??"}</p>
				</div>
				<div>
					<p>{arrayValues[1] ? arrayValues[1] : "??"}</p>
				</div>
				<div>
					<p>{arrayValues[2] ? arrayValues[2] : "??"}</p>
				</div>
				<div>
					<p>{arrayValues[3] ? arrayValues[3] : "??"}</p>
				</div>
				<div>
					<p>{arrayValues[4] ? arrayValues[4] : "??"}</p>
				</div>
				<div>
					<p>{arrayValues[5] ? arrayValues[5] : "??"}</p>
				</div>
			</section>
			<footer>@2022</footer>
		</main>
	);
};

export default Randomizer;
