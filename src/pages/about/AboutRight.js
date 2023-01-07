import React from "react";
import AboutIcon from "./AboutIcon";
import classes from "./aboutRight.module.css";

const frontEnd = [
	{
		title: "HTML",
		img: "html.png",
	},
	{
		title: "CSS",
		img: "css.png",
	},
	{
		title: "JavaScript",
		img: "js.png",
	},
	{
		title: "React",
		img: "react.png",
	},
];
const backEnd = [
	{
		title: "NodeJS",
		img: "node.png",
	},
];
const dataBase = [
	{
		title: "MongoDB",
		img: "mongodb.png",
	},
	{
		title: "Firebase",
		img: "firebase.png",
	},
];
const others = [
	{
		title: "Git",
		img: "git.png",
	},
	{
		title: "PostMan",
		img: "postman.png",
	},
	{
		title: "Redux",
		img: "redux.png",
	},
];

const AboutRight = () => {
	return (
		<main className={classes.about_right}>
			<section>
				<h1>About Me</h1>
				<div>
					<h2>
						<b>
							I am Ryan Valenzuela, from Oil and Gas Industry with Mechanical
							Engineering background specializing in QA/QC to Information and
							Technology in Web Developer using MERN Stack.
						</b>
					</h2>
					<p>
						As QA/QC in Oil and Gas Industry, the task is to ensure that step by
						step procedure must be followed to meet the quality and standard of
						the project.
					</p>
					<p>
						The skills are keen to details, ensure different department function
						well and innovate task and activities and pass information
						efficiently.
					</p>{" "}
					<p>
						As for Web Developer, i was curious and want to learn new skill. I
						enrolled in a boot camp and then do self learning to determine if i
						have a grit for Information and Technology. <br />
						Now i have several project deployed using MERN stack, and looking
						for working environment to use my new acquired skill and further
						grow in the field of Information and Technology.
					</p>
				</div>
			</section>
			<section>
				<h1>Tech Stack</h1>
				<div className={classes.section}>
					<p>
						<b>Front-End</b>
					</p>
					<div className={classes.picture}>
						{frontEnd.map((item) => {
							return (
								<AboutIcon key={item.title} item={item} classes={classes} />
							);
						})}
					</div>
				</div>
				<div className={classes.section}>
					<p>
						<b>Back-End</b>
					</p>
					<div className={classes.picture}>
						{backEnd.map((item) => {
							return (
								<AboutIcon key={item.title} item={item} classes={classes} />
							);
						})}
					</div>
				</div>
				<div className={classes.section}>
					<p>
						<b>Data Base</b>
					</p>
					<div className={classes.picture}>
						{dataBase.map((item) => {
							return (
								<AboutIcon key={item.title} item={item} classes={classes} />
							);
						})}
					</div>
				</div>
				<div className={classes.section}>
					<p>
						<b>Others</b>
					</p>
					<div className={classes.picture}>
						{others.map((item) => {
							return (
								<AboutIcon key={item.title} item={item} classes={classes} />
							);
						})}
					</div>
				</div>
			</section>
		</main>
	);
};

export default AboutRight;
