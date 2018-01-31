/**
 * Created by Kelvin Ishigo on 1/29/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import PropTypes from 'prop-types'
import Hero from "./Hero";
import ImageItem from "./ImageItem";
import TitleBlock from "./TitleBlock";
import MovieInfoRow from "./MDPDetailStrip";

const MDPTest = ({hero, actions}) => {
	let backgroundColor = hero.heroPart.modeStyle === "dark" ? "black" : "white";
	let backgroundStyle = {
		height: "100vh",
		width: "100vh",
		backgroundColor: backgroundColor
	};

	let heroStyle = {
		height: "30%"
	};
	let posterStyle = {
		width: "20%",

		border: "2px solid red"
	};
	return (
		<div style={backgroundStyle}>
			<div style={heroStyle}>
				<Hero heroImage={hero.heroPart.heroBackground.heroImageUrl}
				      backgroundColor={hero.heroPart.heroBackground.backgroundColor}/>
			</div>
			<MovieInfoRow posterArt={hero.heroPart.heroBackground.heroImageUrl}
			              title={hero.heroPart.heroTitle}
			              releaseDate={hero.heroPart.releaseDate}
			              durationMinutes={hero.heroPart.durationMinutes}
			              rating={hero.heroPart.rating}
			              description={hero.heroPart.description}
			              actions={actions}/>
		</div>
	)
};

MDPTest.propTypes = {
	// TBD add more depth to type as it evolves
	hero: PropTypes.object.isRequired,
	actions: PropTypes.array.isRequired
};

export default MDPTest