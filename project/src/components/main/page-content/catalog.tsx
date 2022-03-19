/* eslint-disable no-console */
import {FilmsDataPropsType} from '../../../types/types';

import FilmCardForCatalog from './film-card-for-catalog-wrap';

import {FiltersHash} from '../../utils/const';
import {useEffect, useRef} from 'react';
import {Link, useLocation} from 'react-router-dom';

function Catalog({filmsList}: FilmsDataPropsType): JSX.Element {
  const location = useLocation();
  const filtersListRef = useRef(null);

  const hashLocation: string = location.hash;

  useEffect(() => {
    console.log();
  });

  const getCurrentCatalogBlock = () =>
    filmsList.map((item) => <FilmCardForCatalog key={item.id} item={item} />);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <ul ref={filtersListRef} className="catalog__genres-list">
        <li
          className={`catalog__genres-item ${hashLocation === FiltersHash.All || hashLocation === '' ? 'catalog__genres-item--active' : ''}`}
        >
          <Link to="#all" className="catalog__genres-link">All genres</Link>
        </li>
        <li className={`catalog__genres-item ${hashLocation === FiltersHash.Comedies ? 'catalog__genres-item--active' : ''}`}>
          <Link to="#comedies" className="catalog__genres-link">Comedies</Link>
        </li>
        <li className={`catalog__genres-item ${hashLocation === FiltersHash.Crime ? 'catalog__genres-item--active' : ''}`}>
          <Link to="#crime" className="catalog__genres-link">Crime</Link>
        </li>
        <li className={`catalog__genres-item ${hashLocation === FiltersHash.Documentary ? 'catalog__genres-item--active' : ''}`}>
          <Link to="#documentary" className="catalog__genres-link">Documentary</Link>
        </li>
        <li className={`catalog__genres-item ${hashLocation === FiltersHash.Dramas ? 'catalog__genres-item--active' : ''}`}>
          <Link to="#dramas" className="catalog__genres-link">Dramas</Link>
        </li>
        <li className={`catalog__genres-item ${hashLocation === FiltersHash.Horror ? 'catalog__genres-item--active': ''}`}>
          <Link to="#horror" className="catalog__genres-link">Horror</Link>
        </li>
        <li className={`catalog__genres-item ${hashLocation === FiltersHash.Family ? 'catalog__genres-item--active' : ''}`}>
          <Link to="#family" className="catalog__genres-link">Kids & Family</Link>
        </li>
        <li className={`catalog__genres-item ${hashLocation === FiltersHash.Romance ? 'catalog__genres-item--active' : ''}`}>
          <Link to="#romance" className="catalog__genres-link">Romance</Link>
        </li>
        <li className={`catalog__genres-item ${hashLocation === FiltersHash.SciFi ? 'catalog__genres-item--active' : ''}`}>
          <Link to="#sci-fi" className="catalog__genres-link">Sci-Fi</Link>
        </li>
        <li className={`catalog__genres-item ${hashLocation === FiltersHash.Thrillers ? 'catalog__genres-item--active' : ''}`}>
          <Link to="#thrillers" className="catalog__genres-link">Thrillers</Link>
        </li>
      </ul>

      <div className="catalog__films-list">
        {
          getCurrentCatalogBlock()
        }
      </div>

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
}

export default Catalog;
