import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
const PizzaNav = ({ classes, updateSearchValue }) => {
	const [inputValue, setInputValue] = useState("");

	const changeHandler = (e) => {
		if (e.target.value.length > 12) {
			return;
		}
		setInputValue(e.target.value);
		updateSearchValue(e.target.value);
	};
	const clearInputHandler = () => {
		setInputValue("");
		updateSearchValue("");
	};

	return (
		<nav>
			<h1 className={classes.logo}>Pizzalated</h1>
			<div className={classes.input_div}>
				{/* <div className={`${classes.icon} ${classes.search}`}>
					<FontAwesomeIcon icon={solid("search")} />
				</div> */}

				<input
					type='text'
					placeholder='search here...'
					value={inputValue}
					onChange={changeHandler}
				/>
				{inputValue.trim("").length > 0 && (
					<div className={`${classes.icon} ${classes.clear}`}>
						<FontAwesomeIcon
							icon={solid("times-circle")}
							onClick={clearInputHandler}
						/>
					</div>
				)}
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
