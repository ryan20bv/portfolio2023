import React, { useState } from "react";

import DivWrapper from "../../ui/DivWrapper";
import Nav from "../../ui/Nav";
import ProjectItem from "./ProjectItem";

import classes from "./project.module.css";

const Items = [
	{
		id: 1,
		title: "Pokemon",
		description: "Fetch list of pokemon from pokemon.io api using redux",
		img: "pokemon.PNG",
		link: "https://gotta-catch-them.netlify.app/",
	},
	{
		id: 2,
		title: "Pizzalated",
		description: "An pizza e-commerce using redux and firebase database",
		img: "pizzalated.PNG",
		link: "https://pizzalated-efb81.web.app/ ",
	},
];

const Project = () => {
	const [selectedId, setSelectedId] = useState();

	const mouseOutHandler = () => {
		setSelectedId();
	};

	const updateSelectedId = (id) => {
		setSelectedId(id);
	};

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
			{Items.map((item) => {
				return (
					<ProjectItem
						key={item.id}
						title={item.title}
						description={item.description}
						img={item.img}
						id={item.id}
						classes={classes}
						updateSelectedId={updateSelectedId}
						selectedId={selectedId}
						mouseOutHandler={mouseOutHandler}
						link={item.link}
					/>
				);
			})}
		</main>
	);
	return (
		<>
			<DivWrapper leftContent={leftComponent} rightContent={rightComponent} />
		</>
	);
};

export default Project;
