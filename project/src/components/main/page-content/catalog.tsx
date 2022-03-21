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

let filteredFilmsMap: Map<string, FilmDataType[]> | null = null;

const getFilteredFilms = (filmsData: FilmDataType[], hash: string): FilmDataType[] | [] => {
  switch (true) {
    case (hash === FiltersHash.All || hash === ''): {
      return filmsData;
    }
    case (hash === FiltersHash.Comedies): {
      return filmsData.slice().filter((film: FilmDataType) => film.genre === Genres.Comedy);
    }
    case (hash === FiltersHash.Crime): {
      return filmsData.slice().filter((film: FilmDataType) => (film.genre === Genres.Crime || film.genre === Genres.Action));
    }
    case (hash === FiltersHash.Documentary): {
      return filmsData.slice().filter((film: FilmDataType) => film.genre === Genres.Documentary);
    }
    case (hash === FiltersHash.Dramas): {
      return filmsData.slice().filter((film: FilmDataType) => film.genre === Genres.Drama);
    }
    case (hash === FiltersHash.Horror): {
      return filmsData.slice().filter((film: FilmDataType) => film.genre === Genres.Horror);
    }
    case (hash === FiltersHash.Family): {
      return filmsData.slice().filter((film: FilmDataType) => film.genre === Genres.Adventure);
    }
    case (hash === FiltersHash.Romance): {
      return filmsData.slice().filter((film: FilmDataType) => film.genre === Genres.Romance);
    }
    case (hash === FiltersHash.SciFi): {
      return filmsData.slice().filter((film: FilmDataType) => film.genre === Genres.Fantasy);
    }
    case (hash === FiltersHash.Thrillers): {
      return filmsData.slice().filter((film: FilmDataType) => film.genre === Genres.Thriller);
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

  if (filteredFilmsMap === null) {
    filteredFilmsMap = new Map();
    for (const item in FiltersHash) {
      const key = item as keyof typeof FiltersHash;
      const value = FiltersHash[key];
      if (hashLocation === value) {
        validHash = true;
      }
      filteredFilmsMap.set(value, getFilteredFilms(filmsList, value));
    }
  } else {
    for (const item in FiltersHash) {
      const key = item as keyof typeof FiltersHash;
      const value = FiltersHash[key];
      if (hashLocation === value) {
        validHash = true;
        break;
      }
    }
  }

  if (!validHash || hashLocation === '') {
    dispatch(setGenresStateAction(FiltersHash.All));
  } else {
    dispatch(setGenresStateAction(hashLocation));
  }

  const genreStateApp = useAppSelector((state) => state.selectedGenre);
  const convertFilmsData = filteredFilmsMap.get(genreStateApp);


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
          (() => {
            if (convertFilmsData === undefined) {
              return [];
            }
            return convertFilmsData.map((item: FilmDataType) => <FilmCardForCatalog key={item.id} item={item} />);
          })()
        }
      </div>

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
}

export default Catalog;
