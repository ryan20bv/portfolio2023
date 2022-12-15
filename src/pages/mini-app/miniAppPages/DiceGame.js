import React, { useState, useEffect } from "react";

import useDice from "./assets/hooks/use-dice";
import classes from "./assets/styles/dice.module.css";
const DiceGame = () => {
	// const [leftValue, setLeftValue] = useState(6);
	const {
		startHandler,
		leftValue,
		rightValue,
		leftScore,
		rightScore,
		message,
		resetHandler,
	} = useDice();

	return (
		<main className={classes.dice}>
			<section className={classes.title}>
				<h1>Dice Game</h1>
			</section>
			<section className={classes.play_area}>
				<div className={classes.left}>
					<div className={classes.info}>
						<h2>Player 1</h2>
						<p>{leftScore}</p>
					</div>
					<div className={classes.image}>
						<img
							src={require(`./assets/images/dice${leftValue}.png`)}
							alt='dice'
						/>
					</div>

					{(message === "1" || message === "Draw") && (
						<p>{message === "Draw" ? "Draw" : "Win"}</p>
					)}
				</div>
				<div className={classes.options}>
					<button onClick={resetHandler}>Reset</button>
					<button onClick={startHandler}>Roll Dice</button>
				</div>
				<div className={classes.right}>
					<div className={classes.info}>
						<h2>Player 2</h2>
						<p>{rightScore}</p>
					</div>
					<div className={classes.image}>
						<img
							// src={
							// 	process.env.PUBLIC_URL + `/assets/images/dice${rightValue}.PNG`
							// }
							src={require(`./assets/images/dice${rightValue}.png`)}
							alt='dice'
						/>
					</div>

					{(message === "2" || message === "Draw") && (
						<p>{message === "Draw" ? "Draw" : "Win"}</p>
					)}
				</div>
			</section>
			<footer>@2022</footer>
		</main>
	);
};

export default DiceGame;
