import React, { useState } from "react";

const PizzaItem = ({ classes, pizza }) => {
	const [qtyValue, setQtyValue] = useState(1);
	const increaseHandler = () => {
		setQtyValue((prevValue) => {
			if (prevValue >= 5) {
				return 5;
			}
			return prevValue + 1;
		});
	};
	const decreaseHandler = () => {
		setQtyValue((prevValue) => {
			if (prevValue <= 1) {
				return 1;
			}
			return prevValue - 1;
		});
	};

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
					<div className={classes.btn} onClick={decreaseHandler}>
						-
					</div>
					<input type='text' value={qtyValue} max='5' readOnly />
					<div className={classes.btn} onClick={increaseHandler}>
						+
					</div>
				</div>

				<button type='submit' className={classes.btn_submit}>
					Add to Cart
				</button>
			</form>
		</div>
	);
};

export default PizzaItem;
