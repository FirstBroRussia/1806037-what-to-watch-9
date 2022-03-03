import FilmCardBackground from './film-card-background';
import PageHeader from './page-header';
import FilmCardWrap from './film-card-wrap';
import {FilmDataPropsType} from '../../../types/types';


function HeaderFilmCard({filmData}: FilmDataPropsType): JSX.Element {
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
