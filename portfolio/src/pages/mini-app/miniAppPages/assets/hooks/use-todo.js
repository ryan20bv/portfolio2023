import { faListSquares } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useReducer, useEffect } from "react";

const array = [
	{
		id: "101",
		task: "Exercise",
		isDone: false,
	},
	{
		id: "102",
		task: "Eat",
		isDone: false,
	},
	{
		id: "103",
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
	IS_DONE_STATUS: "IS_DONE_STATUS",
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
		case actionType.IS_DONE_STATUS:
			const searchedIndex = state.listArray.findIndex((item) => {
				return item.id === payload.id;
			});
			let searchedItem = state.listArray[searchedIndex];
			searchedItem = {
				id: searchedItem.id,
				task: searchedItem.task,
				isDone: searchedItem.isDone ? false : true,
			};
			let updatedArray = [...state.listArray];
			updatedArray[searchedIndex] = searchedItem;
			return { ...state, listArray: updatedArray };

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
		dispatchTodo({
			type: actionType.IS_DONE_STATUS,
			payload: { id: e.target.id },
		});
	};
	const addTodoHandler = (e) => {
		e.preventDefault();
		const newTodo = {
			id: Math.random().toString(),
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
