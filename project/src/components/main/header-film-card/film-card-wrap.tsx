import {useNavigate} from 'react-router-dom';
import {fetchSetStatusFavotiteFilmAction} from '../../../api/api-action';
import {useAppDispatch, useAppSelector} from '../../../store/store';
import {FilmDataPropsType, FilmDataType, SetStatusFavoriteFilmAsyncFilmParamsType} from '../../../types/types';
import {AppRoute, AuthorizationValue, NameSpace} from '../../../utils/const';
import MyListSvgElement from '../../my-list-svg/my-list-svg';

function FilmCardWrap({filmData}: FilmDataPropsType): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const authStatus = useAppSelector((state) => state[NameSpace.USER].authorizationStatus);
  const {id, name, posterImage, genre, released, isFavorite}: FilmDataType = filmData;

  const handleNavigateToVideoPlayerClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    navigate(`${AppRoute.VideoPlayer}/${id}`);
  };

  const handleMyListButtonClick: React.MouseEventHandler<HTMLButtonElement> = (evt) => {
    evt.preventDefault();
    const paramsData: SetStatusFavoriteFilmAsyncFilmParamsType = {
      idFilm: Number(id),
      status: Number(!isFavorite),
      promo: true,
    };
    dispatch(fetchSetStatusFavotiteFilmAction(paramsData));
  };

  return (
    <div className="film-card__wrap">
      <div className="film-card__info">
        <div className="film-card__poster">
          <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
        </div>

        <div className="film-card__desc">
          <h2 className="film-card__title">{name}</h2>
          <p className="film-card__meta">
            <span className="film-card__genre">{genre}</span>
            <span className="film-card__year">{released}</span>
          </p>

          <div className="film-card__buttons">
            <button onClick={handleNavigateToVideoPlayerClick} className="btn btn--play film-card__button" type="button">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            {
              (() => {
                if (authStatus !== AuthorizationValue.Auth) {
                  return;
                }
                return (
                  <button onClick={handleMyListButtonClick} className="btn btn--list film-card__button" type="button">
                    <MyListSvgElement isFavorite={isFavorite}/>
                    <span>My list</span>
                  </button>
                );
              })()
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilmCardWrap;
