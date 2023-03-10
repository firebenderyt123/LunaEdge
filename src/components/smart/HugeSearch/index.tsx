import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchMovies } from "@store/effects/movieEffects/searchMovies";
import { postsPerPage } from "@config/siteConfig";
import { MovieList } from "@components/ordinary";

const HugeSearch: React.FC = () => {
  const { movies, loading, error } = useSelector((state) => state.searchMovies);

  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  console.log(totalResults);

  const totalPages = Math.ceil(totalResults / postsPerPage);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchTerm) {
      dispatch(searchMovies(searchTerm, currentPage));
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    dispatch(searchMovies(searchTerm, pageNumber));
  };

  useEffect(() => {
    setTotalResults(movies.totalResults);
  }, [movies.totalResults]);

  return (
    <>
      <div className="w-100 my-5">
        <form className="d-flex flex-row gap-3" onSubmit={handleSearch}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search movies"
            className="form-control"
          />
          <button className="btn btn-dark" type="submit">
            Search
          </button>
        </form>
      </div>
      {movies.Search && (
        <MovieList movies={movies.Search} loading={loading} error={error} />
      )}
      {totalResults > 0 && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => ++i).map(
            (pageNumber) => (
              <button
                key={pageNumber}
                disabled={currentPage === pageNumber}
                onClick={() => handlePageClick(pageNumber)}
              >
                {pageNumber}
              </button>
            )
          )}
        </div>
      )}
    </>
  );
};

export default HugeSearch;
