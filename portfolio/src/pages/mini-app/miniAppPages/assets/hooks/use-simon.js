import React, { useState } from "react";

import greenMP3 from "../audio/green.mp3";
import redMP3 from "../audio/red.mp3";
import yellowMP3 from "../audio/yellow.mp3";
import blueMP3 from "../audio/blue.mp3";
import wrongMp3 from "../audio/wrong.mp3";
import classes from "../styles/simon.module.css";

const useSimon = (green, red, yellow, blue, wrong) => {
	const [playerArray, setPlayerArray] = useState([]);
	const [computerArray, setComputerArray] = useState([
		"green",
		"green",
		"red",
		"red",
		"green",
		"yellow",
		"blue",
		"wrong",
	]);
	const [index, setIndex] = useState(0);

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
	const playStartHandler = () => {
		setTimeout(() => {
			samplePlay();
		}, 200);
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
			playSound();
			return;
		}
		playSound(color);
		setIndex((prevState) => {
			return (prevState = prevState + 1);
		});
	};
	const playerClickHandler = (e) => {
		console.log(e.target.id);
		setPlayerArray((prevState) => {
			return [...prevState, e.target.id];
		});
		compareBothArray(e.target.id);
	};

	return { playStartHandler, playerClickHandler, playerArray, index };
};

export default useSimon;
