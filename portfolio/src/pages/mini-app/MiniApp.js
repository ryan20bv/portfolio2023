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
				<div className={classes.slider_div}>
					<div className={classes.slider_container}>
						<div className={classes.slider_content}>
							<p>slide 1</p>
						</div>
						<div className={classes.slider_content}>
							<p>slide 2</p>
						</div>
						<div className={classes.slider_content}>
							<p>slide 3</p>
						</div>
						<div className={classes.slider_content}>
							<p>slide 4</p>
						</div>
						<div className={classes.slider_content}>
							<p>slide 5</p>
						</div>
						<div className={classes.slider_content}>
							<p>slide 6</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MiniApp;
