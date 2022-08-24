import React from "react";

import PizzaNav from "./pizzaComponents/pizzaNav";
import classes from "./assets/styles/pizzalated.module.css";
const Pizzalated = () => {
	return (
		<main className={classes.pizzalated}>
			<header>
				<PizzaNav classes={classes} />
			</header>
			<section>content</section>
		</main>
	);
};

export default Pizzalated;
