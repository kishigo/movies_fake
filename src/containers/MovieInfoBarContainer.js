/**
 * Created by Kelvin Ishigo on 2/1/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import {connect} from 'react-redux'
import MovieInfoBar from "../components/MovieInfoBar";

const mapStateToProps = state => {
	let heroPart = state.movies.mdp.heroPart;
	return {
		releaseDate: heroPart.releaseDate,
		durationMinutes: heroPart.durationMinutes,
		rating: heroPart.rating
	};
};

const MovieInfoBarContainer = connect(
	mapStateToProps,
	null
)(MovieInfoBar);

export default MovieInfoBarContainer;