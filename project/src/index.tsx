import store from './store/store';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import {Provider} from 'react-redux';
import {fetchGetAuthStatusAction, fetchGetFilmsDataAction, fetchGetPromoFilmAction} from './api/api-action';
import ErrorElement from './components/error/error';

const TIMEOUT_PRIMARY_INIT_APP = 500;

store.dispatch(fetchGetAuthStatusAction());
store.dispatch(fetchGetFilmsDataAction());
store.dispatch(fetchGetPromoFilmAction());

setTimeout(() => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <ErrorElement/>
        <App/>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root'));
}, TIMEOUT_PRIMARY_INIT_APP);
