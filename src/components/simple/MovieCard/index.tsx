import React from "react";
import { Image } from "@components/ui";
import Link from "next/link";

export default function MovieCard({ movie }) {
  return (
    <div id={`movie-${movie.imdbID}`} className="card max-w-300 m-auto h-100">
      <div className="card-poster position-relative">
        <Link href={`/movies/${movie.imdbID}`}>
          <Image
            src={movie.Poster}
            className="card-img-top position-absolute w-100 h-100"
            alt={movie.Title}
            width="300"
          />
        </Link>
      </div>
      <div className="card-body d-flex flex-column justify-content-between">
        <div className="descr">
          <h5 className="card-title">
            <Link href={`/movies/${movie.imdbID}`}>{movie.Title}</Link>
          </h5>
          <p className="card-text text-gray-dark">{movie.Year}</p>
          <p className="card-text">{movie.Description}</p>
        </div>
        <div className="btn-group">
          <Link href={`/movies/${movie.imdbID}`} className="btn btn-dark">
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
