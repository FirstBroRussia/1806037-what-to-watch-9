/* eslint-disable no-console */

import FilmCardBackground from './film-card-background';
import PageHeader from './page-header';
import FilmCardWrap from './film-card-wrap';
import {FilmDataPropsType} from '../../../types/types';


function HeaderFilmCard({promoFilm}: FilmDataPropsType): JSX.Element {
  return (
    <section className="film-card">
      <h1 className="visually-hidden">WTW</h1>
      <FilmCardBackground promoFilm={promoFilm}/>
      <PageHeader />
      <FilmCardWrap promoFilm={promoFilm} />
    </section>
  );
}

export default HeaderFilmCard;
