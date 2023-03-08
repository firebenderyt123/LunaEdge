import React from "react";
import { Image } from "@components/ui";
import Link from "next/link";

export default function MovieCard({ movie }) {
  return (
    <div id={`movie-${movie.imdbID}`} className="card max-w-300 m-auto">
      <div className="">
        <Image
          src={movie.Poster}
          className="card-img-top"
          alt={movie.Title}
          width="300"
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{movie.Title}</h5>
        <p className="card-text year">{movie.Year}</p>
        <p className="card-text">{movie.Description}</p>
        <Link href={`/movies/${movie.imdbID}`} className="btn btn-primary">
          Go somewhere
        </Link>
      </div>
    </div>
  );
}
