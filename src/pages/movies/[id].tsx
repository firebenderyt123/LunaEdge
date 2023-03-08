// import { GetStaticPaths, GetStaticProps } from "next";
// import { useSelector } from "react-redux";
import { useRouter } from "next/router";

interface MovieProps {
  movie: any;
}

export default function MoviePage({ movie }: MovieProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return <div id={`movie-${movie.imdbID}`}>Hello</div>;
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   const { movies, loading, error } = useSelector((state) => state.searchMovies);

//   const paths = movies.map((movie) => ({
//     params: { id: movie.imdbID },
//   }));

//   return { paths, fallback: true };
// };

// export const getStaticProps: GetStaticProps = async () => {
//   const { movies, loading, error } = useSelector((state) => state.searchMovies);

//   return {
//     props: { movies },
//     revalidate: 60,
//   };
// };
