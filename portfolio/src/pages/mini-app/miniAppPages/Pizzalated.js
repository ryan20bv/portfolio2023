import React from "react";

import PizzaNav from "./pizzaComponents/pizzaNav";
import classes from "./assets/styles/pizzalated.module.css";
const Pizzalated = () => {
	return (
		<main className={classes.pizzalated}>
			<header>
				<PizzaNav classes={classes} />
			</header>
			<section>
				<div>left</div>
				<div className={classes.content}>
					<div className={classes.card}>
						<img
							src='https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_623344781.jpg.webp'
							alt='content 1'
						/>
						<div className={classes.info}>
							<h1>Cheesy</h1>
							<p>$ 3.15</p>
						</div>
						<div>
							<form action=''>
								<div>
									<label htmlFor=''>Qty:</label>
									<button>-</button>
									<input type='text' defaultValue='1' max='5' />
									<button>+</button>
								</div>

								<button type='submit' className={classes.btn_submit}>
									Add to Cart
								</button>
							</form>
						</div>
					</div>
				</div>
				<div>right</div>
			</section>
			<footer>@2022</footer>
		</main>
	);
};

export default Pizzalated;
