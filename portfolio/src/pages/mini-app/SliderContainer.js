import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SliderContainer = ({ classes }) => {
	const [contentId, setContentId] = useState("three");
	const navigate = useNavigate();
	const clickHandler = (e) => {
		const targetId = e.target.id;
		// console.log(targetId);
		if (targetId === "") {
			return;
		}
		setContentId(targetId);
	};
	useEffect(() => {
		navigate(`/mini-app/slider/${contentId}`);
	}, [contentId, navigate]);
	return (
		<div className={classes.slider_container} id='slider_container'>
			<div
				className={classes.slider_content}
				id='one'
				onMouseEnter={(e) => clickHandler(e)}
			>
				<p>slide 1</p>
			</div>
			<div
				className={classes.slider_content}
				id='two'
				onMouseEnter={(e) => clickHandler(e)}
			>
				<p>slide 2</p>
			</div>
			<div
				className={classes.slider_content}
				id='three'
				onMouseEnter={(e) => clickHandler(e)}
			>
				<p>slide 3</p>
			</div>
			<div
				className={classes.slider_content}
				id='four'
				onMouseEnter={(e) => clickHandler(e)}
			>
				<p>slide 4</p>
			</div>
			<div
				className={classes.slider_content}
				id='five'
				onMouseEnter={(e) => clickHandler(e)}
			>
				<p>slide 5</p>
			</div>
			<div
				className={classes.slider_content}
				id='six'
				onMouseEnter={(e) => clickHandler(e)}
			>
				<p>slide 6</p>
			</div>
		</div>
	);
};

export default SliderContainer;
