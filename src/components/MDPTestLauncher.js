/**
 * Created by Kelvin Ishigo on 1/31/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import { Route, Link } from 'react-router-dom'
import About from "./About";

const MDPTestLauncher = () => (
	<div>
		<header>
			NAV-->
			<Link to="/"><img src="MA_Header_logo.png" alt="wtf"/></Link>
			|
			<Link to="/mdp-test">MDPTest</Link>
		</header>
		<main>
			<Route exact path="/" component={About}/>
			<Route exact path="/mdp-test" component={About}/>
		</main>
	</div>
);

export default MDPTestLauncher;
