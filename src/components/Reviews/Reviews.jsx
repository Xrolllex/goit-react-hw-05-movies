import React, { useEffect, useState } from 'react';
import css from '../MovieDetails/MovieDetails.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { getMovieReviews } from '../../Api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { movieId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!movieId) {
      navigate('/');
      return;
    }

    const fetchMovieReviews = async () => {
      setIsLoading(true);
      try {
        const response = await getMovieReviews(movieId);
        setReviews(response.results);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setReviews([]);
        console.log('Error fetching movie reviews:', error);
      }
    };

    fetchMovieReviews();
  }, [movieId, navigate]);

  return (
    <div className={css.reviewsMargin}>
      <h2>Reviews</h2>
      {isLoading ? (
        <div>Loading reviews...</div>
      ) : reviews.length > 0 ? (
        reviews.map((review) => (
          <div key={review.id}>
            <h4>{review.author}</h4>
            <p>{review.content}</p>
          </div>
        ))
      ) : (
        <div>No reviews available</div>
      )}
    </div>
  );
};

export default Reviews;
