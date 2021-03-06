/**
 * Created by Kelvin Ishigo on 1/29/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import PropTypes from 'prop-types'
import Hero from "./Hero";
import MovieInfoRow from "./MovieInfoRow";
import SlidersContainer from "../containers/SlidersContainer";

const MDPTest = ({mdp, onUpdateClick, onActionClick}) => {
	let backgroundColor = mdp.heroPart.modeStyle === "dark" ? "black" : "white";
	let backgroundStyle = {
		height: "100vh",
		width: "100%",
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
	let generateButtonsFromActions = (actions) => {
		return actions.map((action) => {
			return {
				onClickFn: onActionClick,
				title: action.title,
				action: action.action,
				target: action.target
			}
		});
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
			              description={mdp.heroPart.description}
			              buttons={generateButtonsFromActions(mdp.heroPart.actions)}
			              textItems={textItems}/>
			<SlidersContainer/>
		</div>
	)
};

MDPTest.propTypes = {
	// TBD add more depth to type as it evolves
	mdp: PropTypes.object.isRequired,
	onUpdateClick: PropTypes.func.isRequired,
	onActionClick: PropTypes.func.isRequired,
};

export default MDPTest