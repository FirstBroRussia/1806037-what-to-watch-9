import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import {DataFromServer} from './types/types';

import {getPromoFilm, getFilmsList} from './fetch/request-to-server';


async function startApp(): Promise<void> {
  const promoFilm = await getPromoFilm();
  const films = await getFilmsList();

  const data: DataFromServer = {
    promoFilm: promoFilm,
    filmsData: films,
  };

  ReactDOM.render(
    <React.StrictMode>
      <App {...data}/>
    </React.StrictMode>,
    document.getElementById('root'));
}


startApp();

