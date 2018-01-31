/**
 * Created by Kelvin Ishigo on 1/31/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import PropTypes from 'prop-types'
import CellItem from "./CellItem";
import FormattedText from "./FormattedTextItem";

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
const MovieInfoRow = ({posterArtUrl, title, releaseDate, durationMinutes, rating, description, actions, textItems}) => {
	let generateCellItem = (posterArtUrl) => {
		return {type: "ImageItem",
			imageUrl: posterArtUrl}
	};
	let titleStyle = {
		color: "white",
		display: "inline-block"
	};
	let textStyle = {
		color: "white"
	};
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
		<div className='rowC '>
			<CellItem childComponent={generateCellItem(posterArtUrl)}
			          id={'dontcare'}
			          title={''}
			          titleColor={'clear'}
			          width={200}
			          height={300}
			          backgroundColor={"clear"}
			selected={true}/>
			<div>
				<h2 style={titleStyle}>{title}</h2>
				<FormattedText text={movieInfoString} textColor={"white"} backgroundColor={"clear"} h={"20px"}/>
				<div style={textStyle}>Test text</div>
			</div>
		</div>
	)
};

MovieInfoRow.propTypes = {
	posterArtUrl: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	releaseDate: PropTypes.string.isRequired,
	durationMinutes: PropTypes.number.isRequired,
	rating: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	actions: PropTypes.array.isRequired,
	textItems: PropTypes.array
};

export default MovieInfoRow