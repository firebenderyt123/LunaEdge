import { Action, ActionTypes } from "@store/actions/movieActions/getMovieInfo";
import { Movie } from "@types/Movie";

export interface State {
  movie: Movie | null;
  loading: boolean;
  error: string | null;
}

export const initialState: State = {
  movie: null,
  loading: false,
  error: null,
};

export const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.GET_MOVIE_REQUEST:
      return { ...state, loading: true, error: null };
    case ActionTypes.GET_MOVIE_SUCCESS:
      return { ...state, loading: false, movie: action.payload };
    case ActionTypes.GET_MOVIE_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
