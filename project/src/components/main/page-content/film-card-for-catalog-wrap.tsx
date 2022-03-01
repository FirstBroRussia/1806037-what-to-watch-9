/* eslint-disable no-useless-return */
/* eslint-disable no-console */
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {FilmDataType} from '../../../types/types';
import {AppRoute} from '../../utils/const';

type FilmCardForCatalogPropsType = {
  item: FilmDataType,
  callback: React.Dispatch<React.SetStateAction<number>>
};


function FilmCardForCatalog({item, callback}: FilmCardForCatalogPropsType): JSX.Element {
  const {id, previewImage, name, previewVideoLink} = item;

  function activeFilmCardOnFocusHandler (): any {
    callback(id);
    setState(videoFilmCardElement);
    // return;
  }

  function activeFilmCardOutFocusHandler (): any {
    setState(filmCardInfoElement);
  }

  const filmCardInfoElement: JSX.Element = (
    <article onMouseEnter={activeFilmCardOnFocusHandler} className="small-film-card catalog__films-card" >
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.Film}/${id}`} state={item}>{name}</Link>
      </h3>
    </article>
  );

  const videoFilmCardElement: JSX.Element = (
    <article onMouseLeave={activeFilmCardOutFocusHandler} className="small-film-card catalog__films-card" >
      <div className="small-film-card__video">
        <video src={previewVideoLink} width="100%" height="100%" autoPlay loop preload="auto"/>
        {/* <img src={previewImage} alt={name} width="280" height="175" /> */}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.Film}/${id}`} state={item}>{name}</Link>
      </h3>
    </article>
  );

  const [state, setState] = useState(filmCardInfoElement);

  return state;
}

export default FilmCardForCatalog;
