import {DataFromServer} from '../types/types';

import HeaderFilmCard from '../components/main/header-film-card/header-film-card';
import PageContent from '../components/main/page-content/page-content';
import {AppRoute, ERROR} from '../components/utils/const';
import {Navigate} from 'react-router-dom';

function MainPage({promoFilm, filmsData}: DataFromServer): JSX.Element {

  if (promoFilm === ERROR || filmsData === ERROR) {
    return (
      <Navigate to={AppRoute.ErrorRequest}/>
    );
  }

  return (
    <>
      <HeaderFilmCard filmData={promoFilm}/>
      <PageContent filmsList={filmsData}/>
    </>
  );
}

export default MainPage;
