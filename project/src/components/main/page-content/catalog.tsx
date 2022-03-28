import {FilmDataType} from '../../../types/types';

import FilmCardForCatalog from './film-card-for-catalog-wrap';

import {AppRoute, FiltersHash, Genres, Values, VISIBLE_FILMS_STEP_COUNT} from '../../../utils/const';
import {useLocation, useNavigate} from 'react-router-dom';

import {
  useAppSelector,
  useAppDispatch
} from '../../../store/store';
import ShowMoreButtonElement from './show-more-button';
import {useEffect} from 'react';
import FiltersElement from './filters';
import { setInitialVisibleFilmsState, setGenresStateAction } from '../../../store/slices/other-slice';

const filteredFilmsMap: Map<string, FilmDataType[]> = new Map();

const getFilteredFilms = (filmsData: FilmDataType[], hash: string): FilmDataType[] | [] => {
  switch (hash) {
    case (FiltersHash.All): {
      return filmsData;
    }
    case (''): {
      return filmsData;
    }
    case (FiltersHash.Comedies): {
      return filmsData.slice().filter((film: FilmDataType) => film.genre === Genres.Comedy);
    }
    case (FiltersHash.Crime): {
      return filmsData.slice().filter((film: FilmDataType) => (film.genre === Genres.Crime || film.genre === Genres.Action));
    }
    case (FiltersHash.Documentary): {
      return filmsData.slice().filter((film: FilmDataType) => film.genre === Genres.Documentary);
    }
    case (FiltersHash.Dramas): {
      return filmsData.slice().filter((film: FilmDataType) => film.genre === Genres.Drama);
    }
    case (FiltersHash.Horror): {
      return filmsData.slice().filter((film: FilmDataType) => film.genre === Genres.Horror);
    }
    case (FiltersHash.Family): {
      return filmsData.slice().filter((film: FilmDataType) => film.genre === Genres.Adventure);
    }
    case (FiltersHash.Romance): {
      return filmsData.slice().filter((film: FilmDataType) => film.genre === Genres.Romance);
    }
    case (FiltersHash.SciFi): {
      return filmsData.slice().filter((film: FilmDataType) => film.genre === Genres.Fantasy);
    }
    case (FiltersHash.Thrillers): {
      return filmsData.slice().filter((film: FilmDataType) => film.genre === Genres.Thriller);
    }
    default: return [];
  }
};

function Catalog(): JSX.Element {
  const filmsData = useAppSelector(({DATA}) => DATA.filmsData);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const hashLocation: string = location.hash;

  let validHash = false;

  useEffect(() => {
    dispatch(setInitialVisibleFilmsState());
  }, [dispatch, hashLocation]);

  if (filteredFilmsMap.size === Values.ZERO_VALUE) {
    Object.values(FiltersHash).forEach((value) => {
      if (hashLocation === value) {
        validHash = true;
      }
      filteredFilmsMap.set(value, getFilteredFilms(filmsData, value));
    });
  } else {
    validHash = Object.values(FiltersHash).some((value) => hashLocation === value);
  }

  if (hashLocation === '') {
    dispatch(setGenresStateAction(FiltersHash.All));
  } else if (!validHash) {
    navigate(AppRoute.NotFound);
  } else {
    dispatch(setGenresStateAction(hashLocation));
  }

  const genreStateApp = useAppSelector(({OTHER}) => OTHER.selectedGenre);
  const visibleFilmsCount = useAppSelector(({OTHER}) => OTHER.visibleFilms);
  const convertFilmsData = filteredFilmsMap.get(genreStateApp);

  if (!convertFilmsData) {
    return (
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FiltersElement validHash={validHash}/>

        <div className="catalog__films-list">

        </div>

      </section>
    );
  }

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <FiltersElement validHash={validHash}/>

      <div className="catalog__films-list">
        {
          (() => {
            if (convertFilmsData.length === Values.ZERO_VALUE) {
              return (
                <h2 className='catalog__title'>There are no films in this category</h2>
              );
            }
            return convertFilmsData.slice(0, visibleFilmsCount).map((item: FilmDataType) => <FilmCardForCatalog key={item.id} film={item} />);
          })()
        }
      </div>
      {
        (() => {
          if ((convertFilmsData.length - visibleFilmsCount) <= VISIBLE_FILMS_STEP_COUNT) {
            return;
          }
          return <ShowMoreButtonElement />;
        })()
      }
    </section>
  );
}

export default Catalog;
