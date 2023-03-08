import { Dispatch } from "redux";
import {
  searchMoviesRequest,
  searchMoviesSuccess,
  searchMoviesFailure,
} from "@store/actions/movieActions/searchMovies";
import { AppThunk } from "@store/types/searchMovies";
import { searchMovies as searchMoviesApi } from "@api/omdbApi";

export const searchMovies = (query: string): AppThunk => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(searchMoviesRequest());
      const response = await searchMoviesApi(query);
      if (response.Response === "True") {
        dispatch(searchMoviesSuccess(response.Search));
      } else {
        dispatch(searchMoviesFailure(response.Error));
      }
    } catch (error) {
      dispatch(
        searchMoviesFailure("An error occurred while searching for movies")
      );
    }
  };
};
