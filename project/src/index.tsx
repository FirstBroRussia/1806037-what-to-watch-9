/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import {dataFromServer} from './types/types';

import {getPromoFilm, getFilmsList} from './fetch/request-to-server';


async function StartApp(): Promise<void> {
  const promoFilm = await getPromoFilm();
  const films = await getFilmsList();

  const data: dataFromServer = {
    promoFilm: promoFilm,
    filmsData: films,
  };

  ReactDOM.render(
    <React.StrictMode>
      <App {...data}/>
    </React.StrictMode>,
    document.getElementById('root'));
}


StartApp();

