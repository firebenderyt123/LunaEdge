import { useSelector } from "react-redux";
import { MovieCard } from "@components/simple";

export default function MovieList() {
  const { movies, loading, error } = useSelector((state) => state.searchMovies);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="row d-flex justify-content-center">
      {movies.map((movie) => (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2 mb-3">
          <MovieCard key={movie.imdbID} movie={movie} />
        </div>
      ))}
    </div>
  );
}
