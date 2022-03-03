import {Link, useLocation, useNavigate} from 'react-router-dom';
import {FilmDataType} from '../../types/types';
import PageHeader from '../main/header-film-card/page-header';
import {AppRoute} from '../utils/const';

import {getRatingLevel, getStarringArrayToString} from '../utils/utils';

function MoviePage() {
  const navigate = useNavigate();
  const filmData = useLocation().state as FilmDataType;
  const {id, name, genre, released, backgroundImage, posterImage, rating, scoresCount, description, director, starring}: FilmDataType = filmData;

  const navigateToVideoPlayerClickHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
    navigate(AppRoute.DefaultVideoPlayer);
  };


  return (
    <section className="film-card film-card--full">
      <div className="film-card__hero">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <PageHeader />

        <div className="film-card__wrap">
          <div className="film-card__desc">
            <h2 className="film-card__title">{name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{genre}</span>
              <span className="film-card__year">{released}</span>
            </p>

            <div className="film-card__buttons">
              <button onClick={navigateToVideoPlayerClickHandler} className="btn btn--play film-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list film-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
              <Link to={`${AppRoute.Film}/${id}/${AppRoute.AddReview}`} className="btn film-card__button" state={filmData}>Add review</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="film-card__wrap film-card__translate-top">
        <div className="film-card__info">
          <div className="film-card__poster film-card__poster--big">
            <img src={posterImage} alt={name} width="218" height="327" />
          </div>

          <div className="film-card__desc">
            <nav className="film-nav film-card__nav">
              <ul className="film-nav__list">
                <li className="film-nav__item film-nav__item--active">
                  <a href="#todo" className="film-nav__link">Overview</a>
                </li>
                <li className="film-nav__item">
                  <a href="#todo" className="film-nav__link">Details</a>
                </li>
                <li className="film-nav__item">
                  <a href="#todo" className="film-nav__link">Reviews</a>
                </li>
              </ul>
            </nav>

            <div className="film-rating">
              <div className="film-rating__score">{rating}</div>
              <p className="film-rating__meta">
                <span className="film-rating__level">{getRatingLevel(rating)}</span>
                <span className="film-rating__count">{`${scoresCount} ratings`}</span>
              </p>
            </div>

            <div className="film-card__text">
              <p>{description}</p>

              <p className="film-card__director"><strong>{`Director: ${director}`}</strong></p>

              <p className="film-card__starring"><strong>{`Starring: ${getStarringArrayToString(starring)}`}</strong></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MoviePage;
