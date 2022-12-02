import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SliderItem from "./SliderItem";

const miniAppItems = [
	{
		src: "todoList.PNG",
		alt: "num to word",
		id: "todo",
	},
	{
		src: "simon-game.PNG",
		alt: "simon game",
		id: "simon-game",
	},
	{
		src: "Num-to-word.PNG",
		alt: "num to word",
		id: "num-to-word",
	},
	{
		src: "randomizer.PNG",
		alt: "randomizer",
		id: "randomizer",
	},
	{
		src: "dice-game.PNG",
		alt: "dice game",
		id: "dice-game",
	},
	{
		src: "pizzalated.PNG",
		alt: "num to word",
		id: "pizzalated",
	},
];

const SliderContainer = ({ classes }) => {
	const [contentId, setContentId] = useState("");
	const navigate = useNavigate();
	const clickHandler = (e) => {
		// const targetId = e.target.id;
		// console.log(e.target.id);
		if (e.target.id === "") {
			return;
		}
		setContentId(e.target.id);
	};
	useEffect(() => {
		setContentId("num-to-word");
	}, []);
	useEffect(() => {
		navigate(`/mini-app/${contentId}`);
	}, [contentId, navigate]);
	return (
		<div className={classes.slider_container} id='slider_container'>
			{miniAppItems.map((item) => {
				return (
					<SliderItem
						key={item.id}
						classes={classes}
						src={item.src}
						alt={item.alt}
						id={item.id}
						clickHandler={clickHandler}
					/>
				);
			})}

			{/* <div className={classes.slider_content}>
				<img
					src={require("./miniAppPages/assets/images/todoList.PNG")}
					alt='num to word'
					id='todo'
					onClick={(e) => clickHandler(e)}
				/>
			</div> */}
		</div>
	);
};

export default SliderContainer;
