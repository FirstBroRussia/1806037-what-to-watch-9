import {useEffect, useRef, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {FilmDataType} from '../../../types/types';
import {AppRoute} from '../../../utils/const';

type FilmCardForCatalogPropsType = {
  film: FilmDataType,
};

function FilmCardForCatalog({film}: FilmCardForCatalogPropsType): JSX.Element {
  const {id, previewImage, name, previewVideoLink}: FilmDataType = film;
  const isActiteCard = false;

  const navigate = useNavigate();
  const [state, setState] = useState(isActiteCard);

  const videoCardRef = useRef<HTMLVideoElement | null>(null);

  const playVideo = () => {
    if(videoCardRef.current !== null) {
      videoCardRef.current.play();
    }
  };

  const handleFilmCardClick: React.MouseEventHandler<HTMLElement> = (evt) => {
    evt.preventDefault();
    navigate(`${AppRoute.Film}/${id}${AppRoute.OverviewFilm}`);
  };

  const handleActiveFilmCardOnFocus = (): void => {
    setState(!state);
  };

  const  handleActiveFilmCardOutFocus = (): void => {
    setState(!state);
  };

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
    <article onMouseEnter={handleActiveFilmCardOnFocus} onClick={handleFilmCardClick} className="small-film-card catalog__films-card" >
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.Film}/${id}${AppRoute.OverviewFilm}`}>{name}</Link>
      </h3>
    </article>
  );

  const videoFilmCardElement: JSX.Element = (
    <article onMouseLeave={handleActiveFilmCardOutFocus} onClick={handleFilmCardClick} className="small-film-card catalog__films-card" >
      <div className="small-film-card__video">
        <video ref={videoCardRef} src={previewVideoLink} width="100%" height="100%" poster={previewImage} loop preload="auto"/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.Film}/${id}${AppRoute.OverviewFilm}`}>{name}</Link>
      </h3>
    </article>
  );


  if (state) {
    return videoFilmCardElement;
  }

  return filmCardInfoElement;
}

export default FilmCardForCatalog;
