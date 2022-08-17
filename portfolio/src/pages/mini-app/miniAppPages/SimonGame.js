import React from "react";
import useSimon from "./assets/hooks/use-simon";
import classes from "./assets/styles/simon.module.css";
const SimonGame = () => {
	const { mouseDownHandler, mouseUpHandler } = useSimon();
	return (
		<main className={classes.simon}>
			<section className={classes.first}>
				<h1>SIMON</h1>
			</section>
			<section className={classes.playArea}>
				<button className={classes.start}>Press To Start</button>
				<div className={classes.wrapper}>
					<div className={classes.info}>score</div>
					<div className={classes.playDiv}>
						<div
							className={`${classes.button} `}
							id='green'
							onMouseDown={mouseDownHandler}
							onMouseUp={mouseUpHandler}
						></div>
						<div
							className={classes.button}
							id='red'
							onMouseDown={mouseDownHandler}
							onMouseUp={mouseUpHandler}
						></div>
						<div
							className={classes.button}
							id='yellow'
							onMouseDown={mouseDownHandler}
							onMouseUp={mouseUpHandler}
						></div>
						<div
							className={classes.button}
							id='blue'
							onMouseDown={mouseDownHandler}
							onMouseUp={mouseUpHandler}
						></div>
					</div>
				</div>

				<footer>@2022</footer>
			</section>
			<section className={classes.last}>
				<h1>GAME</h1>
			</section>
		</main>
	);
};

export default SimonGame;
