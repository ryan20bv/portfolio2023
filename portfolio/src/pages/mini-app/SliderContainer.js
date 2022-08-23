import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
			<div className={classes.slider_content}>
				<img
					src={process.env.PUBLIC_URL + "/assets/images/todoList.PNG"}
					alt='num to word'
					id='todo'
					onClick={(e) => clickHandler(e)}
				/>
			</div>
			<div className={classes.slider_content}>
				<img
					src={process.env.PUBLIC_URL + "/assets/images/simon-game.PNG"}
					alt='simon game'
					id='simon-game'
					onClick={(e) => clickHandler(e)}
				/>
			</div>
			<div className={classes.slider_content}>
				<img
					src={process.env.PUBLIC_URL + "/assets/images/Num-to-word.PNG"}
					alt='num to word'
					id='num-to-word'
					onClick={(e) => clickHandler(e)}
				/>
			</div>
			<div className={classes.slider_content}>
				<img
					src={process.env.PUBLIC_URL + "/assets/images/randomizer.PNG"}
					alt='randomizer'
					id='randomizer'
					onClick={(e) => clickHandler(e)}
				/>
			</div>
			<div className={classes.slider_content}>
				<img
					src={process.env.PUBLIC_URL + "/assets/images/dice-game.PNG"}
					alt='dice game'
					id='dice-game'
					onClick={(e) => clickHandler(e)}
				/>
			</div>
			<div className={classes.slider_content}>
				<img
					src={process.env.PUBLIC_URL + "/assets/images/Num-to-word.PNG"}
					alt='num to word'
					id='six'
					onClick={(e) => clickHandler(e)}
					// onMouseEnter={(e) => clickHandler(e)}
				/>
			</div>
		</div>
	);
};

export default SliderContainer;
