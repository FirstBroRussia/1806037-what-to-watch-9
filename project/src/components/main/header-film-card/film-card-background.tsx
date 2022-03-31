import {FilmDataPropsType, FilmDataType} from '../../../types/types';

function FilmCardBackground({filmData}: FilmDataPropsType): JSX.Element {
  const {backgroundImage, name}: FilmDataType = filmData;
  return (
    <div className="film-card__bg">
      <img src={backgroundImage} alt={name} />
    </div>
  );
}

export default FilmCardBackground;
