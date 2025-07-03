import React from "react";
import SearchForm from "@/components/SearchForm";
import axios from "@/lib/axios";
import MovieList from "@/components/MovieList";

interface Movie {
  id: number;
  title: string;
  year: number;
}

interface Movies {
  results: Movie[];
}

interface SearchProps {
  movies: Movies;
  keyword: string;
}

export const getServerSideProps = async (context: {
  query: { [x: string]: string };
}) => {
  const keyword = context.query["keyword"];
  const res = await axios.get(`/movies?q=${keyword}`);
  const movies = res.data.results;

  return {
    props: {
      movies,
      keyword,
    },
  };
};

export default function Search({ movies, keyword }: SearchProps) {
  return (
    <section>
      <h2>검색 페이지</h2>
      <SearchForm initialValue={typeof keyword === "string" ? keyword : ""} />
      <h3>{keyword} 검색 결과</h3>
      <MovieList movies={movies} />
    </section>
  );
}
