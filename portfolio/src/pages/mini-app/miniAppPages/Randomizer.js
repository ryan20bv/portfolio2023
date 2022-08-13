import React from "react";

import classes from "./assets/styles/randomizer.module.css";
const Randomizer = () => {
	return (
		<main className={classes.randomizer}>
			<h1>Randomizer</h1>
			<section className={classes.range}>
				<div>
					<label htmlFor='min'>min number:</label>
					<input type='number' maxLength='3' id='min' value='1' readOnly />
				</div>
				<div>
					<label htmlFor='max'>max number:</label>
					<input type='number' maxLength='3' id='max' />
				</div>
			</section>
			<section className={classes.button}>
				<button className={classes.single}>Single</button>
				<button className={classes.reset}>Reset</button>
				<button className={classes.automatic}>Automatic</button>
			</section>
			<section className={classes.bottom}>
				<input type='text' readOnly value='??' />
				<input type='text' readOnly value='??' />
				<input type='text' readOnly value='??' />
				<input type='text' readOnly value='??' />
				<input type='text' readOnly value='??' />
				<input type='text' readOnly value='??' />
			</section>
			<footer>@2022</footer>
		</main>
	);
};

export default Randomizer;
