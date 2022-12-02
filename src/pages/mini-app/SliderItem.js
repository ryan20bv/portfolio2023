import React from "react";
const SliderItem = ({ classes, src, alt, id, clickHandler }) => {
	return (
		<div className={classes.slider_content}>
			<img
				src={require(`./miniAppPages/assets/images/${src}`)}
				alt={alt}
				id={id}
				onClick={(e) => clickHandler(e)}
			/>
		</div>
	);
};

export default SliderItem;
