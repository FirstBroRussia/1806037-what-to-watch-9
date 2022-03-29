import {useAppSelector} from '../../../store/store';
import {FilmDataType} from '../../../types/types';
import {ModeReceivingStarringData} from '../../../utils/const';
import {convertRunTime, getStarringArrayToString} from '../../../utils/utils';

function MoviePageDetailsElement () {
  const idFilmData: FilmDataType | null = useAppSelector(({DATA}) => DATA.idFilmData);

  if (idFilmData === null) {
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

  const {director, starring, runTime, genre, released}: FilmDataType = idFilmData;

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
