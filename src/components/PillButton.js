/**
 * Created by Kelvin Ishigo on 1/25/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import PropTypes from 'prop-types'

/**
 * Presentational component to represent a formatted button
 * @param onClickFn - passed in click handler
 * @param title - string button title
 * @param titleColor - foreground color of title
 * @param width - width in pixels (number)
 * @param backgroundColor - button background, color or RGBA, e.g., #ffffff00 => clear
 * @param disabled - button is disabled if true
 * @constructor
 */
const PillButton = ({ onClickFn, title, titleColor, width, backgroundColor, disabled }) => {
	// CSS Styling.  There is some cruft in the style to help align
	let widthString = width + "px";
	// border: none to remove outline for transparent button backgroundColor
	// outline: none to remove focus outline
	// borderRadius: 30px for pill corners
	let buttonStyle = {
		padding: "20px",
		border: "none",
		outline: "none",
		textAlign: "center",
		color: titleColor,
		display: "inline-block",
		fontSize: "16px",
		margin: "4px 2px",
		borderRadius: "30px",
		width: widthString,
		backgroundColor: backgroundColor,
		zIndex: "1"
	};
	if (disabled) {
		return (
			<button onClick={(e) => onClickFn(e)} style={ buttonStyle } disabled>{ title }</button>
		)
	}
	else {
		return (
			<button onClick={(e) => onClickFn(e)} style={ buttonStyle } >{ title }</button>
		)
	}
};
/**
 * Defines the required props shape
 * @type {{onClickFn: PropTypes.func.isRequired}}
 * @type {{title: PropTypes.string.isRequired}}
 * @type {{titleColor: PropTypes.string.isRequired}}
 * @type {{width: PropTypes.number.isRequired}}
 * @type {{backgroundColor: PropTypes.string.isRequired}}
 * @type {{disabled: PropTypes.bool.isRequired}}
 */
PillButton.propTypes = {
	onClickFn: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
	titleColor: PropTypes.string.isRequired,
	width: PropTypes.number.isRequired,
	backgroundColor: PropTypes.string.isRequired,
	disabled: PropTypes.bool.isRequired
};
export default PillButton