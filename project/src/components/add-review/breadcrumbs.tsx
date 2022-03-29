import {Link} from 'react-router-dom';
import {FilmDataPropsType, FilmDataType} from '../../types/types';
import {AppRoute, HashFilmInfo} from '../../utils/const';

function BreadcrumbsElement({filmData}: FilmDataPropsType): JSX.Element {
  const {id, name}: FilmDataType = filmData;
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to={`${AppRoute.Film}/${id}${HashFilmInfo.Overview}`} className="breadcrumbs__link" state={id}>{name}</Link>
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
  );
}

export default BreadcrumbsElement;
