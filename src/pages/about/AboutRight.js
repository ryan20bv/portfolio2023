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
		title: "Node JS",
		img: "node.png",
	},
];
const dataBase = [
	{
		title: "Mongo DB",
		img: "mongoDb.png",
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
							Hello, I am Ryan Valenzuela! I enjoy transforming plans, designs,
							and ideas into reality.
						</b>
					</h2>
					<p>
						Being an Urban Planner by profession, I ventured on a mission to
						search for solutions to make smarter and more resilient communities
						– an endless quest for technological innovations which eventually
						led me to the fascinating world of Web Development. After all, the
						web is just an evolved form of the communities that we know. We
						connect, we communicate, we interact. Everything just turned
						digital. Today, my mission still remains, but I am more focused now
						on developing beautifully designed websites and web applications
						that foster seamless and worthwhile digital community experiences.
						Hungry to further enhance my knowledge in this field, I am open to
						working in environments where I can learn, grow, and contribute
						more.
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
