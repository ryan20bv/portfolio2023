import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	solid,
	regular,
	brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
const PizzaNav = ({ classes }) => {
	return (
		<nav>
			<h1 className={classes.logo}>Pizzalated</h1>
			<div className={classes.input_div}>
				<div className={`${classes.icon} ${classes.search}`}>
					<FontAwesomeIcon icon={solid("search")} />
				</div>

				<input type='text' placeholder='search here...' />
				<div className={`${classes.icon} ${classes.clear}`}>
					<FontAwesomeIcon icon={solid("times-circle")} />
				</div>
			</div>
			<div className={classes.cart_div}>
				<div className={`${classes.icon} ${classes.cart}`}>
					<FontAwesomeIcon icon={solid("shopping-cart")} />
				</div>
				<span>3</span>
			</div>
		</nav>
	);
};

export default PizzaNav;
