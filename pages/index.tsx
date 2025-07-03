import MovieList from "@/components/MovieList";
import SearchForm from "@/components/SearchForm";
import styles from "@/styles/Home.module.css";
import axios from "@/lib/axios";

interface Movie {
  id: number;
  title: string;
  year: number;
}

interface Movies {
  results: Movie[];
}

interface HomeProps {
  movies: Movies;
}

export const getStaticProps = async () => {
  const res = await axios.get<Movies>("/movies");
  const movies = res.data.results;

  return {
    props: {
      movies,
    },
  };
};

export default function Home({ movies }: HomeProps) {
  return (
    <>
      <SearchForm />
      <MovieList className={styles.movieList} movies={movies} />
    </>
  );
}
