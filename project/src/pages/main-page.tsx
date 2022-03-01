/* eslint-disable no-console */
import {dataFromServer} from '../types/types';

import HeaderFilmCard from '../components/main/header-film-card/header-film-card';
import PageContent from '../components/main/page-content/page-content';

function MainPage({promoFilm, filmsData}: dataFromServer): JSX.Element {
  return (
    <>
      <HeaderFilmCard promoFilm={promoFilm}/>
      <PageContent filmsList={filmsData}/>
    </>
  );
}

export default MainPage;
