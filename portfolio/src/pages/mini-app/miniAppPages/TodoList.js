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
	const array = [
		{
			id: 101,
			task: "Exercise",
		},
		{
			id: 102,
			task: "Eat",
		},
		{
			id: 103,
			task: "Study",
		},
	];
	const { listArray } = useTodo(array);
	return (
		<main className={classes.raffle}>
			<section className={classes.header}>
				<form action=''>
					<input type='text' placeholder='add todo here' maxLength='30' />
					<div>
						<FontAwesomeIcon
							icon={solid("multiply")}
							className={classes.delete_icon}
							classes={classes}
						/>
					</div>

					<div>
						<FontAwesomeIcon
							icon={solid("plus-circle")}
							className={classes.FA_icon}
						/>
					</div>
				</form>
			</section>
			<section className={classes.content}>
				<ul className={classes.wrapper}>
					{listArray.map((todo) => {
						return <TodoListItem classes={classes} key={todo.id} todo={todo} />;
					})}

					<li className={classes.strike}>
						<div>
							<input type='checkbox' name='' id='' />
							<p>123121231232131231231231231231</p>
						</div>
						<div>
							<FontAwesomeIcon
								icon={regular("edit")}
								className={classes.FA_icon}
								classes={classes}
							/>

							<FontAwesomeIcon
								icon={regular("trash-alt")}
								className={classes.FA_icon}
								classes={classes}
								// bounce
							/>
						</div>
					</li>
				</ul>
			</section>
		</main>
	);
};

export default SliderOne;
