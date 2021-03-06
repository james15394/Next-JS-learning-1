import styles from "../../../styles/MovieSingle.module.css";

export async function getStaticPaths() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  );
  const movies = await res.json();
  const paths = movies.results.map((movie) => ({
    params: { id: movie.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const res = await fetch(`
https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
  const movie = await res.json();
  return { props: { movie } };
}
const Detail = ({ movie }) => {
  return (
    <div key={movie.id} className={styles.movie__single}>
      <div className={styles.inner}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          alt={movie.title}
        />
        <h3>{movie.title}</h3>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default Detail;
