import { Movie } from "@store/types/Movie";

export enum ActionTypes {
  GET_MOVIE_REQUEST = "GET_MOVIE_REQUEST",
  GET_MOVIE_SUCCESS = "GET_MOVIE_SUCCESS",
  GET_MOVIE_FAILURE = "GET_MOVIE_FAILURE",
}

interface GetMovieRequestAction {
  type: ActionTypes.GET_MOVIE_REQUEST;
}

interface GetMovieSuccessAction {
  type: ActionTypes.GET_MOVIE_SUCCESS;
  payload: Movie;
}

interface GetMovieFailureAction {
  type: ActionTypes.GET_MOVIE_FAILURE;
  payload: string;
}

export type Action =
  | GetMovieRequestAction
  | GetMovieSuccessAction
  | GetMovieFailureAction;

export const getMovieRequest = (): GetMovieRequestAction => ({
  type: ActionTypes.GET_MOVIE_REQUEST,
});

export const getMovieSuccess = (movie: Movie): GetMovieSuccessAction => ({
  type: ActionTypes.GET_MOVIE_SUCCESS,
  payload: movie,
});

export const getMovieFailure = (error: string): GetMovieFailureAction => ({
  type: ActionTypes.GET_MOVIE_FAILURE,
  payload: error,
});
