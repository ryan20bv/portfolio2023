import React, { useState, useEffect, useReducer } from "react";

const diceReducer = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case "RESET":
			return {
				leftValue: 6,
				rightValue: 6,
				leftScore: 0,
				rightScore: 0,
				message: "",
			};
		case "START":
			return {
				...state,
				message: "",
			};
		case "RANDOM_LEFT":
			return {
				...state,
				leftValue: payload.numLeft,
			};
		case "RANDOM_RIGHT":
			return {
				...state,
				rightValue: payload.numRight,
			};
		case "CHECK":
			if (state.leftValue > state.rightValue) {
				state.leftScore++;
				state.message = "Player 1 Win";
			} else if (state.leftValue < state.rightValue) {
				state.rightScore++;
				state.message = "Player 2 Win";
			} else {
				state.message = "Draw";
			}
			return { ...state };
		default:
			return state;
	}
};

const useDice = () => {
	const [diceState, dispatchDice] = useReducer(diceReducer, {
		leftValue: 6,
		rightValue: 6,
		leftScore: 0,
		rightScore: 0,
		message: "",
	});

	let intervalId = "";
	const randomNumberHandler = () => {
		const numLeft = Math.ceil(Math.random() * 6);

		const numRight = Math.ceil(Math.random() * 6);
		dispatchDice({ type: "RANDOM_LEFT", payload: { numLeft } });
		dispatchDice({ type: "RANDOM_RIGHT", payload: { numRight } });
	};

	const checkValues = () => {
		dispatchDice({ type: "CHECK" });
	};

	const rollDiceHandler = () => {
		dispatchDice({ type: "START" });
		intervalId = setInterval(() => {
			randomNumberHandler();
		}, 300);
		setTimeout(() => {
			clearInterval(intervalId);
			randomNumberHandler();
			checkValues();
		}, 3000);
	};

	const resetHandler = () => {
		dispatchDice({ type: "RESET" });
	};

	const startHandler = (e) => {
		rollDiceHandler();
	};
	return {
		startHandler: startHandler,
		leftValue: diceState.leftValue,
		rightValue: diceState.rightValue,
		leftScore: diceState.leftScore,
		rightScore: diceState.rightScore,
		message: diceState.message,
		resetHandler: resetHandler,
	};
};

export default useDice;
