import { faListSquares } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useReducer, useEffect } from "react";

const array = [
	{
		id: 101,
		task: "Exercise",
		isDone: false,
	},
	{
		id: 102,
		task: "Eat",
		isDone: false,
	},
	{
		id: 103,
		task: "Study",
		isDone: true,
	},
];

const initialState = {
	listArray: [],
	inputValue: "",
	isNotEmpty: false,
};

const actionType = {
	INITIATE_LIST: "INITIATE_LIST",
	CHANGE_INPUT_VALUE: "CHANGE_INPUT_VALUE",
	CHECK_INPUT: "CHECK_INPUT",
	ADD_TODO: "ADD_TODO",
};

const todoReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case actionType.INITIATE_LIST:
			return { ...state, listArray: [...payload.array] };
		case actionType.CHANGE_INPUT_VALUE:
			return { ...state, inputValue: payload.enteredValue };
		case actionType.CHECK_INPUT:
			return { ...state, isNotEmpty: payload.status };
		case actionType.ADD_TODO:
			const newArray = [...state.listArray, payload.newTodo];
			return { ...state, listArray: newArray };
		default:
			return state;
	}
};

const useTodo = () => {
	const [todoState, dispatchTodo] = useReducer(todoReducer, initialState);

	// const [inputValue, setInputValue] = useState("");
	// const [isNotEmpty, setIsNotEmpty] = useState(false);

	useEffect(() => {
		dispatchTodo({ type: actionType.INITIATE_LIST, payload: { array } });
	}, []);

	const clearInputHandler = () => {
		dispatchTodo({
			type: actionType.CHANGE_INPUT_VALUE,
			payload: { enteredValue: "" },
		});
		dispatchTodo({
			type: actionType.CHECK_INPUT,
			payload: { status: false },
		});
	};
	const inputChangeHandler = (e) => {
		let enteredValue = e.target.value;

		if (enteredValue.trim() !== "") {
			dispatchTodo({ type: actionType.CHECK_INPUT, payload: { status: true } });
		} else {
			dispatchTodo({
				type: actionType.CHECK_INPUT,
				payload: { status: false },
			});
		}

		dispatchTodo({
			type: actionType.CHANGE_INPUT_VALUE,
			payload: { enteredValue },
		});
	};

	const strikeItemHandler = (e) => {
		console.log(e);
	};
	const addTodoHandler = (e) => {
		e.preventDefault();
		const newTodo = {
			id: Math.random(),
			task: todoState.inputValue,
			isDone: false,
		};
		dispatchTodo({
			type: actionType.ADD_TODO,
			payload: { newTodo: newTodo },
		});
		clearInputHandler();
	};

	return {
		listArray: todoState.listArray,
		inputValue: todoState.inputValue,
		isNotEmpty: todoState.isNotEmpty,
		strikeItemHandler,
		inputChangeHandler,
		clearInputHandler,
		addTodoHandler,
	};
};

export default useTodo;
