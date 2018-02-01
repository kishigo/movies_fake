/**
 * Created by Kelvin Ishigo on 1/31/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import {MDPTypes} from './ActionTypes';
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