import React from "react";

import classes from "./assets/styles/todoList.module.css";
const SliderOne = () => {
	return (
		<main className={classes.raffle}>
			<section className={classes.header}>
				<form action=''>
					<input type='text' placeholder='add todo here' />
					<button className={classes.form_btn} id='add_btn'>
						Add
					</button>
					<button className={classes.form_btn} id='cancel_btn'>
						Cancel
					</button>
				</form>
			</section>
			<section className={classes.content}>content</section>
		</main>
	);
};

export default SliderOne;
