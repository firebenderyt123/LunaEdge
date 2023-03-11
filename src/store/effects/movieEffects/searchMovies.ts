import { Dispatch } from "redux";
import {
  searchMoviesRequest,
  searchMoviesSuccess,
  searchMoviesFailure,
} from "@store/actions/movieActions/searchMovies";
import { AppThunk } from "@store/types/Movie";
import { searchMovies as searchMoviesApi } from "@api/omdbApi";

export const searchMovies = (query: string, page: number): AppThunk => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(searchMoviesRequest());
      const response = await searchMoviesApi(query, page);
      if (response.Response === "True") {
        dispatch(searchMoviesSuccess(response));
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
