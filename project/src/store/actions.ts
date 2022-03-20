import {createAction} from '@reduxjs/toolkit';
import {FiltersHash} from '../components/utils/const';

const setAllFilmsAction = createAction(FiltersHash.All, (value) => ({
  payload: value,
}));
const setComediasFilmsAction = createAction(FiltersHash.Comedies, (value) => ({
  payload: value,
}));
const setCrimeFilmsAction = createAction(FiltersHash.Crime, (value) => ({
  payload: value,
}));
const setDocumentaryFilmsAction = createAction(FiltersHash.Documentary, (value) => ({
  payload: value,
}));
const setDramasFilmsAction = createAction(FiltersHash.Dramas, (value) => ({
  payload: value,
}));
const setFamilyFilmsAction = createAction(FiltersHash.Family, (value) => ({
  payload: value,
}));
const setHorrorFilmsAction = createAction(FiltersHash.Horror, (value) => ({
  payload: value,
}));
const setRomanceFilmsAction = createAction(FiltersHash.Romance, (value) => ({
  payload: value,
}));
const setSciFiFilmsAction = createAction(FiltersHash.SciFi, (value) => ({
  payload: value,
}));
const setThrillersFilmsAction = createAction(FiltersHash.Thrillers, (value) => ({
  payload: value,
}));

export {
  setAllFilmsAction,
  setComediasFilmsAction,
  setCrimeFilmsAction,
  setDocumentaryFilmsAction,
  setDramasFilmsAction,
  setFamilyFilmsAction,
  setHorrorFilmsAction,
  setRomanceFilmsAction,
  setSciFiFilmsAction,
  setThrillersFilmsAction
};
