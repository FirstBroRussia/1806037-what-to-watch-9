/* eslint-disable no-console */
import {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {getFilm} from '../../../fetch/request-to-server';
import {FilmDataType} from '../../../types/types';
import {ModeReceivingStarringData} from '../../../utils/const';
import {convertRunTime, getStarringArrayToString} from '../../../utils/utils';

function MoviePageDetailsElement () {
  const location = useLocation();
  const idFilm = location.state as number;
  const [state, setState] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getFilm(idFilm);
      setState(response);
    })();
  }, [setState, idFilm]);


  if (state === null) {
    return (
      <div className="film-card__text film-card__row">
        <div className="film-card__text-col">
          <p className="film-card__details-item">

          </p>
          <p className="film-card__details-item">

          </p>
        </div>

        <div className="film-card__text-col">
          <p className="film-card__details-item">

          </p>
          <p className="film-card__details-item">

          </p>
          <p className="film-card__details-item">

          </p>
        </div>
      </div>
    );
  }

  const filmData = state as FilmDataType;
  const {director, starring, runTime, genre, released}: FilmDataType = filmData;

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {getStarringArrayToString(ModeReceivingStarringData.Details, starring)}
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{convertRunTime(runTime)}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
}

export default MoviePageDetailsElement;
