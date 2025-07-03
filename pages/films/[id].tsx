import React from "react";
import axios from "@/lib/axios";
import styles from "@/styles/Movie.module.css";
import MovieReviewList from "@/components/MovieReviewList";
import Spinner from "@/components/Spinner";
import Image from "next/image";

interface Movie {
  id: string | number;
  title: string;
  posterUrl: string;
}

interface MovieReviews {}

export const getServerSideProps = async (context: {
  params: { [x: string]: string | number };
}) => {
  const movieId = context.params["id"];
  let movie: Movie;

  try {
    const res = await axios.get(`/movies/${movieId}`);
    movie = res.data;
  } catch {
    return {
      notFound: true,
    };
  }

  let movieReviews;
  try {
    const res = await axios.get(`/movie_reviews/?movie_id=${movieId}`);
    movieReviews = res.data.results ?? [];
  } catch {
    movieReviews = [];
  }

  return {
    props: {
      movie,
      movieReviews,
    },
  };
};

interface MovieProps {
  movie: Movie;
  movieReviews: MovieReviews;
}

export default function Movie({ movie, movieReviews }: MovieProps) {
  if (!movie)
    return (
      <div className={styles.loading}>
        <Spinner />
        <p>로딩중입니다. 잠시만 기다려주세요.</p>
      </div>
    );

  return (
    <>
      <h2>영화 {movie.id} 상세</h2>
      <h3>{movie.title}</h3>
      <div className={styles.image}>
        <Image src={movie.posterUrl} alt={movie.title} fill />
      </div>
      <MovieReviewList movieReviews={movieReviews} />
    </>
  );
}
