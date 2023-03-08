import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchMovies } from "@store/effects/movieEffects/searchMovies";

export default function Search() {
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
        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
