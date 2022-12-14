import React, { useState } from "react";

import Nav from "./Nav";
import BurgerMenu from "./BurgerMenu";

import classes from "./scrollNav.module.css";

const ScrollNav = (props) => {
	const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState(false);

	const burgerMenuHandler = () => {
		setBurgerMenuIsOpen((prevData) => !prevData);
	};

	const optionClass = !burgerMenuIsOpen && `${classes.display}`;

	return (
		<div
			className={classes.scroll_main}
			style={{ backgroundColor: props.bgColor }}
		>
			<header>
				<img src={require("./assets/images/dog.jpeg")} alt='logo' />
				<h2>RBV</h2>
			</header>
			<h1>{props.where}</h1>
			<div className={classes.magic_nav}>
				<div
					className={`${classes.view} ${optionClass}`}
					style={{ backgroundColor: props.bgColor }}
				>
					<Nav
						head='About'
						// fontFamily='Great Vibes'
						headColor='white'
						listColor='black'
						addedClass={classes.scroll_nav}
					/>
				</div>
				<BurgerMenu
					burgerMenuIsOpen={burgerMenuIsOpen}
					burgerMenuHandler={burgerMenuHandler}
					where={props.where}
				/>

				{/* <section
					className={`${classes.burger_menu} ${burgerClass}`}
					onClick={burgerMenuHandler}
				>
					<div className={classes.bar1}></div>
					<div className={classes.bar2}></div>
					<div className={classes.bar3}></div>
				</section> */}
			</div>
		</div>
	);
};

export default ScrollNav;
