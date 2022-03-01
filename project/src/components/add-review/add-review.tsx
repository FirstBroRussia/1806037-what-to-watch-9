/* eslint-disable no-console */
import {Link, useLocation} from 'react-router-dom';
import {AppRoute} from '../utils/const';
import {SubmitCommentForm} from './submit-comment-form';

function AddReview() {
  const location = useLocation();

  const inputState = location.state;
  const {id, name, backgroundImage, posterImage}: any = inputState;

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to={AppRoute.Main} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`${AppRoute.Film}/${id}`} className="breadcrumbs__link" state={inputState}>{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link onClick={(evt) => {
                  evt.preventDefault();
                }} className="breadcrumbs__link" to="#todo"
                >Add review
                </Link>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link" href="#todo">Sign out</a>
            </li>
          </ul>
        </header>

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
