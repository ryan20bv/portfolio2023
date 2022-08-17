import React from "react";

import greenMP3 from "../audio/green.mp3";
import redMP3 from "../audio/red.mp3";
import yellowMP3 from "../audio/yellow.mp3";
import blueMP3 from "../audio/blue.mp3";
import wrongMp3 from "../audio/wrong.mp3";
import classes from "../styles/simon.module.css";
const useSimon = () => {
	const playSound = (type) => {
		switch (type) {
			case "green":
				let greenAudio = new Audio(greenMP3);
				greenAudio.play();
				break;
			case "red":
				let redAudio = new Audio(redMP3);
				redAudio.play();
				break;
			case "yellow":
				let yellowAudio = new Audio(yellowMP3);
				yellowAudio.play();
				break;
			case "blue":
				let blueAudio = new Audio(blueMP3);
				blueAudio.play();
				break;
			case "wrong":
				let wrongAudio = new Audio(wrongMp3);
				wrongAudio.play();
				break;
			default:
				break;
		}
	};
	const togglePressedClassHandler = (item) => {
		item.target.classList.toggle(`${classes.pressed}`);
	};

	const mouseDownHandler = (e) => {
		playSound(e.target.id);
		togglePressedClassHandler(e);
	};
	const mouseUpHandler = (e) => {
		togglePressedClassHandler(e);
	};

	return { mouseDownHandler, mouseUpHandler };
};

export default useSimon;
