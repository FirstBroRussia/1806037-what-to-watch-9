import FilmCardBackground from './film-card-background';
import PageHeader from './page-header';
import FilmCardWrap from './film-card-wrap';
import {FilmDataType} from '../../../types/types';
import {useAppSelector} from '../../../store/store';


function HeaderFilmCard(): JSX.Element {
  const promoFilm = useAppSelector((state) => state.promoFilm);
  const filmData = promoFilm as FilmDataType;

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
