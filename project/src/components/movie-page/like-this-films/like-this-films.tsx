import {useEffect} from 'react';
import {fetchGetSimilarFilmsAction} from '../../../api/api-action';
import {setSimilarFilmsDataAction} from '../../../store/actions';
import {useAppDispatch, useAppSelector} from '../../../store/store';
import {FilmDataType} from '../../../types/types';
import {FOUR_VALUE, ZERO_VALUE} from '../../../utils/const';
import FilmCardForCatalog from '../../main/page-content/film-card-for-catalog-wrap';

type LikeThisFilmsElementPropsType = {
  idFilm: number
}

function LikeThisFilmsElement({idFilm}: LikeThisFilmsElementPropsType) {
  const dispatch = useAppDispatch();
  const selector = useAppSelector;

  useEffect(() => {
    dispatch(fetchGetSimilarFilmsAction(idFilm));
    return () => {
      dispatch(setSimilarFilmsDataAction(null));
    };
  }, [dispatch, idFilm]);

  const similarFilms: FilmDataType[] | null = selector((state) => state.similarFilmsData);

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
          similarFilms.slice(ZERO_VALUE, FOUR_VALUE).map((item: FilmDataType) => <FilmCardForCatalog key={item.id} film={item} />)
        }
      </div>
    </section>
  );
}

export default LikeThisFilmsElement;
