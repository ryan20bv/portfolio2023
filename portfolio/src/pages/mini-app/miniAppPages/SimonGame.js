import React, { useRef, useEffect } from "react";
import useSimon from "./assets/hooks/use-simon";
import classes from "./assets/styles/simon.module.css";
const SimonGame = () => {
	const greenRef = useRef();
	const redRef = useRef();
	const yellowRef = useRef();
	const blueRef = useRef();
	const wrongRef = useRef();

	const { mouseDownHandler, mouseUpHandler, playStartHandler } = useSimon(
		greenRef,
		redRef,
		yellowRef,
		blueRef,
		wrongRef
	);

	return (
		<main className={classes.simon}>
			<section className={classes.first}>
				<h1>SIMON</h1>
			</section>
			<section className={classes.playArea}>
				<button className={classes.start} onClick={playStartHandler}>
					Press To Start
				</button>
				<div className={classes.wrapper} ref={wrongRef}>
					<div className={classes.info}>score</div>
					<div className={classes.playDiv}>
						<div
							className={classes.button}
							id='green'
							ref={greenRef}
							onMouseDown={mouseDownHandler}
							onMouseUp={mouseUpHandler}
						></div>
						<div
							className={classes.button}
							id='red'
							ref={redRef}
							onMouseDown={mouseDownHandler}
							onMouseUp={mouseUpHandler}
						></div>
						<div
							className={classes.button}
							id='yellow'
							ref={yellowRef}
							onMouseDown={mouseDownHandler}
							onMouseUp={mouseUpHandler}
						></div>
						<div
							className={classes.button}
							id='blue'
							ref={blueRef}
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
