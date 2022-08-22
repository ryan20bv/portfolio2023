import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	solid,
	regular,
	brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

const TodoListItem = ({ classes, todo }) => {
	return (
		<li>
			<div>
				<input type='checkbox' name='' id={todo.id} />
				<p>{todo.task}</p>
			</div>
			<div>
				<FontAwesomeIcon icon={regular("edit")} className={classes.FA_icon} />

				<FontAwesomeIcon
					icon={regular("trash-alt")}
					className={classes.FA_icon}
					// bounce
				/>
			</div>
		</li>
	);
};

export default TodoListItem;
