/**
 * Created by Kelvin Ishigo on 1/28/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import PropTypes from 'prop-types'
import CellItem from "./CellItem";
/**
 * @brief Presentational component, row of CellItems
 * @param id - unique id for this row
 * @param cellItems - json items in row
 * @param title - optional title of row
 * @param titleColor - optional title color
 * @param gap - distance between CellItems
 * @param offset - where to start displaying in the array of CellItems
 * @param visibleItemCount - visible set of items
 * @param w - width of row
 * @param h - height of row
 * @param animateScroll - animate or not
 * @param onItemClickFn - callback when selected, args: cellItem, indexAt
 * @param currentSelectedItemIndex - index of current selected item
 * @constructor
 */
const RowOfCellItems = ({id, cellItems, title, titleColor, gap, offset, visibleItemCount, w, h, animateScroll, onItemClickFn, currentSelectedItemIndex}) => {
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
	if (gap < 0) {
		gap = 0;
	}
	let margin = gap / 2;
	let containerStyle = {
		width: w,
		height: h,
		border: "2px solid blue",
	};
	let titleStyle = {
		color: titleColor,
		width: "100%",
		textAlign: "left"
	};
	let testClickFn = (item, index) => {
		console.log('testClickFn: index: ' + index);
	};
	let renderCells = () => {
		// Make sure currentSelectedItemIndex in range
		if (currentSelectedItemIndex > cellItems.length - 1) {
			currentSelectedItemIndex = cellItems.length - 1;
		}
		else if (currentSelectedItemIndex < 0) {
			currentSelectedItemIndex = 0;
		}

		if (cellItems.length < visibleItemCount) {
			// just generate the cells, no need to slice unless we want to do a lens type of selection
			let renderedCellItems = cellItems.map((item, index) => {
				// inject key, onClickFn
				let newItem = {
					childComponent: item,
					id: index,
					margin: margin,
					onClickFn: testClickFn,
					title: cellItems.title,
					titleColor: cellItems.titleColor,
					backgroundColor: "clear",
					width: 200,
					height: h};
				console.log(newItem);
				return CellItem(newItem);
			});
			return renderedCellItems;
		}
		else {
			// if the currentSelectedItemIndex
			let slicedCellItems = cellItems.slice(
				currentSelectedItemIndex,
				currentSelectedItemIndex + visibleItemCount);
			let renderedCellItems = slicedCellItems.map((item, index) => {
				return <h3>item[{index}]</h3>
			});
			return renderedCellItems;
		}
	};
	return (
		<div>
			<div style={titleStyle}>{title}</div>
			<div className='rowC' style={containerStyle}>
				{renderCells()}
			</div>
		</div>
	)
};

/**
 * @brief PropType checking on the args to this component
 * @type {{id: *, cellItems: *, title: string, titleColor: string, w: string, h: string, visibleItemCount: *, animateScroll: string, onItemClickFn: string, currentSelectedItemIndex: string}}
 */
RowOfCellItems.propTypes = {
	id: PropTypes.string.isRequired,
	cellItems: PropTypes.array.isRequired,
	title: PropTypes.string,
	titleColor: PropTypes.string,
	w: PropTypes.string,
	h: PropTypes.string,
	gap: PropTypes.number.isRequired,
	offset: PropTypes.number.isRequired,
	visibleItemCount: PropTypes.number.isRequired,
	animateScroll: PropTypes.bool,
	onItemClickFn: PropTypes.func,
	currentSelectedItemIndex: PropTypes.number
};

export default RowOfCellItems