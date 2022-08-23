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
		isEditing,
		valueIsValid,
		isDoneItemHandler,
		inputChangeHandler,
		clearInputHandler,
		addTodoHandler,
		deleteTodoHandler,
		isEditingHandler,
		cancelEditingHandler,
	} = useTodo((inputValue) => inputValue.trim() !== "");
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
	const editTaskHandler = (itemToEdit) => {
		// console.log(itemToEditId);
		isEditingHandler(itemToEdit);
	};
	const cancelEditHandler = () => {
		cancelEditingHandler();
	};
	return (
		<main className={classes.todo}>
			<section className={classes.header}>
				<form action=''>
					<section className={classes.form_left}>
						<input
							type='text'
							placeholder='add todo here'
							maxLength='30'
							onChange={inputChangeHandler}
							id='input_todo'
							value={inputValue}
						/>
					</section>
					<section className={classes.form_right}>
						{isNotEmpty && (
							<div>
								<FontAwesomeIcon
									icon={solid("multiply")}
									className={classes.delete_icon}
									onClick={clearInputHandler}
								/>
							</div>
						)}

						{valueIsValid && !isEditing && (
							<div>
								<FontAwesomeIcon
									icon={solid("plus-circle")}
									className={classes.plus_circle}
									onClick={submitHandler}
								/>
							</div>
						)}

						{isEditing && (
							<div className={classes.editing_icon}>
								<section>
									<FontAwesomeIcon
										icon={solid("cancel")}
										className={classes.cancel}
										onClick={cancelEditHandler}
									/>
								</section>
								{valueIsValid && (
									<section>
										<FontAwesomeIcon
											icon={solid("circle-check")}
											className={classes.circle_check}
										/>
									</section>
								)}
							</div>
						)}
					</section>
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
									onEditing={editTaskHandler}
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
