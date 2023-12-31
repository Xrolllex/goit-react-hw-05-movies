import { lazy, Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import css from '../App/App.module.css';

const Home = lazy(() => import('../Home/Home'));
const Movies = lazy(() => import('../Movies/Movies'));
const MovieDetails = lazy(() => import('../Details/MovieDetails'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));



export const App = () => {
  return (
    <>
      <nav className={css.navbar}>
        <Link to="/" className={css.navbar__link}>
          Home
        </Link>
        <Link to="/movies" className={css.navbar__link}>
          Movies
        </Link>
      </nav>
      <Suspense fallback={<div>Loading......</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
};