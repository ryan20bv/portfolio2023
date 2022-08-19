import React, { useCallback, useReducer } from "react";

import greenMP3 from "../audio/green.mp3";
import redMP3 from "../audio/red.mp3";
import yellowMP3 from "../audio/yellow.mp3";
import blueMP3 from "../audio/blue.mp3";
import wrongMp3 from "../audio/wrong.mp3";
import classes from "../styles/simon.module.css";
import { useEffect } from "react";

const initialState = {
	level: 1,
	playerArray: [],
	computerArray: ["green", "red", "yellow", "blue"],
	index: 0,
	timerValue: 5,
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
	UPDATE_LEVEL: "UPDATE_LEVEL",
	RESET_LEVEL: "RESET_LEVEL",
	UPDATE_TIMER: "UPDATE_TIMER",
	RESET_TIMER: "RESET_TIMER",
	GET_TIMER_ID: "GET_TIMER_ID",
	RESET_TIMER_ID: "RESET_TIMER_ID",
};

const simonReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case actionCategories.UPDATE_LEVEL:
			const newLevel = state.level + 1;
			return { ...state, level: newLevel };
		case actionCategories.RESET_LEVEL:
			return { ...state, level: 1 };
		case actionCategories.GAME_STATUS:
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
		case actionCategories.UPDATE_TIMER:
			const newTime = state.timerValue - 1;
			return { ...state, timerValue: newTime };
		case actionCategories.RESET_TIMER:
			return { ...state, timerValue: 5 };
		case actionCategories.GET_TIMER_ID:
			return { ...state, globalTimerId: payload.timerId };
		case actionCategories.RESET_TIMER_ID:
			return { ...state, globalTimerId: null };
		default:
			return state;
	}
};

const useSimon = (green, red, yellow, blue, wrong, timer) => {
	const [simonState, dispatchSimon] = useReducer(simonReducer, initialState);
	const { level, gameStatus, computerArray, index, globalTimerId, timerValue } =
		simonState;

	const clearTimerHandler = (id) => {
		clearInterval(id);

		dispatchSimon({ type: actionCategories.RESET_TIMER });
	};

	const timerHandler = () => {
		clearTimerHandler(globalTimerId);
		timer.current.classList.remove(`${classes.notVisible}`);
		const timerId = setInterval(() => {
			dispatchSimon({ type: actionCategories.UPDATE_TIMER });
		}, 1000);
		dispatchSimon({
			type: actionCategories.GET_TIMER_ID,
			payload: { timerId: timerId },
		});
	};
	useEffect(() => {
		clearTimerHandler(globalTimerId);
	}, [level]);

	useEffect(() => {
		if (timerValue <= 0) {
			wrongAnswerHandler();
		}
	}, [timerValue]);

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
			case "wrong":
			default:
				wrong.current.classList.add(`${classes.wrong}`);
				let wrongAudio = new Audio(wrongMp3);
				wrongAudio.play();
				break;
		}
	};

	const samplePlay = useCallback(() => {
		let i = 0;
		function myLoop() {
			setTimeout(function () {
				playSound(simonState.computerArray[i]);
				i++;
				if (i < simonState.computerArray.length) {
					myLoop();
				} else {
					timer.current.classList.add(`${classes.notVisible}`);
					return;
				}
			}, 500);
		}
		myLoop();
	}, []);

	const compareBothArray = (color) => {
		let copyOfLevel = level;
		if (color === computerArray[index]) {
			playSound(color);
			dispatchSimon({ type: actionCategories.UPDATE_INDEX });

			clearTimerHandler(globalTimerId);
			setTimeout(() => {
				timerHandler();
			}, 200);

			if (index === computerArray.length - 1) {
				copyOfLevel++;
				setTimeout(() => {
					dispatchSimon({ type: actionCategories.UPDATE_LEVEL });
					computerTurnHandler(copyOfLevel);
				}, 1000);
			}
		} else {
			// this is for wrong
			wrongAnswerHandler();
			return;
		}
	};

	const playerClickHandler = (e) => {
		if (gameStatus.playerTurn) {
			dispatchSimon({
				type: actionCategories.UPDATE_PLAYER_ARRAY,
				payload: { item: e.target.id },
			});
			compareBothArray(e.target.id);
		}
	};

	const computerRandomHandler = (passedLevel) => {
		let loop = 1;

		const selectionArray = ["green", "red", "yellow", "blue"];
		const computerLoop = () => {
			if (loop <= passedLevel) {
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
				playerTurnHandler();
			}
		};
		computerLoop();
	};
	const resetGameHandler = () => {
		setTimeout(() => {
			changeGameStatus("RESET_GAME");
			wrong.current.classList.remove(`${classes.wrong}`);
		}, 3000);
	};

	const wrongAnswerHandler = () => {
		changeGameStatus("GAME_OVER");
		playSound("wrong");
		resetGameHandler();
	};

	const playerTurnHandler = () => {
		setTimeout(() => {
			timerHandler();
		}, 200);
		changeGameStatus("PLAYER_TURN");
	};

	const computerTurnHandler = (passedLevel) => {
		clearTimerHandler(globalTimerId);
		resetArrayHandler();
		changeGameStatus("COMPUTER_TURN");
		timer.current.classList.add(`${classes.notVisible}`);
		setTimeout(() => {
			computerRandomHandler(passedLevel);
		}, 1000);
	};

	const resetArrayHandler = () => {
		dispatchSimon({ type: actionCategories.RESET_ARRAY });
		dispatchSimon({ type: actionCategories.RESET_INDEX });
	};

	const changeGameStatus = (status) => {
		switch (status) {
			case "GAME_OVER":
				dispatchSimon({
					type: actionCategories.GAME_STATUS,
					payload: {
						gameStatus: {
							isGameOver: true,
							playerTurn: false,
							computerTurn: false,
						},
					},
				});
				break;
			case "PLAYER_TURN":
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

				break;
			case "COMPUTER_TURN":
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

				break;
			case "RESET_GAME":
				dispatchSimon({ type: actionCategories.RESET_LEVEL });
				dispatchSimon({
					type: actionCategories.GAME_STATUS,
					payload: {
						gameStatus: {
							isGameOver: false,
							playerTurn: false,
							computerTurn: false,
						},
					},
				});

				break;
			default:
				break;
		}
	};

	const playStartHandler = () => {
		computerTurnHandler(level);
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
