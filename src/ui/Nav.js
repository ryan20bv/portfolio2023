import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./nav.module.css";
const Nav = ({ fontFamily, head, headColor, listColor, addedClass }) => {
	return (
		<nav className={`${classes.nav} ${addedClass ? addedClass : ""}`}>
			<div className={classes.head}>
				<h1 style={{ fontFamily: fontFamily, color: headColor }}>{head}</h1>
			</div>
			<ul style={{ color: listColor }}>
				<li>
					<NavLink
						style={{ color: listColor }}
						to='/home'
						className={(navData) => (navData.isActive ? classes.active : "")}
					>
						Home
					</NavLink>
				</li>
				<span>/</span>
				<li>
					<NavLink
						style={{ color: listColor }}
						to='/about'
						className={(navData) => (navData.isActive ? classes.active : "")}
					>
						About
					</NavLink>
				</li>
				<span>/</span>
				<li>
					<NavLink
						to='/project'
						className={(navData) => (navData.isActive ? classes.active : "")}
						style={{ color: listColor }}
					>
						Project
					</NavLink>
				</li>
				<span>/</span>
				<li>
					<NavLink
						to='/mini-app'
						className={(navData) => (navData.isActive ? classes.active : "")}
						style={{ color: listColor }}
					>
						Mini-App
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
