import { Movie } from "@store/types/Movie";

export enum ActionTypes {
  SEARCH_MOVIES_REQUEST = "SEARCH_MOVIES_REQUEST",
  SEARCH_MOVIES_SUCCESS = "SEARCH_MOVIES_SUCCESS",
  SEARCH_MOVIES_FAILURE = "SEARCH_MOVIES_FAILURE",
}

interface SearchMoviesRequestAction {
  type: ActionTypes.SEARCH_MOVIES_REQUEST;
}

interface SearchMoviesSuccessAction {
  type: ActionTypes.SEARCH_MOVIES_SUCCESS;
  payload: Movie[];
}

interface SearchMoviesFailureAction {
  type: ActionTypes.SEARCH_MOVIES_FAILURE;
  payload: string;
}

export type Action =
  | SearchMoviesRequestAction
  | SearchMoviesSuccessAction
  | SearchMoviesFailureAction;

export const searchMoviesRequest = (): SearchMoviesRequestAction => ({
  type: ActionTypes.SEARCH_MOVIES_REQUEST,
});

export const searchMoviesSuccess = (
  movies: Movie[]
): SearchMoviesSuccessAction => ({
  type: ActionTypes.SEARCH_MOVIES_SUCCESS,
  payload: movies,
});

export const searchMoviesFailure = (
  error: string
): SearchMoviesFailureAction => ({
  type: ActionTypes.SEARCH_MOVIES_FAILURE,
  payload: error,
});
