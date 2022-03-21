/* eslint-disable no-console */
import {FilmDataType, FilmsDataPropsType} from '../../../types/types';

import FilmCardForCatalog from './film-card-for-catalog-wrap';

import {FiltersHash, Genres} from '../../utils/const';
import {useRef} from 'react';
import {Link, useLocation} from 'react-router-dom';

import {
  setGenresStateAction
} from '../../../store/actions';

import {
  useAppSelector,
  useAppDispatch
} from '../../../store/main';

const getFilteredFilms = (filmsData: FilmDataType[], currentStateApp: string): FilmDataType[] | [] => {
  switch (true) {
    case (currentStateApp === FiltersHash.All || currentStateApp === ''): {
      return filmsData;
    }
    case (currentStateApp === FiltersHash.Comedies): {
      return filmsData.slice().filter((film: FilmDataType) => {
        if (!(film.genre === Genres.Comedy)) {
          return false;
        }
        return true;
      });
    }
    case (currentStateApp === FiltersHash.Crime): {
      return filmsData.slice().filter((film: FilmDataType) => {
        if (!(film.genre === Genres.Crime || film.genre === Genres.Action)) {
          return false;
        }
        return true;
      });
    }
    case (currentStateApp === FiltersHash.Documentary): {
      return filmsData.slice().filter((film: FilmDataType) => {
        if (!(film.genre === Genres.Documentary)) {
          return false;
        }
        return true;
      });
    }
    case (currentStateApp === FiltersHash.Dramas): {
      return filmsData.slice().filter((film: FilmDataType) => {
        if (!(film.genre === Genres.Drama)) {
          return false;
        }
        return true;
      });
    }
    case (currentStateApp === FiltersHash.Horror): {
      return filmsData.slice().filter((film: FilmDataType) => {
        if (!(film.genre === Genres.Horror)) {
          return false;
        }
        return true;
      });
    }
    case (currentStateApp === FiltersHash.Family): {
      return filmsData.slice().filter((film: FilmDataType) => {
        if (!(film.genre === Genres.Adventure)) {
          return false;
        }
        return true;
      });
    }
    case (currentStateApp === FiltersHash.Romance): {
      return filmsData.slice().filter((film: FilmDataType) => {
        if (!(film.genre === Genres.Romance)) {
          return false;
        }
        return true;
      });
    }
    case (currentStateApp === FiltersHash.SciFi): {
      return filmsData.slice().filter((film: FilmDataType) => {
        if (!(film.genre === Genres.Fantasy)) {
          return false;
        }
        return true;
      });
    }
    case (currentStateApp === FiltersHash.Thrillers): {
      return filmsData.slice().filter((film: FilmDataType) => {
        if (!(film.genre === Genres.Thriller)) {
          return false;
        }
        return true;
      });
    }
    default: return [];
  }
};

function Catalog({filmsList}: FilmsDataPropsType): JSX.Element {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const filtersListRef = useRef(null);
  const hashLocation: string = location.hash;

  let validHash = false;

  for (const item in FiltersHash) {
    const key = item as keyof typeof FiltersHash;
    const value = FiltersHash[key];
    if (hashLocation === value) {
      validHash = true;
      break;
    }
  }

  if (!validHash || hashLocation === '') {
    dispatch(setGenresStateAction(FiltersHash.All));
  } else {
    dispatch(setGenresStateAction(hashLocation));
  }

  const genreStateApp = useAppSelector((state) => state.selectedGenre);
  const convertFilmsData = getFilteredFilms(filmsList, genreStateApp);


  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <ul ref={filtersListRef} className="catalog__genres-list">
        <li
          className={`catalog__genres-item ${hashLocation === FiltersHash.All || hashLocation === '' ? 'catalog__genres-item--active' : ''}`}
        >
          <Link to="#all" className="catalog__genres-link">All genres</Link>
        </li>
        <li className={`catalog__genres-item ${hashLocation === FiltersHash.Comedies ? 'catalog__genres-item--active' : ''}`}>
          <Link to="#comedies" className="catalog__genres-link">Comedies</Link>
        </li>
        <li className={`catalog__genres-item ${hashLocation === FiltersHash.Crime ? 'catalog__genres-item--active' : ''}`}>
          <Link to="#crime" className="catalog__genres-link">Crime</Link>
        </li>
        <li className={`catalog__genres-item ${hashLocation === FiltersHash.Documentary ? 'catalog__genres-item--active' : ''}`}>
          <Link to="#documentary" className="catalog__genres-link">Documentary</Link>
        </li>
        <li className={`catalog__genres-item ${hashLocation === FiltersHash.Dramas ? 'catalog__genres-item--active' : ''}`}>
          <Link to="#dramas" className="catalog__genres-link">Dramas</Link>
        </li>
        <li className={`catalog__genres-item ${hashLocation === FiltersHash.Horror ? 'catalog__genres-item--active': ''}`}>
          <Link to="#horror" className="catalog__genres-link">Horror</Link>
        </li>
        <li className={`catalog__genres-item ${hashLocation === FiltersHash.Family ? 'catalog__genres-item--active' : ''}`}>
          <Link to="#family" className="catalog__genres-link">Kids & Family</Link>
        </li>
        <li className={`catalog__genres-item ${hashLocation === FiltersHash.Romance ? 'catalog__genres-item--active' : ''}`}>
          <Link to="#romance" className="catalog__genres-link">Romance</Link>
        </li>
        <li className={`catalog__genres-item ${hashLocation === FiltersHash.SciFi ? 'catalog__genres-item--active' : ''}`}>
          <Link to="#sci-fi" className="catalog__genres-link">Sci-Fi</Link>
        </li>
        <li className={`catalog__genres-item ${hashLocation === FiltersHash.Thrillers ? 'catalog__genres-item--active' : ''}`}>
          <Link to="#thrillers" className="catalog__genres-link">Thrillers</Link>
        </li>
      </ul>

      <div className="catalog__films-list">
        {
          convertFilmsData.map((item: FilmDataType) => <FilmCardForCatalog key={item.id} item={item} />)
        }
      </div>

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
}

export default Catalog;
