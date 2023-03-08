import { combineReducers } from "redux";
import { reducer as searchMoviesReducer } from "./movieReducers/searchMovies";

const reducer = combineReducers({
	searchMovies: searchMoviesReducer,
});

export default reducer;
