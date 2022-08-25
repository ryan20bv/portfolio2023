import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	solid,
	regular,
	brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import PizzaNav from "./pizzaComponents/PizzaNav";
import PizzaContent from "./pizzaComponents/PizzaContent";

import classes from "./assets/styles/pizzalated.module.css";
const Pizzalated = () => {
	return (
		<main className={classes.pizzalated}>
			<header>
				<PizzaNav classes={classes} />
			</header>
			<section>
				<div className={classes.arrow_left}>
					<FontAwesomeIcon icon={solid("chevron-circle-left")} />
				</div>
				<div className={classes.pizza_wrapper}>
					<PizzaContent classes={classes} />
				</div>

				<div className={classes.arrow_right}>
					<FontAwesomeIcon icon={solid("chevron-circle-right")} />
				</div>
			</section>
			<footer>@2022</footer>
		</main>
	);
};

export default Pizzalated;
