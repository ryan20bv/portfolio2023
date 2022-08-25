import React, { useRef } from "react";
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
	const pizzaWrapperRef = useRef();

	const leftArrowHandler = () => {
		if (pizzaWrapperRef.current.scrollLeft === 0) {
			return;
		}
		pizzaWrapperRef.current.scrollLeft -= 390;
	};
	const rightArrowHandler = () => {
		if (pizzaWrapperRef.current.scrollLeft >= 1200) {
			return;
		}
		pizzaWrapperRef.current.scrollLeft += 390;
	};

	return (
		<main className={classes.pizzalated} id='backdrop-root'>
			<header>
				<PizzaNav classes={classes} />
			</header>
			<section>
				<div className={classes.arrow_left}>
					<FontAwesomeIcon
						icon={solid("chevron-circle-left")}
						onClick={leftArrowHandler}
					/>
				</div>
				<div className={classes.pizza_wrapper} ref={pizzaWrapperRef}>
					<PizzaContent classes={classes} />
				</div>

				<div className={classes.arrow_right}>
					<FontAwesomeIcon
						icon={solid("chevron-circle-right")}
						onClick={rightArrowHandler}
					/>
				</div>
			</section>
			<footer>
				<p>
					Thank you for the pictures{" "}
					<b>
						<a
							href='https://www.ezcater.com/lunchrush/office/most-popular-types-of-pizza-around-country/'
							target='_blank'
						>
							EZCATER
						</a>
					</b>
				</p>
				<p>
					Sample only - Please visit the full-page{" "}
					<b>
						<a href='http://'>Pizzalated</a>
					</b>{" "}
					@2022
				</p>
			</footer>
		</main>
	);
};

export default Pizzalated;
