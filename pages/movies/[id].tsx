import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "@/lib/axios";
import MovieReviewList from "@/components/MovieReviewList";
import styles from "@/styles/Movie.module.css";
import Image from "next/image";
import Head from "next/head";

interface MovieType {
  id?: number;
  title: string;
  posterUrl: string;
}

// interface MovieReview {

// }

export default function Movie() {
  const [movie, setMovie] = useState<MovieType>();
  const [movieReviews, setMovieReviews] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  async function getMovieDetail(targetId: string | string[]) {
    const res = await axios.get(`/movies/${targetId}`);
    const data = res.data;
    console.log(data);
    setMovie(data);
  }

  // async function getMovieReviews(targetId: string | string[]) {
  //   const res = await axios.get(`/movie_reviews/${targetId}`);
  //   const data = res.data.results;
  //   setMovieReviews(data);
  // }

  useEffect(() => {
    if (!id) return;
    getMovieDetail(id);
    // getMovieReviews(id);
  }, [id]);

  if (!movie) return null; // useState 초기값이 없을 경우, movie 객체가 undefined일 경우를 대비해 컴포넌트 early return => ts 컴파일 에러 방지

  return (
    <>
      <Head>
        <title>{movie.title} - Watchit</title>
      </Head>
      <div>
        <h2>영화 {id} 상세</h2>
        <h3>{movie.title}</h3>
        <div className={styles.image}>
          <Image src={movie.posterUrl} alt={movie.title} fill />
        </div>
        {/* <MovieReviewList movieReviews={movieReviews} /> */}
      </div>
    </>
  );
}
