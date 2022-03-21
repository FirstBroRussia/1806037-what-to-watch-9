import FilmCardBackground from './film-card-background';
import PageHeader from './page-header';
import FilmCardWrap from './film-card-wrap';
import {FilmDataType} from '../../../types/types';
import {useEffect, useState} from 'react';
import {getPromoFilm} from '../../../fetch/request-to-server';

type HeaderFilmCardPropsType = {
  promoFilm: FilmDataType
};


function HeaderFilmCard({promoFilm}: HeaderFilmCardPropsType): JSX.Element {
  let filmData: FilmDataType = promoFilm;
  const [state, setState] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getPromoFilm();
      setState(response);
    })();
  }, [setState]);

  if (state === null) {
    return (
      <section className="film-card">
        <h1 className="visually-hidden">WTW</h1>
        <FilmCardBackground filmData={filmData}/>
        <PageHeader />
        <FilmCardWrap filmData={filmData} />
      </section>
    );
  }

  filmData = state as FilmDataType;

  return (
    <section className="film-card">
      <h1 className="visually-hidden">WTW</h1>
      <FilmCardBackground filmData={filmData}/>
      <PageHeader />
      <FilmCardWrap filmData={filmData} />
    </section>
  );
}

export default HeaderFilmCard;
