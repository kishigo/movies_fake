/**
 * Created by Kelvin Ishigo on 1/27/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import PropTypes from 'prop-types'

/**
 * Presentational component to show an image
 * @param imageUrl - string of primary image
 * @param altImageUrl - string of alt image
 * @param title - string of optional title
 * @param titleColor - string color of optional title
 * @param backgroundColor - string of background color
 * @param w - string of width of box
 * @param h - string of height of box
 * @param selected - bool defines if outline is shown
 * @constructor
 */
const ImageItem = ({imageUrl, altImageUrl, title, titleColor, backgroundColor, w, h, selected}) => {
	if (w === undefined) {
		w = "100%"
	}
	if (h === undefined) {
		h = "100%"
	}
	if (title === undefined) {
		title = "";
		titleColor = "clear";
	}
	else {
		if (titleColor === undefined) {
			titleColor = "black";
		}
	}
	if (backgroundColor === undefined) {
		backgroundColor = "clear";
	}
	let borderType = (selected) ? "2px solid red" : "none";

	let containerStyle = {
		backgroundColor: backgroundColor,
		width: w,
		height: h,
		border: borderType,
	};
	let imageStyle = {
		maxWidth: "100%",
		height: "auto"
	};
	let titleStyle = {
		color: titleColor,
		width: w,
		textAlign: "center"
	};
	return (
		<div>
			<div style={containerStyle}>
				<img style={imageStyle} src={imageUrl} alt={altImageUrl}/>
			</div>
			<div style={titleStyle}>{title}</div>
		</div>
	)
};

ImageItem.propTypes = {
	imageUrl: PropTypes.string.isRequired,
	altImageUrl: PropTypes.string,
	title: PropTypes.string,
	titleColor: PropTypes.string,
	backgroundColor: PropTypes.string,
	w: PropTypes.string,
	h: PropTypes.string,
	selected: PropTypes.bool
};

export default ImageItem