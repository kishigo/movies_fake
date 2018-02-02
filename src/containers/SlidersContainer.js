/**
 * Created by Kelvin Ishigo on 2/1/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import {connect} from 'react-redux'
import Sliders from "../components/Sliders";
import SliderContainer from "./SliderContainer";

const mapStateToProps = state => {
	return {
		sliders: state.movies.mdp.sliders
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onSliderClick: (id, title) => {
			console.log('onSliderClick: id: ' + id + ', title: ' + title);
		},
		onItemClick: (sliderId, sliderTitle, cellId, action, target) => {
			console.log('onItemClickFn: sliderId: ' + sliderId + ', sliderTitle: ' + sliderTitle +
			', cellId: ' + cellId + ', action: ' + action + ', target: ' + target);
		}
	};
};

const SlidersContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Sliders);

export default SlidersContainer;