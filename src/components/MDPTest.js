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
import MovieInfoRow from "./MovieInfoRow";
import PillButtonStack from "../containers/PillButtonStack";

const MDPTest = ({mdp, onUpdateClick, actions}) => {
	let backgroundColor = mdp.heroPart.modeStyle === "dark" ? "black" : "white";
	let backgroundStyle = {
		height: "100vh",
		width: "100%",
		backgroundColor: backgroundColor
	};

	let heroStyle = {
		height: "30%",
		width: "100%"
	};
	let posterStyle = {
		width: "20%",

		border: "2px solid red"
	};
	let textItems = {
		license: mdp.heroPart.license,
		director: mdp.heroPart.director,
		producers: mdp.heroPart.producers,
		cast: mdp.heroPart.cast
	};
	return (
		<div style={backgroundStyle}>
			<button onClick={() => onUpdateClick()}>UpdateState</button>
			<div style={heroStyle}>
				<Hero heroImage={mdp.heroPart.heroBackground.heroImageUrl}
				      backgroundColor={mdp.heroPart.heroBackground.backgroundColor}/>
			</div>
			<MovieInfoRow posterArtUrl={mdp.heroPart.heroBackground.heroImageUrl}
			              title={mdp.heroPart.heroTitle}
			              releaseDate={mdp.heroPart.releaseDate}
			              durationMinutes={mdp.heroPart.durationMinutes}
			              rating={mdp.heroPart.rating}
			              description={mdp.heroPart.description}
			              buttons={mdp.heroPart.buttons}
			              actions={actions}
			              textItems={textItems}/>
		</div>
	)
};

MDPTest.propTypes = {
	// TBD add more depth to type as it evolves
	mdp: PropTypes.object.isRequired,
	onUpdateClick: PropTypes.func.isRequired,
	actions: PropTypes.array.isRequired
};

export default MDPTest