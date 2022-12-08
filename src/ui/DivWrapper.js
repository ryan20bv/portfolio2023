import React, { useRef, useState, useEffect } from "react";
import {
	useWindowSize,
	useScrollHandler,
	useClientHeight,
} from "../windowSize/use-windowSize";
import ScrollNav from "./ScrollNav";
import classes from "./divWrapper.module.css";

const DivWrapper = (props) => {
	const leftRef = useRef();

	const [windowWidth] = useWindowSize();
	const isLessThan = windowWidth < 1000;
	const scrollPosition = useScrollHandler();
	const elementHeight = useClientHeight(leftRef);
	const scrollMoreThenLeftRef = scrollPosition > elementHeight - 50;

	return (
		<section className={classes.wrapper}>
			<div className={classes.left} ref={leftRef}>
				{/* <Nav head='About' /> */}
				{/* left div */}
				{props.leftContent}
			</div>
			{isLessThan && scrollMoreThenLeftRef && (
				<ScrollNav bgColor='red' where='About' />
			)}

			<div className={classes.right}>{props.rightContent}</div>
		</section>
	);
};

export default DivWrapper;
