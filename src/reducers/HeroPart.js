/**
 * Created by Kelvin Ishigo on 2/1/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import {MDPPlayActionTypes, MDPTypes} from "../actions/ActionTypes";

const heroPart = (state = [], action) => {
	let newState;
	switch (action.type) {
		case MDPPlayActionTypes.MDP_FOLLOW_ACTION:
			newState = {...state};
			newState.actions[2].action = MDPPlayActionTypes.MDP_UNFOLLOW_ACTION;
			newState.actions[2].title = "Wishlist !!";
			return newState;
		case MDPPlayActionTypes.MDP_UNFOLLOW_ACTION:
			newState = {...state};
			newState.actions[2].action = MDPPlayActionTypes.MDP_FOLLOW_ACTION;
			newState.actions[2].title = "Wishlist +";
			return newState;
		default:
			return state;
	}
};

export default heroPart;