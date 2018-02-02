/**
 * Created by Kelvin Ishigo on 2/1/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import PropTypes from 'prop-types'
import RowOfCellItems from "./RowOfCellItems";

/**
 * Generates all sliders in the dataset that is held as an array of slider rows
 * @param sliders - [] of sliders
 * @param onSliderClick - callback for clicking on a particular slider row
 * @returns {*}
 * @constructor
 */
const Sliders = ({sliders, onSliderClick, onItemClick}) => {
	let textStyle = {
		color: "white"
	};
	const generateSliders = () => {
		return (
			<div>
				{sliders.map((slider) => {
					// curry
					let curryOnClickFn = (sliderId, sliderTitle) => {
						return (cellId, action, target) => {
							onItemClick(sliderId, sliderTitle, cellId, action, target);
						}
					};
					return (
						<RowOfCellItems key={slider.id}
					                id={slider.id}
					                title={slider.title}
					                titleColor={"white"}
					                cellItems={slider.cells}
					                gap={2}
					                h={"auto"}
					                offset={0}
					                onItemClickFn={curryOnClickFn(slider.id, slider.title)}
					                visibleItemCount={5}/>
					)
				})}
			</div>
		)
	};
	return (
		<div>
			<h3 style={textStyle}>Sliders</h3>
			{generateSliders()}
		</div>
	)
};

Sliders.propTypes = {
	sliders: PropTypes.array
};

export default Sliders;

