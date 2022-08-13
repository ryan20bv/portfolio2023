import React from "react";

import classes from "./assets/styles/dice.module.css";
const DiceGame = () => {
	return (
		<main className={classes.dice}>
			<section className={classes.title}>
				<h1>Dice Game</h1>
			</section>
			<section className={classes.play_area}>
				<div className={classes.left}>
					<div className={classes.info}>
						<h2>Player 1</h2>
						<p>0</p>
					</div>
					<div className={classes.image}>
						<img
							src={process.env.PUBLIC_URL + "/assets/images/dice6.PNG"}
							alt='dice'
						/>
					</div>
				</div>
				<div>
					<button>Roll Dice</button>
				</div>
				<div className={classes.right}>
					<div className={classes.info}>
						<h2>Player 1</h2>
						<p>0</p>
					</div>
					<div className={classes.image}>
						<img
							src={process.env.PUBLIC_URL + "/assets/images/dice6.PNG"}
							alt='dice'
						/>
					</div>
				</div>
			</section>
			<footer>@2022</footer>
		</main>
	);
};

export default DiceGame;
