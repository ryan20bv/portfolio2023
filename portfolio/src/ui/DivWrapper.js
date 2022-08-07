import React from "react";

import classes from "./divWrapper.module.css";

const DivWrapper = (props) => {
	return (
		<section className={classes.wrapper}>
			<div className={classes.left}>
				{/* <Nav head='About' /> */}
				{/* left div */}
				{props.leftContent}
			</div>
			<div className={classes.right}>{props.rightContent}</div>
		</section>
	);
};

export default DivWrapper;
