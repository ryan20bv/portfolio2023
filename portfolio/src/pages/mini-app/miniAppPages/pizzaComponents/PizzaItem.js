import React from "react";

const PizzaItem = ({ classes }) => {
	return (
		<div className={classes.card}>
			<img
				src='https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_623344781.jpg.webp'
				alt='content 1'
			/>
			<div className={classes.info}>
				<h1>Cheesy</h1>
				<p>$ 3.15</p>
			</div>
			<div>
				<form action=''>
					<div>
						<label htmlFor=''>Qty:</label>
						<div className={classes.btn}>-</div>
						<input type='text' defaultValue='1' max='5' />
						<div className={classes.btn}>+</div>
					</div>

					<button type='submit' className={classes.btn_submit}>
						Add to Cart
					</button>
				</form>
			</div>
		</div>
	);
};

export default PizzaItem;
