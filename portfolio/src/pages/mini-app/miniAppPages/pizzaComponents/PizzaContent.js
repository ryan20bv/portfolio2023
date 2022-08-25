import React from "react";

import PizzaItem from "./PizzaItem";
const PizzaContent = ({ classes }) => {
	return (
		<div className={classes.content}>
			<PizzaItem classes={classes} />
		</div>
	);
};

export default PizzaContent;
