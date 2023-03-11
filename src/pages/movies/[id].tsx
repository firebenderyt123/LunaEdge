import { useEffect } from "react";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

import { getMovieInfo } from "@store/effects/movieEffects/getMovieInfo";
import { Loader, Error } from "@components/simple";
import { Image } from "@components/ui";

const InfoBlock = ({ name, value }) => {
  return value !== "N/A" && value !== "" && value !== null ? (
    <p className="my-0">
      {name}
      <span>{value}</span>
    </p>
  ) : null;
};

const MoviePage: NextPage = ({ movieId }) => {
  const router = useRouter();
  const { movie, loading, error } = useSelector((state) => state.getMovieInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieInfo(movieId));
  }, [movieId]);

  const errorBlock = error ? <Error>{error}</Error> : null;
  const loadingBlock = loading || router.isFallback ? <Loader /> : null;
  const contentBlock = !(loading || error || !movie) ? (
    <div
      id={`movie-${movie.imdbID}`}
      className="row d-flex justify-content-center m-auto"
    >
      <div className="d-flex flex-column flex-sm-row col-12 col-md-11 col-lg-10 col-xl-10 col-xxl-7">
        <div className="w-auto">
          <div className="poster position-relative m-0 me-sm-3">
            <Image src={movie.Poster} className="rounded" />
            <div className="rate-mark rounded-circle bg-warning text-primary p-3">
              <b className="text-black">{movie.imdbRating}</b>
            </div>
          </div>
        </div>
        <div className="w-auto">
          <div className="info col-12 mb-2 mt-3 mb-sm-3 mt-sm-0">
            <InfoBlock name="Genre: " value={movie.Genre} />
            <InfoBlock name="Country: " value={movie.Country} />
            <InfoBlock name="Released: " value={movie.Released} />
            <InfoBlock name="Runtime: " value={movie.Runtime} />
            <InfoBlock
              name="Rating: "
              value={movie.Ratings.length ? movie.Ratings[0].Value : null}
            />
            <InfoBlock name="Language: " value={movie.Language} />
            <InfoBlock name="Awards: " value={movie.Awards} />
            <InfoBlock name="BoxOffice: " value={movie.BoxOffice} />
            <InfoBlock name="Director: " value={movie.Director} />
            <InfoBlock name="Production: " value={movie.Production} />
            <InfoBlock name="Actors: " value={movie.Actors} />
            <InfoBlock name="Writer: " value={movie.Writer} />
          </div>
        </div>
      </div>
      <div className="info-2 col-12 col-md-11 col-lg-10 col-xl-10 col-xxl-7 mt-3">
        <h2>{movie.Title}</h2>
        <InfoBlock value={movie.Plot} />
      </div>
    </div>
  ) : null;

  return (
    <>
      {errorBlock}
      {contentBlock}
      {loadingBlock}
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      movieId: params.id,
    },
  };
};

export default MoviePage;
