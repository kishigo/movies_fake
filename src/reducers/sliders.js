/**
 * Created by Kelvin Ishigo on 2/1/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import {MDPTypes} from '../actions/ActionTypes'


const slidersReducer = (state = [], action) => {
	switch (action.type) {
		case MDPTypes.OPEN_MDP_CONTAINER:
			return {...state};
		case MDPTypes.UPDATE_MDP_CONTAINER:
			console.log("REDUCE:UPDATE_MDP_CONTAINER");
			return {...state};
		default:
			return state;
	}
};

export default slidersReducer;