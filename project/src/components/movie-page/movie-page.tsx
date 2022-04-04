import {Link, useLocation, useNavigate, useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {FilmDataType, IdFilmType, SetStatusFavoriteFilmAsyncFilmParamsType} from '../../types/types';
import FooterElement from '../layout/footer-element';
import PageHeader from '../main/header-film-card/page-header';
import {AppRoute, AuthorizationValue, HashFilmInfo, NameSpace} from '../../utils/const';
import LikeThisFilms from './like-this-films/like-this-films';

import MoviePageOverview from './movie-page-overview/movie-page-overview';
import MoviePageDetails from './movie-page-details/movie-page-details';
import MoviePageReviews from './movie-page-reviews/movie-page-reviews';
import {useAppDispatch, useAppSelector} from '../../store/store';
import {fetchGetIdFilmAction, fetchSetStatusFavotiteFilmAction} from '../../api/api-action';
import TabListElement from './tab-list-element';
import {browserHistory} from '../../utils/browser-history';
import MyListSvg from '../my-list-svg/my-list-svg';
import {setFilmIdDataAction} from '../../store/slices/data-slice';

function MoviePage() {
  const params = useParams();
  const idFilm: IdFilmType = Number(params.id);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const currentPath: string = location.pathname;
  const hashLocation: string = location.hash;
  const authStatus = useAppSelector((state) => state[NameSpace.USER].authorizationStatus);

  useEffect(() => {
    dispatch(fetchGetIdFilmAction(idFilm));
    return () => {
      if (browserHistory.location.pathname === currentPath) {
        return;
      }
      dispatch(setFilmIdDataAction(null));
    };
  }, [currentPath, dispatch, idFilm]);

  const idFilmData: FilmDataType | null = useAppSelector(({DATA}) => DATA.idFilmData);

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

  const getCurrentInfoBlock = (): JSX.Element => {
    switch (hashLocation) {
      case (HashFilmInfo.Overview) : {
        return <MoviePageOverview />;}
      case (HashFilmInfo.Details) : {
        return <MoviePageDetails />;}
      case (HashFilmInfo.Reviews) : {
        return <MoviePageReviews idFilm={idFilm}/>;}
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

  const {name, genre, released, backgroundImage, posterImage, isFavorite}: FilmDataType = idFilmData;

  const handleMyListButtonClick: React.MouseEventHandler<HTMLButtonElement> = (evt) => {
    evt.preventDefault();
    const paramsData: SetStatusFavoriteFilmAsyncFilmParamsType = {
      idFilm: Number(idFilm),
      status: Number(!isFavorite),
    };
    dispatch(fetchSetStatusFavotiteFilmAction(paramsData));
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
                <button onClick={handleNavigateToVideoPlayerClick} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                {
                  (() => {
                    if (!(authStatus === AuthorizationValue.Auth)) {
                      return;
                    }
                    return (
                      <button onClick={handleMyListButtonClick} className="btn btn--list film-card__button" type="button">
                        <MyListSvg isFavorite={isFavorite}/>
                        <span>My list</span>
                      </button>
                    );
                  })()
                }
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
        <LikeThisFilms idFilm={idFilm}/>
        <FooterElement />
      </div>
    </>
  );
}

export default MoviePage;
