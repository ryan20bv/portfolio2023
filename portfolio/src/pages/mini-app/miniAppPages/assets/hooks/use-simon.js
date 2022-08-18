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
	GAME_STATUS: "GAME_STATUS",
	UPDATE_COMPUTER_ARRAY: "UPDATE_COMPUTER_ARRAY",
	UPDATE_PLAYER_ARRAY: "UPDATE_PLAYER_ARRAY",
	RESET_ARRAY: "RESET_ARRAY",
	UPDATE_INDEX: "UPDATE_INDEX",
	RESET_INDEX: "RESET_INDEX",
};

const simonReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case actionCategories.GAME_STATUS:
			console.log("start");
			return { ...state, gameStatus: payload.gameStatus };
		case actionCategories.RESET_ARRAY:
			return { ...state, computerArray: [], playerArray: [] };
		case actionCategories.UPDATE_COMPUTER_ARRAY:
			const compArray = [...state.computerArray, payload.item];
			return { ...state, computerArray: compArray };
		case actionCategories.UPDATE_PLAYER_ARRAY:
			const playArray = [...state.playerArray, payload.item];
			return { ...state, playerArray: playArray };
		case actionCategories.UPDATE_INDEX:
			const newIndex = state.index + 1;
			return { ...state, index: newIndex };
		case actionCategories.RESET_INDEX:
			return { ...state, index: 0 };
		default:
			return state;
	}
};

const useSimon = (green, red, yellow, blue, wrong, info) => {
	const [simonState, dispatchSimon] = useReducer(simonReducer, initialState);
	console.log("comp", simonState.computerArray);
	console.log("play", simonState.playerArray);
	console.log("index", simonState.index);
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
	const compareBothArray = (color) => {
		const { computerArray, index } = simonState;
		if (color !== computerArray[index]) {
			console.log("wrong Color");
			// this is for wrong
			// wrongAnswerHandler();
			return;
		}
		playSound(color);
		dispatchSimon({ type: actionCategories.UPDATE_INDEX });

		if (index === computerArray.length - 1) {
			computerTurnHandler();
		}
	};

	const playerClickHandler = (e) => {
		if (simonState.gameStatus.playerTurn) {
			console.log("player turn");
			dispatchSimon({
				type: actionCategories.UPDATE_PLAYER_ARRAY,
				payload: { item: e.target.id },
			});
			compareBothArray(e.target.id);
		}
	};
	const playerTurnHandler = () => {
		dispatchSimon({
			type: actionCategories.GAME_STATUS,
			payload: {
				gameStatus: {
					isGameOver: false,
					playerTurn: true,
					computerTurn: false,
				},
			},
		});
	};

	const computerRandomHandler = () => {
		let loop = 1;
		const selectionArray = ["green", "red", "yellow", "blue"];
		const computerLoop = () => {
			if (loop <= simonState.level) {
				const randomNum = Math.floor(Math.random() * selectionArray.length);
				const selectedColor = selectionArray[randomNum];
				dispatchSimon({
					type: actionCategories.UPDATE_COMPUTER_ARRAY,
					payload: { item: selectedColor },
				});
				loop++;
				playSound(selectedColor);
				setTimeout(() => {
					computerLoop();
				}, 1000);
			} else {
				console.log("playerTurn");
				playerTurnHandler();
			}
		};
		computerLoop();
	};

	const computerTurnHandler = () => {
		resetArrayHandler();
		dispatchSimon({
			type: actionCategories.GAME_STATUS,
			payload: {
				gameStatus: {
					isGameOver: false,
					playerTurn: false,
					computerTurn: true,
				},
			},
		});

		setTimeout(() => {
			computerRandomHandler();
		}, 1000);
	};
	const resetArrayHandler = () => {
		dispatchSimon({ type: actionCategories.RESET_ARRAY });
		dispatchSimon({ type: actionCategories.RESET_INDEX });
	};

	const playStartHandler = () => {
		// resetArrayHandler();

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
		playerClickHandler,
	};
};

export default useSimon;
