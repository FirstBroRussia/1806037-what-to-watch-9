/* eslint-disable no-console */
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
import {FilmDataType} from '../../types/types';
import FooterElement from '../layout/footer-layout';
import PageHeader from '../main/header-film-card/page-header';
import {AppRoute, AuthorizationValue, HashFilmInfo} from '../../utils/const';
import LikeThisFilmsElement from './like-this-films/like-this-films';

import MoviePageOverviewElement from './movie-page-overview/movie-page-overview';
import MoviePageDetailsElement from './movie-page-details/movie-page-details';
import MoviePageReviewsElement from './movie-page-reviews/movie-page-reviews';
import {useAppDispatch, useAppSelector} from '../../store/store';
import {fetchGetIdFilmAction} from '../../api/api-action';
import {setFilmIdDataAction} from '../../store/actions';
import TabListElement from './tab-list-element';
import {browserHistory} from '../../utils/browser-history';
import {getIdFilmFromCurrentPathLocation} from '../../utils/utils';

function MoviePage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const selector = useAppSelector;
  const location = useLocation();
  const currentPath = location.pathname;
  const hashLocation: string = location.hash;
  const idFilm = getIdFilmFromCurrentPathLocation(location.pathname) as unknown as number;
  const authStatus = selector((state) => state.authorizationStatus);

  useEffect(() => {
    dispatch(fetchGetIdFilmAction(idFilm));
    return () => {
      if (browserHistory.location.pathname === currentPath) {
        return;
      }
      dispatch(setFilmIdDataAction(null));
    };
  }, [currentPath, dispatch, idFilm]);

  const idFilmData: FilmDataType | null = selector((state) => state.idFilmData);

  const handleNavigateToVideoPlayerClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    navigate(`${AppRoute.VideoPlayer}/${idFilm}`, {state: idFilm});
  };

  const handleAddReviewLinkClick: React.MouseEventHandler<HTMLAnchorElement> = (evt) => {
    evt.preventDefault();
    if (authStatus === AuthorizationValue.Auth) {
      navigate(`${AppRoute.Film}/${idFilm}/${AppRoute.AddReview}`);
      return;
    }
    navigate(AppRoute.SignIn);
  };

  const getCurrentInfoBlock = () => {
    switch (true) {
      case (hashLocation === HashFilmInfo.Overview) : {
        return <MoviePageOverviewElement />;}
      case (hashLocation === HashFilmInfo.Details) : {
        return <MoviePageDetailsElement />;}
      case (hashLocation === HashFilmInfo.Reviews) : {
        return <MoviePageReviewsElement idFilm={idFilm}/>;}
      default: throw new Error('Невалидное значение');
    }
  };

  if (idFilmData === null) {
    return (
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <PageHeader />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">

              </h2>
              <p className="film-card__meta">
                <span className="film-card__genre"></span>
                <span className="film-card__year"></span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
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
                <Link to="#" className="btn film-card__button" >Add review</Link>
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
                <TabListElement hash={hashLocation}/>
              </nav>

            </div>
          </div>
        </div>
      </section>
    );
  }

  const {name, genre, released, backgroundImage, posterImage}: FilmDataType = idFilmData;

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
                <Link onClick={handleAddReviewLinkClick} to="#" className="btn film-card__button" state={idFilm}>Add review</Link>
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
                <TabListElement hash={hashLocation}/>
              </nav>

              {
                getCurrentInfoBlock()
              }

            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <LikeThisFilmsElement idFilm={idFilm}/>
        <FooterElement />
      </div>
    </>
  );
}

export default MoviePage;
