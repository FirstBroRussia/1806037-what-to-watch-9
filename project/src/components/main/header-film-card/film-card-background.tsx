import {FilmDataPropsType} from '../../../types/types';

function FilmCardBackground({promoFilm}: FilmDataPropsType): JSX.Element {
  const {backgroundImage, name} = promoFilm;
  return (
    <div className="film-card__bg">
      <img src={backgroundImage} alt={name} />
    </div>
  );
}

export default FilmCardBackground;
