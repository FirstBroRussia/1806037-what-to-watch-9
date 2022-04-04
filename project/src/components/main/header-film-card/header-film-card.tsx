import FilmCardBackground from './film-card-background';
import PageHeader from './page-header';
import FilmCardWrap from './film-card-wrap';
import {FilmDataType} from '../../../types/types';
import {useAppDispatch, useAppSelector} from '../../../store/store';
import {fetchGetPromoFilmAction} from '../../../api/api-action';
import {useEffect} from 'react';
import {NameSpace} from '../../../utils/const';


function HeaderFilmCard(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGetPromoFilmAction());
  }, [dispatch]);

  const promoFilm: FilmDataType | null = useAppSelector((state) => state[NameSpace.DATA].promoFilm);

  if (promoFilm === null) {
    return (
      <section className="film-card">
        <h1 className="visually-hidden">WTW</h1>
      </section>
    );
  }

  return (
    <section className="film-card">
      <h1 className="visually-hidden">WTW</h1>
      <FilmCardBackground filmData={promoFilm}/>
      <PageHeader />
      <FilmCardWrap filmData={promoFilm} />
    </section>
  );
}

export default HeaderFilmCard;
