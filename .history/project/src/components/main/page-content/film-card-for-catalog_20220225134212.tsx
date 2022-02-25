import CustomFilmDataType from '../../utils/utils';

function FilmCardForCatalog(props: CustomFilmDataType): JSX.Element {
  const {title, imgSrc} = props;
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={imgSrc} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{title}</a>
      </h3>
    </article>
  );
}

export default FilmCardForCatalog;
