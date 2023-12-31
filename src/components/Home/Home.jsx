import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from '../Api/Api';

import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await getTrendingMovies();
        setMovies(response.results);
        setIsLoading(false);
      } catch (error) {
        console.log('Wystąpił błąd podczas pobierania popularnych filmów:', error);
        setError('Wystąpił błąd podczas pobierania filmów.');
        setIsLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={css.home}>
      <h1>Trending today</h1>
      {movies.length > 0 ? (
        movies.map(movie => (
          <div
            key={movie.id}
            className={css.movieItem}
          >
            <Link to={`/movies/${movie.id}`} className={css.movieLink}>
              <h3>{movie.title}</h3>
            </Link>
          </div>
        ))
      ) : (
        <div>No movies available</div>
      )}
    </div>
  );
};

export default Home;
