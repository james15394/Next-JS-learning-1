import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  );
  const data = await res.json();
  return {
    props: { movies: data.results },
  };
}

export default function Home({ movies }) {
  return (
    <div className={styles.home}>
      <Head>
        <title>Movies | Top-rated</title>
      </Head>
      <h3 className={styles.type}>Top rated movies</h3>
      <div className={styles.movies__container}>
        {movies.map((movie) => (
          <div key={movie.id} className={styles.movie}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              alt={movie.title}
              className={styles.img}
            />
            <Link href={"/movies/topRated/" + movie.id}>
              <a className={styles.title}>{movie.title}</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
