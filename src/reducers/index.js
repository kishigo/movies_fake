/**
 * Created by Kelvin Ishigo on 1/31/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import moviesReducer from "./movies";
import heroPart from "./HeroPart";
import slidersReducer from "./sliders";

// Relationship is the key tag must have a matchin tag in the initialState of the createStore() call or the
// container's mapStateToProps will not have partitioned data and will have to parse state
const movieApp = combineReducers({
	movies: moviesReducer,
	hero: heroPart,
	sliders: slidersReducer,
	routing: routerReducer
});

export default movieApp;