import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	solid,
	regular,
	brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

const TodoListItem = ({ classes, todo, onStrike, onDelete }) => {
	// console.log(todo);
	const classIfDone = todo.isDone ? `${classes.strike}` : "";
	return (
		<li>
			<div>
				<input
					type='checkbox'
					name=''
					id={todo.id}
					onChange={onStrike}
					checked={todo.isDone}
				/>
				<p className={classIfDone}>{todo.task}</p>
			</div>
			<div>
				{!todo.isDone && (
					<FontAwesomeIcon icon={regular("edit")} className={classes.FA_icon} />
				)}
				<FontAwesomeIcon
					icon={regular("trash-alt")}
					className={classes.FA_icon}
					// bounce
					onClick={() => onDelete(todo.id)}
				/>
			</div>
		</li>
	);
};

export default TodoListItem;
