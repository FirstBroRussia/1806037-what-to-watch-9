/* eslint-disable no-console */
import {useLocation} from 'react-router-dom';
import {FilmDataType, TemporaryInputDataType} from '../../types/types';
import {ModeReceivingStarringData} from '../utils/const';
import {getStarringArrayToString} from '../utils/utils';

function MoviePageDetailsElement () {
// const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const inputData = location.state as TemporaryInputDataType;
  const filmData: FilmDataType = inputData[1];
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
          <span className="film-card__details-value">{runTime}</span>
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
