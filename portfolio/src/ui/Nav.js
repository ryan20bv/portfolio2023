import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./nav.module.css";
const Nav = () => {
	return (
		<nav className={classes.nav}>
			<ul>
				<li>
					<NavLink
						to='/home'
						className={(navData) => (navData.isActive ? classes.active : "")}
					>
						Home
					</NavLink>
				</li>

				<span>/</span>
				<li>
					<NavLink
						to='/about'
						className={(navData) => (navData.isActive ? classes.active : "")}
					>
						About
					</NavLink>
				</li>

				<span>/</span>
				<li>
					<NavLink to='/project'>Project</NavLink>
				</li>

				<span>/</span>
				<li>
					<NavLink to='/mini-app'>Mini-App</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
