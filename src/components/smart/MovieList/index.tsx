import { useSelector } from "react-redux";
import { MovieCard, Loader } from "@components/simple";

export default function MovieList() {
  const { movies, loading, error } = useSelector((state) => state.searchMovies);

  const loadingBlock = loading ? <Loader /> : null;
  const errorBlock = error ? <div>{error}</div> : null;
  const contentBlock =
    movies.length > 0 ? (
      <div className="row d-flex justify-content-center">
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            className="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2 mb-3"
          >
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    ) : null;

  return (
    <>
      {loadingBlock}
      {errorBlock}
      {contentBlock}
    </>
  );
}
