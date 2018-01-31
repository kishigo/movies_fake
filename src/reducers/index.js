/**
 * Created by Kelvin Ishigo on 1/31/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

const movieApp = combineReducers({
	routing: routerReducer
});

export default movieApp;