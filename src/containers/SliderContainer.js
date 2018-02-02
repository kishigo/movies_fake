/**
 * Created by Kelvin Ishigo on 2/1/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import {connect} from 'react-redux'
import Slider from "../components/Slider"

// For now, best we can do, later see if we can refine this to the exact row we are
const mapStateToProps = state => {
	return {
		sliders: state.movies.mdp.sliders
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onItemClickFn: (cellType, action, target) => {
			console.log('onCellClick: cellType: ' + cellType + ', action: ' + action + ', target: ' + target);
		}
	}
};

const SliderContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Slider);

export default SliderContainer;