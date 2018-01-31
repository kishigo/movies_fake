/**
 * Created by Kelvin Ishigo on 1/30/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import PropTypes from 'prop-types'
import ImageItem from "./ImageItem";

/**
 *
 * @param title
 * @param year
 * @param duration
 * @param rating
 * @param description
 * @param actions
 * @returns {*}
 * @constructor
 */
const TitleBlock = ({posterArt, title, year, duration, rating, description, director, cast, actions}) => {
	/**
	 * Actions is array of {Action, onClickHandler} used to build pillStack.
	 * if onClickHandler is null => descriptive text only
	 * @param actions
	 */
	let buildPillStack = (actions) => {

	};
	return (
		<div className='rowC'>TitleBlock
			<ImageItem imageUrl={posterArt}/>
			{/*TitleControlBlock*/}
			{/*Director*/}
			{/*CastAndCrew*/}
			{/**/}
		</div>
	)
};

TitleBlock.propTypes = {
	title: PropTypes.string.isRequired,
	year: PropTypes.string.isRequired,
	duration: PropTypes.number.isRequired,
	rating: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	actions: PropTypes.array.isRequired
};

export default TitleBlock