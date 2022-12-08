import React from "react";

const AboutIcon = ({ classes, item }) => {
	return (
		<div className={classes.card}>
			<img
				src={process.env.PUBLIC_URL + `/assets/images/${item.img}`}
				alt={item.title}
			/>
			<p>{item.title}</p>
		</div>
	);
};

export default AboutIcon;
