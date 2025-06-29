import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import SearchForm from "@/components/SearchForm";
import axios from "@/lib/axios";
import MovieList from "@/components/MovieList";

export default function Search() {
  const router = useRouter();
  const { keyword } = router.query;
  const [movies, setMovies] = useState([]);

  async function getMovies(query: string | string[] | undefined) {
    const res = await axios.get(`/movies?q=${query}`);
    const data = res.data.results;
    setMovies(data);
  }

  useEffect(() => {
    getMovies(keyword);
  }, [keyword]);

  return (
    <section>
      <h2>검색 페이지</h2>
      <SearchForm initialValue={typeof keyword === "string" ? keyword : ""} />
      <h3>{keyword} 검색 결과</h3>
      <MovieList movies={movies} />
    </section>
  );
}
