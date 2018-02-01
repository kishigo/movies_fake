/**
 * Created by Kelvin Ishigo on 1/31/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import {connect} from 'react-redux'
import {updateMDPContainer} from "../actions";
import MDPTest from "../components/MDPTest";

const mapStateToProps = state => {
	return {
		mdp: {...state.movies.mdp},
	}
};

const mapDispatchToProps = dispatch => {
	return {
		onUpdateClick: () => {
			dispatch(updateMDPContainer());
		},
		actions: []
	}
};

const MDPContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(MDPTest);

export default MDPContainer;