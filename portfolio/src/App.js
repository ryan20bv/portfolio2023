import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Project from "./pages/project/Project";
import MiniApp from "./pages/mini-app/MiniApp";

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/about' element={<About />} />
			<Route path='/project' element={<Project />} />
			<Route path='/mini-app' element={<MiniApp />} />
		</Routes>
	);
};

export default App;
