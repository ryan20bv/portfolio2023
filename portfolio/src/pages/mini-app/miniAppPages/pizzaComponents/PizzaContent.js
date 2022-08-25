import React from "react";

import PizzaItem from "./PizzaItem";
const pizzaList = [
	{
		id: "101",
		img: "https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_623344781.jpg.webp",
		flavor: "Cheesy",
		price: 3.15,
	},
	{
		id: "102",
		img: "https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_570541132.jpg.webp",
		flavor: "Veggie",
		price: 3.16,
	},
	{
		id: "103",
		img: "https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_184944413.jpg.webp",
		flavor: "BBQ Chicken",
		price: 3.15,
	},
	{
		id: "104",
		img: "https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_313437680.jpg.webp",
		flavor: "Hawaiian",
		price: 3.15,
	},
	{
		id: "105",
		img: "https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_244706695.jpg.webp",
		flavor: "Supreme",
		price: 3.15,
	},
	{
		id: "106",
		img: "https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/Buffalo-Chicken-Pizza-1-1024x683.jpg.webp",
		flavor: "Buffalo",
		price: 3.15,
	},
	{
		id: "107",
		img: "https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_514457074.jpg.webp",
		flavor: "Pepperoni",
		price: 3.15,
	},
];
const PizzaContent = ({ classes }) => {
	return (
		<div className={classes.content}>
			{pizzaList.map((pizza) => {
				return <PizzaItem classes={classes} key={pizza.id} pizza={pizza} />;
			})}
		</div>
	);
};

export default PizzaContent;
