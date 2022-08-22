import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	solid,
	regular,
	brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
// import { faTrashAlt as _faTrashAlt } from "@fortawesome/free-regular-svg-icons/faTrashAlt";
// import { faEdit as _faEdit } from "@fortawesome/free-regular-svg-icons/faEdit";
// import { faPlusSquare as _faPlusSquare } from "@fortawesome/free-regular-svg-icons/faPlusSquare]";

import classes from "./assets/styles/todoList.module.css";
const SliderOne = () => {
	return (
		<main className={classes.raffle}>
			<section className={classes.header}>
				<form action=''>
					<input type='text' placeholder='add todo here' maxLength='30' />
					<div>
						<FontAwesomeIcon
							icon={solid("multiply")}
							className={classes.delete_icon}
						/>
					</div>

					{/* <button className={classes.form_btn} id='add_btn'>
						Add
					</button> */}
					<div>
						<FontAwesomeIcon
							icon={solid("plus-circle")}
							className={classes.FA_icon}
						/>
					</div>

					{/* <button className={classes.form_btn} id='cancel_btn'>
						Cancel
					</button> */}
				</form>
			</section>
			<section className={classes.content}>
				<ul className={classes.wrapper}>
					<li>
						<div>
							<input type='checkbox' name='' id='' />
							<p>211111111111111111111111111111</p>
						</div>
						<div>
							<FontAwesomeIcon
								icon={regular("edit")}
								className={classes.FA_icon}
							/>

							<FontAwesomeIcon
								icon={regular("trash-alt")}
								className={classes.FA_icon}
								// bounce
							/>
						</div>
					</li>
					<li>
						<div>
							<input type='checkbox' name='' id='' />
							<p>Content 1</p>
						</div>
						<div>
							<FontAwesomeIcon
								icon={regular("edit")}
								className={classes.FA_icon}
								// bounce
							/>
							<FontAwesomeIcon
								icon={regular("trash-alt")}
								className={classes.FA_icon}
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
