import HeaderFilmCard from '../components/main/header-film-card/header-film-card';
import PageContent from '../components/main/page-content/page-content';
import PreloaderElement from '../components/preloader/preloader';
import {useAppSelector} from '../store/store';

function MainPage(): JSX.Element {
  const {isPrimaryLoadData} = useAppSelector( (state) => state);

  if (!isPrimaryLoadData) {
    return (
      <>
        <PreloaderElement />
        <section className="film-card">
          <div className="film-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <div className="logo">
              <a className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>
          </header>


          <div className="film-card__wrap">
            <div className="film-card__info">
              <div className="film-card__poster">
              </div>

              <div className="film-card__desc">
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>

            <ul className="catalog__genres-list">
              <li className="catalog__genres-item catalog__genres-item--active">
                <a href="#" className="catalog__genres-link">All genres</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Comedies</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Crime</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Documentary</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Dramas</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Horror</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Kids & Family</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Romance</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Sci-Fi</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Thrillers</a>
              </li>
            </ul>
          </section>

          <footer className="page-footer">
            <div className="logo">
              <a className="logo__link logo__link--light">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </>
    );
  }

  return (
    <>
      <HeaderFilmCard />
      <PageContent />
    </>
  );
}

export default MainPage;
