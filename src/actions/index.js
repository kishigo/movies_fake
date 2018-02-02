/**
 * Created by Kelvin Ishigo on 1/31/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import {MDPPlayActionTypes, MDPTypes} from './ActionTypes';
import {MDPTestData} from "../tests/TestNewTypesTestData";

export const openMDPContainer = (mdpName) => {
	return {
		type: MDPTypes.OPEN_MDP_CONTAINER,
		mdpName: mdpName
	}
};

export const updateMDPContainer = () => {
	console.log('ACTION:updateMDPContainer');
	return {
		type: MDPTypes.UPDATE_MDP_CONTAINER
	}
};

export const movieInfoClick = (action, target) => {
	switch (action) {
		case MDPPlayActionTypes.MDP_PLAY_ACTION:
		case MDPPlayActionTypes.MDP_PREVIEW_ACTION:
			// Play here.. IN reality two different plays since DRM will factor in
			console.log("movieInfoClick: action: " + action + ", target: " + target);
			return {
				type: MDPPlayActionTypes.MDP_PLAY_ACTION,
			};
		case MDPPlayActionTypes.MDP_FOLLOW_ACTION:
			console.log("movieInfoClick: action: " + action + ", target: " + target);
			return {
				type: MDPPlayActionTypes.MDP_FOLLOW_ACTION,
			};
		case MDPPlayActionTypes.MDP_UNFOLLOW_ACTION:
			console.log("movieInfoClick: action: " + action + ", target: " + target);
			return {
				type: MDPPlayActionTypes.MDP_UNFOLLOW_ACTION,
			};

	}
};