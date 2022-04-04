import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {fetchGetFavoriteFilmsDataAction} from '../../api/api-action';
import {setFavoriteFilmsDataAction} from '../../store/slices/data-slice';
import {useAppDispatch, useAppSelector} from '../../store/store';
import {FavoriteFilmsDataType, FilmDataType} from '../../types/types';
import {AppRoute, NameSpace} from '../../utils/const';
import SignOut from '../header/user-block/sign-out';
import FooterElement from '../layout/footer-element';
import FilmCardForCatalog from '../main/page-content/film-card-for-catalog';

function MyList() {
  const dispatch = useAppDispatch();
  const favoriteFilmsData: FavoriteFilmsDataType = useAppSelector((state) => state[NameSpace.DATA].favoriteFilmsData);

  useEffect(() => {
    dispatch(fetchGetFavoriteFilmsDataAction());
    return () => {
      dispatch(setFavoriteFilmsDataAction(null));
    };
  }, [dispatch]);

  if (favoriteFilmsData === null) {
    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <Link to={AppRoute.Main} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <h1 className="page-title user-page__title">My list</h1>

          <SignOut/>
        </header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <div className="catalog__films-list">


          </div>
        </section>

        <FooterElement/>
      </div>
    );
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={AppRoute.Main} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <SignOut/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {
            (() => {
              if (!favoriteFilmsData.length) {
                return (<h2 className='empty-films__title'>No &#34;favorite&#34; movies selected</h2>);
              }
              return favoriteFilmsData.map((item: FilmDataType) => <FilmCardForCatalog key={item.id} film={item} />);
            })()
          }
        </div>
      </section>

      <FooterElement/>
    </div>
  );
}

export default MyList;
