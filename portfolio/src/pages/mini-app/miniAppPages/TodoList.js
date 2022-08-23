import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	solid,
	regular,
	brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import TodoListItem from "./todoListPages/todoListItem";

import useTodo from "./assets/hooks/use-todo";

import classes from "./assets/styles/todoList.module.css";
const SliderOne = () => {
	const {
		listArray,
		isNotEmpty,
		inputValue,
		isDoneItemHandler,
		inputChangeHandler,
		clearInputHandler,
		addTodoHandler,
		deleteTodoHandler,
	} = useTodo(classes);

	const submitHandler = (e) => {
		e.preventDefault();
		addTodoHandler();
	};
	const checkboxStatusHandler = (e) => {
		const selectedItemId = e.target.id;
		isDoneItemHandler(selectedItemId);
	};
	const deleteTaskHandler = (itemToDeleteId) => {
		// const itemToDeleteId = e.target.id;
		deleteTodoHandler(itemToDeleteId);
	};

	return (
		<main className={classes.todo}>
			<section className={classes.header}>
				<form action='' onSubmit={submitHandler}>
					<input
						type='text'
						placeholder='add todo here'
						maxLength='30'
						onChange={inputChangeHandler}
						id='input_todo'
						value={inputValue}
					/>
					{isNotEmpty && (
						<div>
							<FontAwesomeIcon
								icon={solid("multiply")}
								className={classes.delete_icon}
								onClick={clearInputHandler}
							/>
						</div>
					)}

					<button>
						<FontAwesomeIcon
							icon={solid("plus-circle")}
							className={classes.FA_icon}
						/>
					</button>
				</form>
			</section>
			<section className={classes.content}>
				{listArray.length === 0 && (
					<p className={classes.listEmpty}>Todo Empty</p>
				)}
				{listArray.length > 0 && (
					<ul className={classes.wrapper}>
						{listArray.map((todo) => {
							return (
								<TodoListItem
									classes={classes}
									key={todo.id}
									todo={todo}
									onStrike={checkboxStatusHandler}
									onDelete={deleteTaskHandler}
								/>
							);
						})}
					</ul>
				)}
			</section>
		</main>
	);
};

export default SliderOne;
