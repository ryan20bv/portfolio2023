import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ScrollNav from "./ui/ScrollNav";
// import Home from "./pages/home/Home";
// import About from "./pages/about/About";
// import Project from "./pages/project/Project";
// import MiniApp from "./pages/mini-app/MiniApp";
const Home = React.lazy(() => import("./pages/home/Home"));
const About = React.lazy(() => import("./pages/about/About"));
const Project = React.lazy(() => import("./pages/project/Project"));
const MiniApp = React.lazy(() => import("./pages/mini-app/MiniApp"));

const App = () => {
	return (
		<React.Suspense fallback={<>Loading...</>}>
			<Routes>
				<Route path='*' element={<Navigate to='/home' />} />
				<Route path='/home/*' element={<Home />} exact />
				<Route path='/about' element={<About />} />
				<Route path='/project' element={<Project />} />
				<Route path='/mini-app/*' element={<MiniApp />} />
				<Route path='/scrollnav' element={<ScrollNav />} />
			</Routes>
		</React.Suspense>
	);
};

export default App;
