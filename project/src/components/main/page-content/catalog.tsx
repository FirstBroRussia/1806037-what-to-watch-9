import {FilmDataType} from '../../../types/types';

import FilmCardForCatalog from './film-card-for-catalog';

import {AppRoute, FiltersHash, Genres, NameSpace, Values, VISIBLE_FILMS_STEP_COUNT} from '../../../utils/const';
import {useLocation, useNavigate} from 'react-router-dom';

import {
  useAppSelector,
  useAppDispatch
} from '../../../store/store';
import ShowMoreButton from './show-more-button';
import {useEffect} from 'react';
import Filters from './filters';
import {setInitialVisibleFilmsState, setGenresStateAction} from '../../../store/slices/other-slice';

const filteredFilmsMap: Map<string, FilmDataType[]> = new Map();

const getFilteredFilms = (filmsData: FilmDataType[], hash: string): FilmDataType[] | [] => {
  switch (hash) {
    case (FiltersHash.All):
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
  const filmsData = useAppSelector((state) => state[NameSpace.DATA].filmsData);
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
      if (filmsData) {
        filteredFilmsMap.set(value, getFilteredFilms(filmsData, value));
      }
    });
  } else {
    validHash = Object.values(FiltersHash).some((value) => hashLocation === value);
  }

  switch (true) {
    case (hashLocation === ''): {
      dispatch(setGenresStateAction(FiltersHash.All));
      break;
    }
    case (!validHash): {
      navigate(AppRoute.NotFound);
      break;
    }
    default: {
      dispatch(setGenresStateAction(hashLocation));
    }
  }

  const genreStateApp = useAppSelector((state) => state[NameSpace.OTHER].selectedGenre);
  const visibleFilmsCount = useAppSelector((state) => state[NameSpace.OTHER].visibleFilms);
  const convertFilmsData = filteredFilmsMap.get(genreStateApp);

  if (!convertFilmsData) {
    return (
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <Filters validHash={validHash}/>

        <div className="catalog__films-list">

        </div>

      </section>
    );
  }

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <Filters validHash={validHash}/>

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
          return <ShowMoreButton />;
        })()
      }
    </section>
  );
}

export default Catalog;
export {getFilteredFilms};
