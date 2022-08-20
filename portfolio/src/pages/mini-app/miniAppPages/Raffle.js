import React from "react";

import classes from "./assets/styles/raffle.module.css";
const SliderOne = () => {
	return (
		<main className={classes.raffle}>
			<section className={classes.header}>
				<div className={classes.wrapper}>
					<form action='' className={classes.form}>
						<section className={classes.form_div}>
							<label htmlFor='number'>Select a number:</label>
							<div>
								<input type='text' id='number' />
								<select name='select_number' id='select_number'>
									<option value='1'>1</option>
									<option value='2'>2</option>
									<option value='3'>3</option>
									<option value='4'>4</option>
									<option value='5'>5</option>
								</select>
							</div>
						</section>
						<section className={classes.form_div}>
							<label htmlFor='name'>Name:</label>
							<input type='text' id='name' />
						</section>
						<button>Confirm</button>
					</form>
				</div>
			</section>
		</main>
	);
};

export default SliderOne;
