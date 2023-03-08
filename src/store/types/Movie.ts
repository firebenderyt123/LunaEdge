import { Action } from "@actions/movieActions/searchMovies";
import { ThunkAction } from "redux-thunk";
import { State } from "@reducers/moviesReducers/searchMovies";

export default type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  State,
  unknown,
  Action
>;
