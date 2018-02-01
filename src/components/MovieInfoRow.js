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
	let titleBlockStyle = {
		width: "300px",
		border: "2px solid red"
	};
	let directorProducerStyle = {
		width: "100px",
		border: "2px solid blue"
	};
	let castStyle = {
		width: "200px",
		border: "2px solid green"
	};
	let subtitleStyle = {
		color: "gray"
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
	let garbageText = "Only the Brave, based on the true story of the Granite Mountain Hotshots, is the heroic story of a team of local firefighters who - through hope, determination and sacrifice - become one of the most elite firefighting teams in the nation. Starring Josh Brolin, Miles Teller, Taylor Kitsch, Jeff Bridges, James Badge Dale and Jennifer Connelly, the firefighters forge a unique brotherhood that comes into focus as they fight a fateful fire to protect our lives, our homes and everything we hold dear.";
	let garbageLicenseText = "All transactions are subject to applicable license terms and conditions.";
	let directorGarbageText = "Joseph Kosinski";
	let producersGarbageText = "Lorenzo di Bonaventura\nMolly Smith\nThad Luckinbill";
	let castGarbageText = "Josh Brolin, Miles Teller, Jeff Bridges, Jennifer Connelly, James Badge Dale, Taylor Kitsch";
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
			<div style={titleBlockStyle}>
				<h3 style={titleStyle}>{title}</h3>
				<FormattedText text={movieInfoString} textColor={"white"} fontSize={8} backgroundColor={"clear"} h={"auto"}/>
				<FormattedText text={garbageLicenseText} textColor={"gray"} fontSize={6} backgroundColor={"clear"} h={"auto"}/>
				<FormattedText text={garbageText} textColor={"white"} fontSize={10} backgroundColor={"clear"} h={"auto"}/>
			</div>
			<div style={directorProducerStyle}>
				<h5 style={subtitleStyle}>Director:</h5>
				<FormattedText text={directorGarbageText} textColor={"white"} fontSize={10} backgroundColor={"clear"} h={"auto"}/>
				<h5 style={subtitleStyle}>Producer:</h5>
				<FormattedText text={producersGarbageText} textColor={"white"} fontSize={10} backgroundColor={"clear"} h={"auto"}/>
			</div>
			<div style={castStyle}>
				<h5 style={subtitleStyle}>Cast:</h5>
				<FormattedText text={castGarbageText} textColor={"white"} fontSize={10} backgroundColor={"clear"} h={"auto"}/>
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