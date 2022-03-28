import {useEffect} from 'react';
import {fetchGetSimilarFilmsAction} from '../../../api/api-action';
import {setSimilarFilmsDataAction} from '../../../store/slices/data-slice';
import {useAppDispatch, useAppSelector} from '../../../store/store';
import {FilmDataType} from '../../../types/types';
import {Values} from '../../../utils/const';
import FilmCardForCatalog from '../../main/page-content/film-card-for-catalog-wrap';

type LikeThisFilmsElementPropsType = {
  idFilm: number
}

function LikeThisFilmsElement({idFilm}: LikeThisFilmsElementPropsType) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGetSimilarFilmsAction(idFilm));
    return () => {
      dispatch(setSimilarFilmsDataAction(null));
    };
  }, [dispatch, idFilm]);

  const similarFilms: FilmDataType[] | null = useAppSelector(({DATA}) => DATA.similarFilmsData);

  if (similarFilms === null) {
    return (
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>

      </section>
    );
  }

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <div className="catalog__films-list">
        {
          similarFilms.slice(Values.ZERO_VALUE, Values.FOUR_VALUE).map((item: FilmDataType) => <FilmCardForCatalog key={item.id} film={item} />)
        }
      </div>
    </section>
  );
}

export default LikeThisFilmsElement;
