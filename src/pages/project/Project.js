import React from "react";

import DivWrapper from "../../ui/DivWrapper";
import Nav from "../../ui/Nav";

import classes from "./project.module.css";
const Project = () => {
	const leftComponent = (
		<main className={classes.project}>
			<Nav
				head='Project'
				// fontFamily='Great Vibes'
				headColor='red'
				listColor='red'
				addedClass={classes.project_nav}
			/>
		</main>
	);
	const rightComponent = (
		<main className={classes.right}>
			<div className={classes.container}>
				<h1>Project 1</h1>
			</div>
			<div className={classes.container}>
				<h1>Project 2</h1>
			</div>
			<div className={classes.container}>
				<h1>Project 3</h1>
			</div>
			<div className={classes.container}>
				<h1>Project 4</h1>
			</div>
			<div className={classes.container}>
				<h1>Project 5</h1>
			</div>
		</main>
	);
	return (
		<>
			<DivWrapper leftContent={leftComponent} rightContent={rightComponent} />
		</>
	);
};

export default Project;
