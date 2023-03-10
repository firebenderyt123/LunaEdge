import React from "react";
import { MovieCard, Loader, Error } from "@components/simple";

const MovieList: React.FC = ({ movies, loading, error }) => {
  const loadingBlock = loading ? <Loader /> : null;
  const errorBlock = error ? <Error>{error}</Error> : null;
  const contentBlock = !(error || loading) ? (
    <>
      {movies.map((movie) => (
        <div
          key={movie.imdbID}
          className="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2 mb-3"
        >
          <MovieCard movie={movie} />
        </div>
      ))}
    </>
  ) : null;

  return (
    <div className="row d-flex justify-content-center">
      {errorBlock}
      {contentBlock}
      {loadingBlock}
    </div>
  );
};

export default MovieList;
