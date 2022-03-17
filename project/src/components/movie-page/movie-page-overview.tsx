import {useLocation} from 'react-router-dom';
import {FilmDataType, TemporaryInputDataType} from '../../types/types';
import {ModeReceivingStarringData} from '../utils/const';
import {getRatingLevel, getStarringArrayToString} from '../utils/utils';

function MoviePageOverviewElement () {
  // const navigate = useNavigate();
  const location = useLocation();
  const inputData = location.state as TemporaryInputDataType;
  const filmData: FilmDataType = inputData[1];
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
