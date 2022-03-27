import store from './store/store';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import {Provider} from 'react-redux';
import {fetchGetAuthStatusAction, fetchGetFilmsDataAction, fetchGetPromoFilmAction} from './api/api-action';
import ErrorElement from './components/error/error';

store.dispatch(fetchGetAuthStatusAction());
store.dispatch(fetchGetFilmsDataAction());
store.dispatch(fetchGetPromoFilmAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorElement/>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
