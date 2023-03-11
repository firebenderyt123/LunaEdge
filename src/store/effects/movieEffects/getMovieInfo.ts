import { Dispatch } from "redux";
import {
  getMovieRequest,
  getMovieSuccess,
  getMovieFailure,
} from "@store/actions/movieActions/getMovieInfo";
import { AppThunk } from "@store/types/Movie";
import { getMovieById } from "@api/omdbApi";

export const getMovieInfo = (query: string): AppThunk => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getMovieRequest());
      const response = await getMovieById(query);
      if (response.Response === "True") {
        dispatch(getMovieSuccess(response));
      } else {
        dispatch(getMovieFailure(response.Error));
      }
    } catch (error) {
      dispatch(getMovieFailure("An error occurred while searching for movies"));
    }
  };
};
