/* eslint-disable no-console */
import {useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import {FilmDataType} from '../../../types/types';
import {AppRoute} from '../../utils/const';

type FilmCardForCatalogPropsType = {
  item: FilmDataType,
};


function FilmCardForCatalog({item}: FilmCardForCatalogPropsType): JSX.Element {
  const {id, previewImage, name, previewVideoLink}: FilmDataType = item;
  const isActiteCard = false;

  const [state, setState] = useState(isActiteCard);

  const videoCardRef = useRef<HTMLVideoElement | null>(null);

  const playVideo = () => {
    if(videoCardRef.current !== null) {
      videoCardRef.current.play();
    }
  };

  function activeFilmCardOnFocusHandler (): void {
    setState(!state);
  }

  function activeFilmCardOutFocusHandler (): void {
    setState(!state);
  }

  useEffect( () => {
    let timeoutFn: NodeJS.Timeout | null = null;

    if (state) {
      timeoutFn = setTimeout(playVideo, 1000);
    }
    return () => {
      if (timeoutFn !== null) {
        clearTimeout(timeoutFn);
      }
    };
  }, [state]);

  const filmCardInfoElement: JSX.Element = (
    <article onMouseEnter={activeFilmCardOnFocusHandler} className="small-film-card catalog__films-card" >
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.Film}/${id}${AppRoute.OverviewFilm}`} state={[id, item]}>{name}</Link>
      </h3>
    </article>
  );

  const videoFilmCardElement: JSX.Element = (
    <article onMouseLeave={activeFilmCardOutFocusHandler} className="small-film-card catalog__films-card" >
      <div className="small-film-card__video">
        <video ref={videoCardRef} src={previewVideoLink} width="100%" height="100%" poster={previewImage} loop preload="auto"/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.Film}/${id}${AppRoute.OverviewFilm}`} state={[id, item]}>{name}</Link>
      </h3>
    </article>
  );

  if (state) {
    return videoFilmCardElement;
  }

  return filmCardInfoElement;
}

export default FilmCardForCatalog;
