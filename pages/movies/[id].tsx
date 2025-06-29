import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "@/lib/axios";
import MovieReviewList from "@/components/MovieReviewList";

interface Movie {
  id: number;
  title: string;
}

// interface MovieReview {

// }

export default function Movie() {
  const [movie, setMovie] = useState<Movie>();
  const [movieReviews, setMovieReviews] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  async function getMovieDetail(targetId: string | string[]) {
    const res = await axios.get(`/movies/${targetId}`);
    const data = res.data;
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

  return (
    <div>
      <h2>영화 {id} 상세</h2>
      <h3>{movie?.title}</h3>
      {/* <MovieReviewList movieReviews={movieReviews} /> */}
    </div>
  );
}
