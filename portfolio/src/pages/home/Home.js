import React from "react";

import Nav from "../../ui/Nav";

import classes from "./home.module.css";
const Home = () => {
	return (
		<>
			<div className={classes.home}>
				<div className={classes.head}>
					<h1>Ryan</h1>
					<h1>Valenzuela</h1>
				</div>
				<Nav />
			</div>
		</>
	);
};

export default Home;
