import React from "react";
import classes from "./burgerMenu.module.css";

const BurgerMenu = (props) => {
	const burgerClass = props.burgerMenuIsOpen && `${classes.change}`;
	return (
		<section
			className={`${classes.burger_menu} ${burgerClass}`}
			onClick={props.burgerMenuHandler}
		>
			<div className={classes.bar1}></div>
			<div className={classes.bar2}></div>
			<div className={classes.bar3}></div>
		</section>
	);
};

export default BurgerMenu;
