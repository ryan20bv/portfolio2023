import React, { useReducer } from "react";

import greenMP3 from "../audio/green.mp3";
import redMP3 from "../audio/red.mp3";
import yellowMP3 from "../audio/yellow.mp3";
import blueMP3 from "../audio/blue.mp3";
import wrongMp3 from "../audio/wrong.mp3";
import classes from "../styles/simon.module.css";

const initialState = {
	level: 2,
	playerArray: [],
	computerArray: ["green", "red", "yellow", "blue"],
	index: 1,
	timerValue: 3,
	gameStatus: {
		isGameOver: false,
		playerTurn: false,
		computerTurn: false,
	},
	globalTimerId: null,
};
const actionCategories = {
	TEST_ACTION: "TEST_ACTION",
	GAME_START: "GAME_START",
};

const simonReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case actionCategories.GAME_START:
			console.log("start");
			return { ...state, gameStatus: payload.gameStatus };

		default:
			return state;
	}
};

const useSimon = (green, red, yellow, blue, wrong, info) => {
	const [simonState, dispatchSimon] = useReducer(simonReducer, initialState);

	/* 	const resetGameHandler = () => {
		setIsGameOver(false);
		wrong.current.classList.remove(`${classes.wrong}`);
		setPlayerArray([]);
		setLevel(1);
	};
 */
	/* 	const wrongAnswerHandler = useCallback(() => {
		setIsGameOver(true);
		setComputerTurn(false);
		setPlayerTurn(false);
		playSound();

		setTimeout(() => {
			resetGameHandler();
		}, 2000);
	}, []); */
	/* 	useEffect(() => {
		if (timerValue === 0) {
			wrongAnswerHandler();
		}
	}, [timerValue, wrongAnswerHandler]);
 */
	/* 	const clearTimerHandler = (id) => {
		console.log("clearTimer");
		console.log("out", id);
		clearInterval(id);
		setTimerValue(5);
	};
 */
	/* 	const timerHandler = () => {
		globalTimerId = setInterval(() => {
			setTimerValue((prevState) => {
				return (prevState = prevState - 1);
			});
		}, 1000);


	};
 */
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

	const samplePlay = () => {
		let i = 0;
		function myLoop() {
			setTimeout(function () {
				playSound(simonState.computerArray[i]);
				i++;
				if (i < simonState.computerArray.length) {
					myLoop();
				} else {
					return;
				}
			}, 500);
		}
		myLoop();
	};
	/* 	useEffect(() => {
		console.log(globalTimerId);
		clearTimerHandler(globalTimerId);
		if (level > 1) {
			setTimeout(() => {
				playStartHandler();
			}, 500);
		}
	}, [level]);
 */
	/* 	const compareBothArray = (color) => {
		if (color !== computerArray[index]) {
			//this is for wrong
			wrongAnswerHandler();
			return;
		}
		playSound(color);
		setIndex((prevState) => {
			return (prevState = prevState + 1);
		});
		console.log(globalTimerId);
		clearTimerHandler(globalTimerId);
		setTimeout(() => {
			console.log("timer 1");
			timerHandler();
		}, 1000);
		if (index === computerArray.length - 1) {
			console.log(globalTimerId);
			clearTimerHandler(globalTimerId);
			setLevel((prevState) => {
				return (prevState = prevState + 1);
			});
			setPlayerTurn(false);
			// setComputerTurn(true)
			// playStartHandler();
		}
	}; */
	/* 	const playerClickHandler = (e) => {
		if (playerTurn) {
			setPlayerArray((prevState) => {
				return [...prevState, e.target.id];
			});
			compareBothArray(e.target.id);
		}
	};
 */
	/* 	const computerClickHandler = () => {
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
				setTimeout(() => {
					console.log("timer 2");
					timerHandler();
				}, 1000);
			}
		};
		computerLoop();
	};
 */
	const computerTurnHandler = () => {
		dispatchSimon({
			type: actionCategories.GAME_START,
			payload: {
				gameStatus: {
					isGameOver: false,
					playerTurn: false,
					computerTurn: true,
				},
			},
		});
	};

	const playStartHandler = () => {
		computerTurnHandler();
		// setComputerArray([]);
		// setIndex(0);
		// setComputerTurn(true);
		// setTimeout(() => {
		// 	computerClickHandler();
		// }, 500);
	};

	return {
		samplePlay,
		timerValue: simonState.timerValue,
		gameLevel: simonState.level,
		gameStatus: simonState.gameStatus,
		playStartHandler,
	};
};

export default useSimon;
