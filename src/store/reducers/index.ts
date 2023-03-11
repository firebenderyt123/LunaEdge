import { combineReducers } from "redux";
import { reducer as searchMoviesReducer } from "./movieReducers/searchMovies";
import { reducer as getMovieInfoReducer } from "./movieReducers/getMovieInfo";

const reducer = combineReducers({
  searchMovies: searchMoviesReducer,
  getMovieInfo: getMovieInfoReducer,
});

export default reducer;
