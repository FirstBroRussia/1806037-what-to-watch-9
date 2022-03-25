import {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {getFilm} from '../../../fetch/request-to-server';
import {FilmDataType} from '../../../types/types';
import {ModeReceivingStarringData} from '../../../utils/const';
import {getRatingLevel, getStarringArrayToString} from '../../../utils/utils';

function MoviePageOverviewElement () {
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

  const filmData = state as FilmDataType;
  const {rating, scoresCount, description, director, starring}: FilmDataType = filmData;

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

export default MoviePageOverviewElement;
