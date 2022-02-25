import CustomFilmDataType from '../../utils/utils';
import {CustomFilmData} from '../../utils/utils';
import FilmCardBackground from './film-card-background';
import PageHeader from './page-header';
import FilmCardWrap from './film-card-wrap';


function FilmCard(): JSX.Element {
  return (
    <section className="film-card">
      <h1 className="visually-hidden">WTW</h1>
      <FilmCardBackground />
      <PageHeader />
      <FilmCardWrap {...CustomFilmData} />


    </section>
  );
}

export default FilmCard;
