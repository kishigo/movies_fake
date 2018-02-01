/**
 * Created by Kelvin Ishigo on 2/1/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import {connect} from 'react-redux'
import Sliders from "../components/Sliders";

const mapStateToProps = state => {
	return {
		sliders: state.movies.mdp.sliders
	};
};

const SlidersContainer = connect(
	mapStateToProps,
	null
)(Sliders);

export default SlidersContainer;