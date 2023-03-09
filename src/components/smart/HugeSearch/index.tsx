import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchMovies } from "@store/effects/movieEffects/searchMovies";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchTerm) {
      dispatch(searchMovies(searchTerm));
      setSearchTerm("");
    }
  };

  return (
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
  );
};

export default Search;
