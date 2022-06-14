import { useEffect, useState } from 'react';
import SEO from '../components/SEO';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '0609f8b4c3d282d09fbdeddc1330fafc';

export default function Home() {
  const [movies, setMovies] = useState();

  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko`)
      ).json();
      setMovies(results);
    })();
  }, []);

  console.log(movies);

  return (
    <div className="container">
      <SEO title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies?.map(movie => (
        <div className="movie" key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
          <h4>{movie.title}</h4>
        </div>
      ))}
      <style jsx>
        {`
          .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 20px;
            gap: 20px;
          }
          .movie img {
            max-width: 100%;
            border-radius: 12px;
            transition: transform 0.2s ease-in-out;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
            aspect-ratio: 2 / 3;
          }
          .movie:hover img {
            transform: scale(1.05) translateY(-10px);
          }
          .movie h4 {
            font-size: 18px;
            text-align: center;
          }
        `}
      </style>
    </div>
  );
}
