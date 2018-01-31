/**
 * Created by Kelvin Ishigo on 1/31/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import PropTypes from 'prop-types'
import CellItem from "./CellItem";

/**
 * Presentational layout for movie information strip
 * @param posterArtUrl - url for poster
 * @param title - string movie title
 * @param releaseDate - string year of release
 * @param duration - number of minutes
 * @param rating - mpaa ratings
 * @param description - text description
 * @param actions - array of {action, onAction}
 * @param textItems - array of {subtitle: text}
 * @returns {*}
 * @constructor
 */
const MovieInfoRow = ({posterArtUrl, title, releaseDate, duration, rating, description, actions, textItems}) => {
	let generateCellItem = (posterArt) => {
		return {imageUrl: posterArtUrl}
	};
	let titleStyle = {
		color: "white"
	};
	return (
		<div className='rowC '>
			<CellItem childComponent={generateCellItem(posterArtUrl)}
			          id={'dontcare'}
			          title={''}
			          titleColor={'clear'}
			          width={200}
			          height={300}
			          backgroundColor={"clear"}/>
			<h1 style={titleStyle}>title</h1>
		</div>
	)
};

MovieInfoRow.propTypes = {
	posterArt: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	releaseDate: PropTypes.string.isRequired,
	durationMinutes: PropTypes.number.isRequired,
	rating: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	actions: PropTypes.array.isRequired,
	textItems: PropTypes.array
};

export default MovieInfoRow