import {useLocation} from 'react-router-dom';
import {FilmDataType} from '../../types/types';
import {SubmitCommentForm} from './submit-comment-form';
import HeaderElement from '../layout/header-layout';
import SignOut from '../header/user-block/sign-out';
import BreadcrumbsElement from './breadcrumbs';
import {useEffect} from 'react';
import {getIdFilmFromCurrentPathLocation} from '../../utils/utils';
import {useAppDispatch, useAppSelector} from '../../store/store';
import {fetchGetIdFilmAction} from '../../api/api-action';
import {setFilmIdDataAction} from '../../store/actions';

function AddReview() {
  const dispatch = useAppDispatch();
  const selector = useAppSelector;
  const location = useLocation();
  const idFilm = getIdFilmFromCurrentPathLocation(location.pathname) as unknown as number;

  useEffect(() => {
    dispatch(fetchGetIdFilmAction(idFilm));
    return () => {
      dispatch(setFilmIdDataAction(null));
    };
  }, [dispatch, idFilm]);

  const idFilmData = selector((state) => state.idFilmData);

  if (idFilmData === null) {
    return (
      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
          </div>

          <h1 className="visually-hidden">WTW</h1>


          <div className="film-card__poster film-card__poster--small">
          </div>
        </div>

        <div className="add-review">

        </div>

      </section>
    );
  }

  const {name, backgroundImage, posterImage}: FilmDataType = idFilmData;

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>
        <HeaderElement>
          <BreadcrumbsElement filmData={idFilmData}/>
          <SignOut/>
        </HeaderElement>


        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <SubmitCommentForm idFilm={idFilm}/>
      </div>

    </section>
  );
}

export default AddReview;
