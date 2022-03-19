import {useLocation} from 'react-router-dom';
import {FilmDataType} from '../../types/types';
import {SubmitCommentForm} from './submit-comment-form';
import HeaderElement from '../layout/header-layout';
import SignOut from '../header/user-block/sign-out';
import BreadcrumbsElement from './breadcrumbs';
import {getFilm} from '../../fetch/request-to-server';
import {useEffect, useState} from 'react';

function AddReview() {
  const location = useLocation();
  const [state, setState] = useState(null);

  const idFilm = location.state as number;

  useEffect(() => {
    (async () => {
      const response = await getFilm(idFilm);
      setState(response);
    })();
  }, [setState, idFilm]);

  if (state === null) {
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

  const filmData = state as FilmDataType;
  const {name, backgroundImage, posterImage}: FilmDataType = filmData;

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>
        <HeaderElement>
          <BreadcrumbsElement filmData={filmData}/>
          <SignOut/>
        </HeaderElement>


        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <SubmitCommentForm />
      </div>

    </section>
  );
}

export default AddReview;
