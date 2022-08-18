import React, { useState } from "react";

import greenMP3 from "../audio/green.mp3";
import redMP3 from "../audio/red.mp3";
import yellowMP3 from "../audio/yellow.mp3";
import blueMP3 from "../audio/blue.mp3";
import wrongMp3 from "../audio/wrong.mp3";
import classes from "../styles/simon.module.css";

const useSimon = (green, red, yellow, blue, wrong, info) => {
	const [level, setLevel] = useState(0);
	const [playerArray, setPlayerArray] = useState([]);
	const [computerArray, setComputerArray] = useState([
		"green",
		"red",
		"yellow",
		"blue",
	]);
	const [index, setIndex] = useState(0);
	const [timerValue, setTimerValue] = useState(5);
	const [isGameOver, setIsGameOver] = useState(false);
	const [playerTurn, setPlayerTurn] = useState(false);
	const [computerTurn, setComputerTurn] = useState(false);

	const samplePlay = () => {
		let i = 0;
		function myLoop() {
			setTimeout(function () {
				playSound(computerArray[i]);
				i++;
				if (i < computerArray.length) {
					myLoop();
				} else {
					return;
				}
			}, 500);
		}
		myLoop();
	};

	const playSound = (type) => {
		switch (type) {
			case "green":
				green.current.classList.add(`${classes.pressed}`);
				let greenAudio = new Audio(greenMP3);
				greenAudio.play();

				setTimeout(() => {
					green.current.classList.remove(`${classes.pressed}`);
				}, 100);
				break;
			case "red":
				red.current.classList.add(`${classes.pressed}`);
				let redAudio = new Audio(redMP3);
				redAudio.play();
				setTimeout(() => {
					red.current.classList.remove(`${classes.pressed}`);
				}, 100);
				break;
			case "yellow":
				yellow.current.classList.add(`${classes.pressed}`);
				let yellowAudio = new Audio(yellowMP3);
				yellowAudio.play();
				setTimeout(() => {
					yellow.current.classList.remove(`${classes.pressed}`);
				}, 100);
				break;
			case "blue":
				blue.current.classList.add(`${classes.pressed}`);
				let blueAudio = new Audio(blueMP3);
				blueAudio.play();
				setTimeout(() => {
					blue.current.classList.remove(`${classes.pressed}`);
				}, 100);
				break;

			default:
				wrong.current.classList.add(`${classes.wrong}`);
				let wrongAudio = new Audio(wrongMp3);
				wrongAudio.play();
				break;
		}
	};
	const compareBothArray = (color) => {
		if (color !== computerArray[index]) {
			//this is for wrong
			playSound();
			return;
		}
		playSound(color);
		setIndex((prevState) => {
			return (prevState = prevState + 1);
		});
		if (index === computerArray.length - 1) {
			setTimeout(() => {
				setPlayerTurn(false);

				playStartHandler();
			}, 500);
		}
	};
	const playerClickHandler = (e) => {
		if (playerTurn) {
			setPlayerArray((prevState) => {
				return [...prevState, e.target.id];
			});
			compareBothArray(e.target.id);
		}
	};
	let timerId = null;
	const timerHandler = () => {
		timerId = setInterval(() => {
			setTimerValue((prevState) => {
				return (prevState = prevState - 1);
			});
		}, 1000);
	};
	const clearTimerHandler = () => {
		console.log("clearTimer");
		console.log(timerId);
		clearInterval(timerId);
	};

	const computerClickHandler = () => {
		let loop = 1;
		const selectionArray = ["green", "red", "yellow", "blue"];
		const computerLoop = () => {
			if (loop <= level) {
				const randomNum = Math.floor(Math.random() * selectionArray.length);
				const selectedColor = selectionArray[randomNum];
				setComputerArray((prevState) => {
					return [...prevState, selectedColor];
				});
				loop++;
				playSound(selectedColor);
				setTimeout(() => {
					computerLoop();
				}, 1000);
			} else {
				setComputerTurn(false);
				setPlayerTurn(true);
				// withOutTimer first
				// timerHandler();
			}
		};
		computerLoop();
	};

	const playStartHandler = () => {
		setLevel((prevState) => {
			return (prevState = prevState + 1);
		});
		setComputerArray([]);
		setIndex(0);
		setComputerTurn(true);
		setTimeout(() => {
			computerClickHandler();
		}, 500);

		console.log("here");
		// info.current.classList.add(`${classes.visible}`);
		// setTimeout(() => {
		// 	samplePlay();
		// }, 200);
	};

	return {
		samplePlay,
		playStartHandler,
		playerClickHandler,
		level,
		computerArray,
		index,
		isGameOver,
		playerTurn,
		computerTurn,
		clearTimerHandler,
		timerValue,
	};
};

export default useSimon;
