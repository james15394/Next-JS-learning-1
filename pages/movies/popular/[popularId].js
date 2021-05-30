import styles from "../../../styles/MovieSingle.module.css";
import Image from "next/image";


export async function getStaticPaths() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  );
  const movies = await res.json();
  const paths = movies.results.map((movie) => ({
    params: { popularId: movie.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const res = await fetch(`
https://api.themoviedb.org/3/movie/${params.popularId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
  const movie = await res.json();
  return { props: { movie } };
}
const Detail = ({ movie }) => {
  return (
    <div key={movie.id} className={styles.movie__single}>
      <div className={styles.inner}>
         <Image
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          width={500}
          height={400}
        />
        <h3>{movie?.title}</h3>
        <p>{movie?.overview}</p>
      </div>
    </div>
  );
};

export default Detail;
