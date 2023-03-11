import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchMovies } from "@store/effects/movieEffects/searchMovies";
import { postsPerPage, maxPagination } from "@config/siteConfig";
import { MovieList } from "@components/ordinary";
import { Pagination } from "@components/simple";

const HugeSearch: React.FC = () => {
  const { movies, loading, error } = useSelector((state) => state.searchMovies);

  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const totalPages = Math.ceil(totalResults / postsPerPage);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchTerm) {
      setCurrentPage(1);
      dispatch(searchMovies(searchTerm, 1));
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
          <button className="btn btn-warning" type="submit">
            Search
          </button>
        </form>
      </div>
      {movies.Search && (
        <MovieList movies={movies.Search} loading={loading} error={error} />
      )}
      {totalResults > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageClick={handlePageClick}
        />
      )}
    </>
  );
};

export default HugeSearch;
