import React from "react";

const ProjectItem = ({
	classes,
	title,
	description,
	img,
	id,
	updateSelectedId,
	selectedId,
	mouseOutHandler,
	link,
}) => {
	const containerClickHandler = (id) => {
		let passedId = id;
		if (selectedId === id) {
			passedId = "";
		}
		updateSelectedId(passedId);
	};
	let addedClass = selectedId === id ? classes.open : classes.close;
	if (selectedId === id) {
	}
	return (
		<div className={classes.container} onMouseLeave={mouseOutHandler}>
			<img src={require(`./assets/images/${img}`)} alt={title} />

			<button>
				<a href={link} target='_blank' rel='noreferrer'>
					Live Server
				</a>
			</button>
			<div
				className={`${classes.details} ${addedClass}`}
				onClick={() => containerClickHandler(id)}
			>
				<p>Details</p>
				<div>
					<h2>{title}</h2>
					<h4>{description}</h4>
				</div>
			</div>
		</div>
	);
};

export default ProjectItem;
