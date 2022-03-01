/* eslint-disable no-console */
import {Link} from 'react-router-dom';
import {FilmDataType} from '../../../types/types';
import {AppRoute} from '../../utils/const';

type FilmCardForCatalogPropsType = {
  item: FilmDataType,
  callback: React.Dispatch<React.SetStateAction<number>>
};


function FilmCardForCatalog({item, callback}: FilmCardForCatalogPropsType): JSX.Element {
  const {id, name, previewImage} = item;

  const activeFilmCardOnFocusHandler = () => {
    callback(id);
  };


  return (
    <article onMouseEnter={activeFilmCardOnFocusHandler} className="small-film-card catalog__films-card" >
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.Film}/${id}`} state={item}>{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCardForCatalog;
