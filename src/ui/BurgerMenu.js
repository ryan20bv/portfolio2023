import React from "react";
import classes from "./burgerMenu.module.css";

const BurgerMenu = (props) => {
	const burgerClass = props.burgerMenuIsOpen && `${classes.change}`;
	const addedClass = props.where === "About" && "black";
	return (
		<section
			className={`${classes.burger_menu} ${burgerClass}`}
			onClick={props.burgerMenuHandler}
		>
			<div
				className={classes.bar1}
				style={{ backgroundColor: addedClass }}
			></div>
			<div
				className={classes.bar2}
				style={{ backgroundColor: addedClass }}
			></div>
			<div
				className={classes.bar3}
				style={{ backgroundColor: addedClass }}
			></div>
		</section>
	);
};

export default BurgerMenu;
