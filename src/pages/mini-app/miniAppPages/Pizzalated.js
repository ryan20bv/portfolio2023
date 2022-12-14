import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import PizzaNav from "./pizzaComponents/pizzaNav";
import { useWindowSize } from "../../../windowSize/use-windowSize";
import PizzaContent from "./pizzaComponents/PizzaContent";

import classes from "./assets/styles/pizzalated.module.css";
const Pizzalated = () => {
	const pizzaWrapperRef = useRef();
	const [windowWidth] = useWindowSize();
	const [searchValue, setSearchValue] = useState("");

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
	const isWindowAbove600 = windowWidth >= 600;
	const updateSearchValue = (value) => {
		setSearchValue(value);
	};

	return (
		<main className={classes.pizzalated} id='backdrop-root'>
			<header>
				<PizzaNav classes={classes} updateSearchValue={updateSearchValue} />
			</header>
			<section>
				{isWindowAbove600 && (
					<div className={classes.arrow_left}>
						<FontAwesomeIcon
							icon={solid("chevron-circle-left")}
							onClick={leftArrowHandler}
						/>
					</div>
				)}

				<div className={classes.pizza_wrapper} ref={pizzaWrapperRef}>
					<PizzaContent
						classes={classes}
						windowWidth={windowWidth}
						searchValue={searchValue}
					/>
				</div>
				{isWindowAbove600 && (
					<div className={classes.arrow_right}>
						<FontAwesomeIcon
							icon={solid("chevron-circle-right")}
							onClick={rightArrowHandler}
						/>
					</div>
				)}
			</section>
			<footer>
				<p>
					Pictures from{" "}
					<b>
						<a
							href='https://www.ezcater.com/lunchrush/office/most-popular-types-of-pizza-around-country/'
							target='_blank'
							rel='noreferrer'
						>
							EZCATER
						</a>
					</b>
				</p>
				<p>
					Full-page{" "}
					<b>
						<a
							href='https://pizzalated-efb81.web.app/'
							target='_blank'
							rel='noreferrer'
						>
							Pizzalated
						</a>
					</b>{" "}
					@2022
				</p>
			</footer>
		</main>
	);
};

export default Pizzalated;
