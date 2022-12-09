import React, { useRef, useState, useEffect } from "react";
import { useWindowSize } from "../../windowSize/use-windowSize";
import Nav from "../../ui/Nav";
import Slider from "./Slider";
import SliderContainer from "./SliderContainer";
import BurgerMenu from "../../ui/BurgerMenu";

import classes from "./miniAppWrapper.module.css";
const MiniAppWrapper = (props) => {
	const [windowWidth] = useWindowSize();
	const smallWindow = windowWidth < 1000;
	const outPutRef = useRef();
	const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState(false);

	const [outPutClientWidth, setOutPutClientWidth] = useState();

	useEffect(() => {
		setOutPutClientWidth(outPutRef.current.clientWidth);
	}, []);
	const burgerMenuHandler = () => {
		setBurgerMenuIsOpen((prevData) => !prevData);
	};

	return (
		<>
			<main className={classes.main}>
				<section className={classes.nav_container}>
					<Nav addedClass={classes.mini_app_nav} />
					{smallWindow && (
						<div className={classes.miniApp_burger}>
							<BurgerMenu
								burgerMenuHandler={burgerMenuHandler}
								burgerMenuIsOpen={burgerMenuIsOpen}
							/>
						</div>
					)}
				</section>

				<div className={classes.output} ref={outPutRef}>
					{props.children}
				</div>

				<Slider classes={classes} outPutClientWidth={outPutClientWidth}>
					<SliderContainer
						classes={classes}
						burgerMenuIsOpen={burgerMenuIsOpen}
					/>
				</Slider>
			</main>
		</>
	);
};

export default MiniAppWrapper;
