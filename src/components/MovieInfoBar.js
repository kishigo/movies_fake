/**
 * Created by kishigo on 1/31/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import PropTypes from 'prop-types'
import FormattedText from "./FormattedTextItem";

/**
 * Presentational component to display release year, duration, parental rating
 * @param releaseDate
 * @param durationMinutes
 * @param rating
 * @returns {*}
 * @constructor
 */
const MovieInfoBar = ({releaseDate, durationMinutes, rating}) => {
	let hours = Math.floor(durationMinutes / 60);
	let minutes = Math.floor(durationMinutes - (hours * 60));
	let durationString = '';
	if (hours > 0) {
		durationString += hours + ' hours ';
	}
	if (minutes > 0) {
		durationString += minutes + 'min';
	}
	let movieInfoString = releaseDate + ' * ' + durationString + ' * ' + rating;
	return (
		<FormattedText text={movieInfoString} textColor={"gray"} fontSize={8} backgroundColor={"clear"} h={"auto"}/>
	)
};

MovieInfoBar.propTypes = {
	releaseDate: PropTypes.string.isRequired,
	durationMinutes: PropTypes.number.isRequired,
	rating: PropTypes.string.isRequired,
};

export default  MovieInfoBar;