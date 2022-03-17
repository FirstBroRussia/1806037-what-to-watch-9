/* eslint-disable no-console */
import {Link, Outlet, useLocation, useNavigate} from 'react-router-dom';
import {FilmDataType, TemporaryInputDataType} from '../../types/types';
import FooterElement from '../layout/footer-layout';
import PageHeader from '../main/header-film-card/page-header';
import {AppRoute} from '../utils/const';
import LikeThisFilms from './like-this-films';

function MoviePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const inputData = location.state as TemporaryInputDataType;
  console.log(location);
  const idFilm: number = inputData[0];
  const filmData: FilmDataType = inputData[1];
  const {name, genre, released, backgroundImage, posterImage}: FilmDataType = filmData;

  const navigateToVideoPlayerClickHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
    navigate(`${AppRoute.VideoPlayer}/${idFilm}`, {state: filmData});
  };

  const handleOverviewLinkClick: React.MouseEventHandler<HTMLAnchorElement> = (evt) => {
    evt.preventDefault();
    const currentLocation: string = location.pathname;
    const compositeCurrentLocation = `${AppRoute.Film}/${idFilm}`;
    if (currentLocation === compositeCurrentLocation) {
      return;
    }
    navigate(compositeCurrentLocation, {state: inputData});
  };

  const handleDetailsLinkClick: React.MouseEventHandler<HTMLAnchorElement> = (evt) => {
    evt.preventDefault();
    const currentLocation: string = location.pathname;
    const compositeCurrentLocation = `${AppRoute.Film}/${idFilm}${AppRoute.DetailsFilm}`;
    if (currentLocation === compositeCurrentLocation) {
      return;
    }
    navigate(compositeCurrentLocation, {state: inputData});
  };

  const handleReviewsLinkClick: React.MouseEventHandler<HTMLAnchorElement> = (evt) => {
    evt.preventDefault();
    const currentLocation: string = location.pathname;
    const compositeCurrentLocation = `${AppRoute.Film}/${idFilm}/${AppRoute.ReviewsFilm}`;
    if (currentLocation === compositeCurrentLocation) {
      return;
    }
    navigate(compositeCurrentLocation, {state: inputData});
  };

  return (
    <>
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
                <Link to={`${AppRoute.Film}/${idFilm}/${AppRoute.AddReview}`} className="btn film-card__button" state={filmData}>Add review</Link>
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
                    <Link onClick={handleOverviewLinkClick} to="#todo" className="film-nav__link">Overview</Link>
                  </li>
                  <li className="film-nav__item">
                    <Link onClick={handleDetailsLinkClick} to="#todo" className="film-nav__link">Details</Link>
                  </li>
                  <li className="film-nav__item">
                    <Link onClick={handleReviewsLinkClick} to="#todo" className="film-nav__link">Reviews</Link>
                  </li>
                </ul>
              </nav>

              <Outlet />

            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <LikeThisFilms />
        <FooterElement />
      </div>
    </>
  );
}

export default MoviePage;
