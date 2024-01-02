import React, { useEffect, useState } from 'react';
import css from '../MovieDetails/MovieDetails.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { getMovieCredits } from '../../Api';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { movieId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!movieId) {
      navigate('/'); 
      return;
    }

    const fetchMovieCredits = async () => {
      setIsLoading(true);
      try {
        const response = await getMovieCredits(movieId);
        setCast(response.cast);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setCast([]);
        console.log('Error fetching movie credits:', error);
      }
    };

    fetchMovieCredits();
  }, [movieId, navigate]);

  return (
    <div className={css.castMargin}>
      <h2>Cast</h2>
      {isLoading ? (
        <div>Loading cast...</div>
      ) : cast.length > 0 ? (
        cast.map((actor) => (
          <div key={actor.id} className={css.castItem}>
            {actor.profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                alt={actor.name}
                className={css.castImage}
              />
            )}
            <div>
              <h4>{actor.name}</h4>
              <p>{actor.character}</p>
            </div>
          </div>
        ))
      ) : (
        <div>No cast available</div>
      )}
    </div>
  );
};

export default Cast;
