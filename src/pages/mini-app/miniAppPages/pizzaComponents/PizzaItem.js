import React from "react";

const PizzaItem = ({ classes, pizza }) => {
	return (
		<div className={classes.card}>
			<img src={pizza.img} alt={pizza.flavor} />

			<div className={classes.info}>
				<h1>{pizza.flavor}</h1>
				<p>$ {pizza.price}</p>
			</div>

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
	);
};

export default PizzaItem;
