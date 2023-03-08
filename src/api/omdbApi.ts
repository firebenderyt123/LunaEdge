import axios from "axios";

import { OMDB_API_KEY } from "@config/omdbConfig";

export const searchMovies = async (query: string) => {
  const response = await axios.get(
    `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${query}`
  );

  if (response.status !== 200) {
    throw new Error("Failed to search movies");
  }

  return response.data;
};

export const getMovieById = async (id: string) => {
  const response = await axios.get(
    `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}`
  );

  if (response.status !== 200) {
    throw new Error("Failed to get movie by ID");
  }

  return response.data;
};
