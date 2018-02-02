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
 * @param sliders
 * @returns {*}
 * @constructor
 */
const Sliders = ({sliders}) => {
	let textStyle = {
		color: "white"
	};
	const generateSliders = () => {
		return (
			<div>
				{sliders.map((slider) => (
					<RowOfCellItems key={slider.id}
					                id={slider.id}
					                title={slider.title}
					                titleColor={"white"}
					                cellItems={slider.cells}
					                gap={2}
					                h={"auto"}
					                offset={0}
					                visibleItemCount={5}/>
				))}
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

