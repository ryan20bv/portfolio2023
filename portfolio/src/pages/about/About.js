import React from "react";

import DivWrapper from "../../ui/DivWrapper";

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
			/>
		</div>
	);
	const rightContent = (
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
						<div className={classes.card}>
							<img
								src={process.env.PUBLIC_URL + "/assets/images/html.png"}
								alt='html'
							/>
							<a href='http://' target='_blank' rel='noopener noreferrer'>
								HTML
							</a>
						</div>
						<div className={classes.card}>
							<img
								src={process.env.PUBLIC_URL + "/assets/images/css.png"}
								alt='html'
							/>
							<a href='http://' target='_blank' rel='noopener noreferrer'>
								CSS
							</a>
						</div>
						<div className={classes.card}>
							<img
								src={process.env.PUBLIC_URL + "/assets/images/js.png"}
								alt='html'
							/>
							<a href='http://' target='_blank' rel='noopener noreferrer'>
								JavaScript
							</a>
						</div>
						<div className={classes.card}>
							<img
								src={process.env.PUBLIC_URL + "/assets/images/react.png"}
								alt='html'
							/>
							<a href='http://' target='_blank' rel='noopener noreferrer'>
								React
							</a>
						</div>
					</div>
				</div>
				<div className={classes.section}>
					<p>
						<b>Back-End</b>
					</p>
					<div className={classes.picture}>
						<div className={classes.card}>
							<img
								src={process.env.PUBLIC_URL + "/assets/images/node.png"}
								alt='html'
							/>
							<a href='http://' target='_blank' rel='noopener noreferrer'>
								Node JS
							</a>
						</div>
					</div>
				</div>
				<div className={classes.section}>
					<p>
						<b>Data Base</b>
					</p>
					<div className={classes.picture}>
						<div className={classes.card}>
							<img
								src={process.env.PUBLIC_URL + "/assets/images/mongoDb.png"}
								alt='html'
							/>
							<a href='http://' target='_blank' rel='noopener noreferrer'>
								MongoDB
							</a>
						</div>
						<div className={classes.card}>
							<img
								src={process.env.PUBLIC_URL + "/assets/images/firebase.png"}
								alt='html'
							/>
							<a href='http://' target='_blank' rel='noopener noreferrer'>
								Firebase
							</a>
						</div>
					</div>
				</div>
				<div className={classes.section}>
					<p>
						<b>Others</b>
					</p>
					<div className={classes.picture}>
						<div className={classes.card}>
							<img
								src={process.env.PUBLIC_URL + "/assets/images/git.png"}
								alt='html'
							/>
							<a href='http://' target='_blank' rel='noopener noreferrer'>
								Git
							</a>
						</div>
						<div className={classes.card}>
							<img
								src={process.env.PUBLIC_URL + "/assets/images/postman.png"}
								alt='html'
							/>
							<a href='http://' target='_blank' rel='noopener noreferrer'>
								Postman
							</a>
						</div>
						<div className={classes.card}>
							<img
								src={process.env.PUBLIC_URL + "/assets/images/redux.png"}
								alt='html'
							/>
							<a href='http://' target='_blank' rel='noopener noreferrer'>
								Redux
							</a>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
	return (
		<>
			<DivWrapper leftContent={leftContent} rightContent={rightContent} />
		</>
	);
};

export default About;
