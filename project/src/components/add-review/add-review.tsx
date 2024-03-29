import {useParams} from 'react-router-dom';
import {FilmDataType, IdFilmType} from '../../types/types';
import {SubmitCommentForm} from './submit-comment-form';
import HeaderElement from '../layout/header-element';
import SignOut from '../header/user-block/sign-out';
import Breadcrumbs from './breadcrumbs';
import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../store/store';
import {fetchGetIdFilmAction} from '../../api/api-action';
import {setFilmIdDataAction} from '../../store/slices/data-slice';
import {NameSpace} from '../../utils/const';

function AddReview() {
  const params = useParams();
  const idFilm: IdFilmType = Number(params.id);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGetIdFilmAction(idFilm));
    return () => {
      dispatch(setFilmIdDataAction(null));
    };
  }, [dispatch, idFilm]);

  const idFilmData = useAppSelector((state) => state[NameSpace.DATA].idFilmData);

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
          <Breadcrumbs filmData={idFilmData}/>
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
