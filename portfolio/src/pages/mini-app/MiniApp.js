import React from "react";
import Nav from "../../ui/Nav";

import classes from "./miniApp.module.css";

const MiniApp = () => {
	return (
		<section className={classes.section}>
			<div className={classes.divContainer}>
				<Nav miniAppClassName={classes.miniAppNav} />
			</div>
			<div className={classes.content}>
				<div className={classes.view}>MiniApp</div>
				<div className={classes.slider}>slider</div>
			</div>
		</section>
	);
};

export default MiniApp;
