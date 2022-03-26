import {Link} from 'react-router-dom';
import {useAppSelector} from '../../store/store';
import {ACTIVE_LINK_FROM_MOVIE_PAGE, AuthorizationValue, HashFilmInfo} from '../../utils/const';

type TabListElementPropsType = {
  hash: string
}

function TabListElement({hash}: TabListElementPropsType) {
  const selector = useAppSelector;
  const authStatus = selector((state) => state.authorizationStatus);

  let isValidHash = false;

  for (const item in HashFilmInfo) {
    const key = item as keyof typeof HashFilmInfo;
    const value = HashFilmInfo[key];
    if (hash === value) {
      isValidHash = true;
      break;
    }
  }

  if (!isValidHash) {
    return (
      <ul className="film-nav__list">
        <li className="film-nav__item">
          <Link to="#overview" className="film-nav__link">Overview</Link>
        </li>
        <li className="film-nav__item">
          <Link to="#details" className="film-nav__link">Details</Link>
        </li>
        {
          authStatus === AuthorizationValue.Auth ? (
            <li className="film-nav__item">
              <Link to="#reviews" className="film-nav__link">Reviews</Link>
            </li>
          ) : ''
        }
      </ul>
    );
  }

  return (
    <ul className="film-nav__list">
      <li className={`film-nav__item ${hash === HashFilmInfo.Overview ? ACTIVE_LINK_FROM_MOVIE_PAGE : ''}`}>
        <Link to="#overview" className="film-nav__link">Overview</Link>
      </li>
      <li className={`film-nav__item ${hash === HashFilmInfo.Details ? ACTIVE_LINK_FROM_MOVIE_PAGE : ''}`}>
        <Link to="#details" className="film-nav__link">Details</Link>
      </li>
      {
        authStatus === AuthorizationValue.Auth ? (
          <li className="film-nav__item">
            <Link to="#reviews" className="film-nav__link">Reviews</Link>
          </li>
        ) : ''
      }
    </ul>
  );
}

export default TabListElement;
