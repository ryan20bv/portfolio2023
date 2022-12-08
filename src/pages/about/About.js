import React from "react";

import DivWrapper from "../../ui/DivWrapper";
import AboutRight from "./AboutRight";

import Nav from "../../ui/Nav";

import classes from "./about.module.css";

const About = () => {
	const leftContent = (
		<div className={classes.about_left}>
			<img src={process.env.PUBLIC_URL + "/assets/images/dog.jpeg"} alt='dog' />
			{/* <img src='/assets/images/dog.jpeg' alt='dog' /> */}
			{/* <img
				src='https://images.pexels.com/photos/825947/pexels-photo-825947.jpeg?auto=compress&cs=tinysrgb&w=600'
				alt='dog'
			/> */}
			<Nav
				head='About'
				// fontFamily='Great Vibes'
				headColor='white'
				listColor='black'
				addedClass={classes.about_nav}
			/>
		</div>
	);
	const rightContent = (
		<>
			<AboutRight />
		</>
	);

	return (
		<>
			<DivWrapper
				leftContent={leftContent}
				rightContent={rightContent}
				bgColor='red'
				where='About'
			/>
		</>
	);
};

export default About;
