import {useAppSelector} from '../../../store/store';
import {FilmDataType} from '../../../types/types';
import {ModeReceivingStarringData, NameSpace} from '../../../utils/const';
import {getRatingLevel, getStarringArrayToString} from '../../../utils/utils';

function MoviePageOverview () {
  const idFilmData: FilmDataType | null = useAppSelector((state) => state[NameSpace.DATA].idFilmData);

  if (idFilmData === null) {
    return (
      <>
        <div className="film-rating">
          <div className="film-rating__score"></div>
          <p className="film-rating__meta">
            <span className="film-rating__level"></span>
            <span className="film-rating__count"></span>
          </p>
        </div>
        <div className="film-card__text">
          <p></p>

          <p className="film-card__director"><strong></strong></p>

          <p className="film-card__starring"><strong></strong></p>
        </div>
      </>
    );
  }

  const {rating, scoresCount, description, director, starring}: FilmDataType = idFilmData;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRatingLevel(rating)}</span>
          <span className="film-rating__count">{`${scoresCount} ratings`}</span>
        </p>
      </div>
      <div className="film-card__text">
        <p>{description}</p>

        <p className="film-card__director"><strong>{`Director: ${director}`}</strong></p>

        <p className="film-card__starring"><strong>{`Starring: ${getStarringArrayToString(ModeReceivingStarringData.Overview, starring)}`}</strong></p>
      </div>
    </>
  );
}

export default MoviePageOverview;
