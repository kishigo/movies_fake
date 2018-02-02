/**
 * Created by Kelvin Ishigo on 1/31/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import {MDPTypes} from '../actions/ActionTypes'

const moviesReducer = (state = [], action) => {
	switch (action.type) {
		case MDPTypes.OPEN_MDP_CONTAINER:
			return {...state};
		case MDPTypes.UPDATE_MDP_CONTAINER:
			console.log("REDUCE:UPDATE_MDP_CONTAINER");
			let newState = {...state};
			newState.mdp.heroPart.heroTitle = "A different Movie";
			newState.mdp.heroPart.actions[2].title = "Wishlist -";
			return newState;
		default:
			return state;
	}
};

export default moviesReducer;