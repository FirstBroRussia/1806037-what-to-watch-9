import {FilmsDataPropsType} from '../../../types/types';

import FilmCardForCatalog from './film-card-for-catalog-wrap';

function Catalog({filmsList}: FilmsDataPropsType): JSX.Element {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <ul className="catalog__genres-list">
        <li className="catalog__genres-item catalog__genres-item--active">
          <a href="#todo" className="catalog__genres-link">All genres</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#todo" className="catalog__genres-link">Comedies</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#todo" className="catalog__genres-link">Crime</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#todo" className="catalog__genres-link">Documentary</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#todo" className="catalog__genres-link">Dramas</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#todo" className="catalog__genres-link">Horror</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#todo" className="catalog__genres-link">Kids & Family</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#todo" className="catalog__genres-link">Romance</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#todo" className="catalog__genres-link">Sci-Fi</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#todo" className="catalog__genres-link">Thrillers</a>
        </li>
      </ul>

      <div className="catalog__films-list">
        {
          filmsList.map((item) => <FilmCardForCatalog key={item.id} item={item} />)
        }
      </div>

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
}

export default Catalog;
