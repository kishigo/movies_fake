/**
 * Created by Kelvin Ishigo on 1/27/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import PropTypes from 'prop-types'
import FormattedText from "./FormattedTextItem";
import ImageItem from "./ImageItem";
/**
 * @brief Presentational component contains either FormattedTextItem or ImageItem, can be part of RowOfCellItems
 * @param childComponent - passed in json to define react component
 * @param id - unique string id for this item
 * @param margin - distance between cells = margin/2
 * @param onClickFn - passed in click handler (optional)
 * @param title - string title
 * @param titleColor - foreground title color
 * @param width - cell width in pixels
 * @param height - cell height in pixels
 * @param backgroundColor - cell background color
 * @param disabled - disable clickable
 * @param selected - bool defines if outline is shown
 * @returns {*}
 * @constructor
 */
const CellItem = ({ childComponent, id, margin, onClickFn, title, titleColor, width, height, backgroundColor, disabled, selected }) => {
	let borderStyle = (selected) ? "2px solid red" : "1px solid black";
	if (margin === undefined) {
		margin = 10;
	}
	// if on
	let onClickFn = onClickFn ? onClickFn : nullClickFn;
	let marginDistance = margin + "px";
	let cellStyle = {
		width: width,
		height: height,
		backgroundColor: backgroundColor,
		display: "inline-block",
		border: borderStyle,
		margin: marginDistance,
		zIndex: "1"
	};
	let titleStyle = {
		color: titleColor
	};
	let nullClickFn = () => {};
	/**
	 * Expect a json object with a type field specifying which type of component will be created
	 * @param childComponent - json defining the component
	 */
	let generateChildComponent = (childComponent) => {
		// clone and override fields
		let cc = {...childComponent};
		switch (cc.type) {
			case "FormattedTextItem":
				return FormattedText(cc);
			case "ImageItem":
				return ImageItem(cc);
		}
	};
	return (
		<div key={id} onClick={(e) => onClickFn(e, id)} style={cellStyle}>
			{generateChildComponent(childComponent)}
			<h2 style={titleStyle}>{title}</h2>
		</div>
	)
};

/**
 * Defines the required props shape
 * @type {{childComponent: PropTypes.object.isRequired}}
 * @type {{id: PropTypes.string.isRequired}}
 * @type {{onClickFn: PropTypes.func.isRequired}}
 * @type {{title: PropTypes.string.isRequired}}
 * @type {{titleColor: PropTypes.string.isRequired}}
 * @type {{width: PropTypes.number.isRequired}}
 * @type {{height: PropTypes.number.isRequired}}
 * @type {{backgroundColor: PropTypes.string.isRequired}}
 * @type {{disabled: PropTypes.bool.isRequired}}
 */
CellItem.propTypes = {
	childComponent: PropTypes.object.isRequired,
	id: PropTypes.string.isRequired,
	margin: PropTypes.number,
	onClickFn: PropTypes.func,
	title: PropTypes.string.isRequired,
	titleColor: PropTypes.string.isRequired,
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	backgroundColor: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
	selected: PropTypes.bool
};
export default CellItem