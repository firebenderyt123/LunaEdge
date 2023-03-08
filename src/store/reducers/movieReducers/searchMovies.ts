import { Action, ActionTypes } from "@store/actions/movieActions/searchMovies";
import { Movie } from "@types/Movie";

export interface State {
  movies: Movie[];
  loading: boolean;
  error: string | null;
}

export const initialState: State = {
  movies: [],
  loading: false,
  error: null,
};

export const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.SEARCH_MOVIES_REQUEST:
      return { ...state, loading: true, error: null };
    case ActionTypes.SEARCH_MOVIES_SUCCESS:
      return { ...state, loading: false, movies: action.payload };
    case ActionTypes.SEARCH_MOVIES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
