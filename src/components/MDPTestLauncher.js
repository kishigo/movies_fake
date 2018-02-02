/**
 * Created by Kelvin Ishigo on 1/31/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import { Route, Link } from 'react-router-dom'
import About from "./About";
// import MDPTestContainer from "../containers/MDPTestContainer";
import MDPContainer from "../containers/MDPContainer";

const MDPTestLauncher = () => {
	let navTextStyle = {
		color: "gray"
	};
	return (
		<div>
			<header>
				NAV-->
				<Link style={navTextStyle} to="/"><img src="MA_Header_Logo.png" alt="wtf"/></Link>
				|
				<Link style={navTextStyle} to="/mdp-container">MDPContainer</Link>
			</header>
			<main>
				<Route exact path="/" component={About}/>
				<Route exact path="/mdp-container" component={MDPContainer}/>
			</main>

		</div>

)
};

export default MDPTestLauncher;

//			<Link to="/mdp-test-container">MDPTestContainer</Link>
