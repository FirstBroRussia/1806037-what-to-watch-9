/* eslint-disable no-console */
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {useEffect, useRef, useState} from 'react';
import {FilmDataType} from '../../types/types';
import FooterElement from '../layout/footer-layout';
import PageHeader from '../main/header-film-card/page-header';
import {ACTIVE_LINK_FROM_MOVIE_PAGE, AppRoute, hashFilmInfo} from '../utils/const';
import LikeThisFilms from './like-this-films';

import MoviePageOverviewElement from './movie-page-overview/movie-page-overview';
import MoviePageDetailsElement from './movie-page-details/movie-page-details';
import MoviePageReviewsElement from './movie-page-reviews/movie-page-reviews';
import {toggleStyleToElement} from '../utils/utils';
import {getFilm} from '../../fetch/request-to-server';


function MoviePage() {
  const navigate = useNavigate();
  const [state, setState] = useState(null);

  const location = useLocation();
  const hashLocation = location.hash;

  const reference = useRef(null);

  const idFilm = location.state as number;

  let currentSelectedLink: Element;

  useEffect(() => {
    (async () => {
      const response = await getFilm(idFilm);
      setState(response);
    })();
  }, [setState, idFilm]);

  const setSelectedLink = (hash: string): void => {
    if (reference.current === null) {
      throw new Error ('Невалидное значение');
    }
    const currentReference = reference.current as Element;
    const linkList = currentReference.children;
    for (const item of linkList) {
      if (item.id === hash) {
        item.classList.add(ACTIVE_LINK_FROM_MOVIE_PAGE);
        currentSelectedLink = item;
        break;
      }
    }
  };

  const actionsForTargetLink = (targetElement: Element): void => {
    const prevSelectedElement = currentSelectedLink;
    const currentTargetLink: Element | null = targetElement.parentElement;
    if (currentTargetLink === null) {
      throw new Error ('Невалидное значение');
    }
    currentSelectedLink = currentTargetLink;
    toggleStyleToElement({
      prevElement: prevSelectedElement,
      currElement: currentTargetLink,
      style: ACTIVE_LINK_FROM_MOVIE_PAGE,
    });
  };

  const handleNavigateToVideoPlayerClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    navigate(`${AppRoute.VideoPlayer}/${idFilm}`, {state: idFilm});
  };


  const handleOverviewLinkClick: React.MouseEventHandler<HTMLAnchorElement> = (evt) => {
    evt.preventDefault();
    const compositeCurrentLocation = `${AppRoute.Film}/${idFilm}${AppRoute.OverviewFilm}`;
    if (hashLocation === hashFilmInfo.Overview) {
      return;
    }
    const targetElement = evt.target as Element;
    actionsForTargetLink(targetElement);
    navigate(compositeCurrentLocation, {state: idFilm});
  };

  const handleDetailsLinkClick: React.MouseEventHandler<HTMLAnchorElement> = (evt) => {
    evt.preventDefault();
    const compositeCurrentLocation = `${AppRoute.Film}/${idFilm}${AppRoute.DetailsFilm}`;
    if (hashLocation === hashFilmInfo.Details) {
      return;
    }
    const targetElement = evt.target as Element;
    actionsForTargetLink(targetElement);
    navigate(compositeCurrentLocation, {state: idFilm});
  };

  const handleReviewsLinkClick: React.MouseEventHandler<HTMLAnchorElement> = (evt) => {
    evt.preventDefault();
    const compositeCurrentLocation = `${AppRoute.Film}/${idFilm}${AppRoute.ReviewsFilm}`;
    if (hashLocation === hashFilmInfo.Reviews) {
      return;
    }
    const targetElement = evt.target as Element;
    actionsForTargetLink(targetElement);
    navigate(compositeCurrentLocation, {state: idFilm});
  };


  const getCurrentInfoBlock = () => {
    switch (true) {
      case (hashLocation === hashFilmInfo.Overview) : {
        setSelectedLink(hashFilmInfo.Overview);
        return <MoviePageOverviewElement />;}
      case (hashLocation === hashFilmInfo.Details) : {
        setSelectedLink(hashFilmInfo.Details);
        return <MoviePageDetailsElement />;}
      case (hashLocation === hashFilmInfo.Reviews) : {
        setSelectedLink(hashFilmInfo.Reviews);
        return <MoviePageReviewsElement />;}
      default: throw new Error('Невалидное значение');
    }
  };

  if (state === null) {
    return (
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <PageHeader />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title"></h2>
              <p className="film-card__meta">
                <span className="film-card__genre"></span>
                <span className="film-card__year"></span>
              </p>

              <div className="film-card__buttons">
                <button onClick={handleNavigateToVideoPlayerClick} className="btn btn--play film-card__button" type="button">
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
                <Link to={`${AppRoute.Film}/${idFilm}/${AppRoute.AddReview}`} className="btn film-card__button" >Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul ref={reference} className="film-nav__list">
                  <li className="film-nav__item" id="#overview">
                    <Link to="#overview" className="film-nav__link">Overview</Link>
                  </li>
                  <li className="film-nav__item" id="#details">
                    <Link to="#details" className="film-nav__link">Details</Link>
                  </li>
                  <li className="film-nav__item" id="#reviews">
                    <Link to="#reviews" className="film-nav__link">Reviews</Link>
                  </li>
                </ul>
              </nav>

            </div>
          </div>
        </div>
      </section>
    );
  }

  const filmData = state as FilmDataType;
  const {name, genre, released, backgroundImage, posterImage}: FilmDataType = filmData;

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
                <button onClick={handleNavigateToVideoPlayerClick} className="btn btn--play film-card__button" type="button">
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
                <Link to={`${AppRoute.Film}/${idFilm}/${AppRoute.AddReview}`} className="btn film-card__button" state={idFilm}>Add review</Link>
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
                <ul ref={reference} className="film-nav__list">
                  <li className="film-nav__item" id="#overview">
                    <Link onClick={handleOverviewLinkClick} to="#todo" className="film-nav__link">Overview</Link>
                  </li>
                  <li className="film-nav__item" id="#details">
                    <Link onClick={handleDetailsLinkClick} to="#todo" className="film-nav__link">Details</Link>
                  </li>
                  <li className="film-nav__item" id="#reviews">
                    <Link onClick={handleReviewsLinkClick} to="#todo" className="film-nav__link">Reviews</Link>
                  </li>
                </ul>
              </nav>

              {
                getCurrentInfoBlock()
              }

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
