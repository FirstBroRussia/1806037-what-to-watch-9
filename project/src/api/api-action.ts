/* eslint-disable no-console */
import {createAsyncThunk} from '@reduxjs/toolkit';
import {GetRequest} from '../components/utils/const';
import {FilmDataType} from '../types/types';
import {setFilmsDataAction, setPromoFilmDataAction} from '../store/actions';
import store, {api} from '../store/store';


const fetchGetFilmsDataAction = createAsyncThunk('data/getInitFilmsData',
  async () => {
    const {data} = await api.get<FilmDataType[]>(GetRequest.Films);
    console.log(data);
    store.dispatch(setFilmsDataAction(data));
  },
);

const fetchGetPromoFilmAction = createAsyncThunk('data/getPromoFilm',
  async () => {
    const {data} = await api.get<FilmDataType>(GetRequest.Promo);
    console.log(data);
    store.dispatch(setPromoFilmDataAction(data));
  },
);

export {fetchGetFilmsDataAction, fetchGetPromoFilmAction};
