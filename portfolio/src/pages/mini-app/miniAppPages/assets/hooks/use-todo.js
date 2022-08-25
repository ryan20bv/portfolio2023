import { faListSquares } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useReducer, useEffect } from "react";

const array = [
	{
		id: "101",
		task: "Exercise",
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
	isEditing: false,
	itemToEdit: {},
};

const actionType = {
	INITIATE_LIST: "INITIATE_LIST",
	CHANGE_INPUT_VALUE: "CHANGE_INPUT_VALUE",
	CHECK_INPUT: "CHECK_INPUT",
	ADD_TODO: "ADD_TODO",
	IS_DONE_STATUS: "IS_DONE_STATUS",
	DELETE_TODO: "DELETE_TODO",
	IS_EDITING_STATUS: "IS_EDITING_STATUS",
	CONFIRM_EDIT: "CONFIRM_EDIT",
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
		case actionType.DELETE_TODO:
			const reducedArray = state.listArray.filter((item) => {
				return item.id !== payload.id;
			});

			return { ...state, listArray: reducedArray };

		case actionType.IS_EDITING_STATUS:
			return { ...state, isEditing: payload.status, itemToEdit: payload.item };
		case actionType.CONFIRM_EDIT:
			const foundItemIndex = state.listArray.findIndex((item) => {
				return item.id === payload.itemToEdit.id;
			});

			const copyOfArray = [...state.listArray];
			copyOfArray[foundItemIndex] = {
				...payload.itemToEdit,
				task: state.inputValue,
			};
			return { ...state, listArray: copyOfArray };
		default:
			return state;
	}
};

const useTodo = (validateValue) => {
	const [todoState, dispatchTodo] = useReducer(todoReducer, initialState);
	const valueIsValid = validateValue(todoState.inputValue);
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

	const isDoneItemHandler = (id) => {
		dispatchTodo({
			type: actionType.IS_DONE_STATUS,
			payload: { id: id },
		});
	};
	const deleteTodoHandler = (id) => {
		dispatchTodo({ type: actionType.DELETE_TODO, payload: { id } });
	};
	const addTodoHandler = () => {
		if (todoState.listArray.length < 5) {
			const newTodo = {
				id: Math.random().toString(),
				task: todoState.inputValue,
				isDone: false,
			};
			dispatchTodo({
				type: actionType.ADD_TODO,
				payload: { newTodo: newTodo },
			});
		}

		clearInputHandler();
	};
	const isEditingHandler = (item) => {
		if (todoState.isEditing) {
			console.log("cancel first");
			return;
		}
		dispatchTodo({
			type: actionType.IS_EDITING_STATUS,
			payload: { status: true, item: item },
		});
		dispatchTodo({
			type: actionType.CHANGE_INPUT_VALUE,
			payload: { enteredValue: item.task },
		});
	};
	const cancelEditingHandler = () => {
		dispatchTodo({
			type: actionType.IS_EDITING_STATUS,
			payload: { status: false, item: {} },
		});
		dispatchTodo({
			type: actionType.CHANGE_INPUT_VALUE,
			payload: { enteredValue: "" },
		});
		dispatchTodo({
			type: actionType.CHECK_INPUT,
			payload: { status: false },
		});
	};

	const confirmEditHandler = () => {
		// console.log("confirm");
		dispatchTodo({
			type: actionType.CONFIRM_EDIT,
			payload: { itemToEdit: todoState.itemToEdit },
		});
		cancelEditingHandler();
	};

	return {
		listArray: todoState.listArray,
		inputValue: todoState.inputValue,
		isNotEmpty: todoState.isNotEmpty,
		isEditing: todoState.isEditing,
		valueIsValid,
		isDoneItemHandler,
		inputChangeHandler,
		clearInputHandler,
		addTodoHandler,
		deleteTodoHandler,
		isEditingHandler,
		cancelEditingHandler,
		confirmEditHandler,
	};
};

export default useTodo;
