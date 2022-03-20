import {createReducer} from '@reduxjs/toolkit';
import {Genres} from '../components/utils/const';
import {FilmDataType} from '../types/types';
import {
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
} from './actions';

type initialStateType = {
  filmData: FilmDataType[] | null
};

const initialeState: initialStateType = {
  filmData: null,
};

const updateStore = createReducer(initialeState, (builder) => {
  builder.addCase(setAllFilmsAction, (state, action) => {
    state.filmData = action.payload;
  });
  builder.addCase(setComediasFilmsAction, (state, action) => {
    state.filmData = action.payload.slice().filter((film: FilmDataType) => {
      if (!(film.genre === Genres.Comedy)) {
        return false;
      }
      return true;
    });
  });
  builder.addCase(setCrimeFilmsAction, (state, action) => {
    state.filmData = action.payload.filter((film: FilmDataType) => {
      if (!(film.genre === Genres.Crime || film.genre === Genres.Action)) {
        return false;
      }
      return true;
    });
  });
  builder.addCase(setDocumentaryFilmsAction, (state, action) => {
    state.filmData = action.payload.filter((film: FilmDataType) => {
      if (!(film.genre === Genres.Documentary)) {
        return false;
      }
      return true;
    });
  });
  builder.addCase(setDramasFilmsAction, (state, action) => {
    state.filmData = action.payload.filter((film: FilmDataType) => {
      if (!(film.genre === Genres.Drama)) {
        return false;
      }
      return true;
    });
  });
  builder.addCase(setFamilyFilmsAction, (state, action) => {
    state.filmData = action.payload.filter((film: FilmDataType) => {
      if (!(film.genre === Genres.Adventure)) {
        return false;
      }
      return true;
    });
  });
  builder.addCase(setHorrorFilmsAction, (state, action) => {
    state.filmData = action.payload.filter((film: FilmDataType) => {
      if (!(film.genre === Genres.Horror)) {
        return false;
      }
      return true;
    });
  });
  builder.addCase(setRomanceFilmsAction, (state, action) => {
    state.filmData = action.payload.filter((film: FilmDataType) => {
      if (!(film.genre === Genres.Romance, action)) {
        return false;
      }
      return true;
    });
  });
  builder.addCase(setSciFiFilmsAction, (state, action) => {
    state.filmData = action.payload.filter((film: FilmDataType) => {
      if (!(film.genre === Genres.Fantasy)) {
        return false;
      }
      return true;
    });
  });
  builder.addCase(setThrillersFilmsAction, (state, action) => {
    state.filmData = action.payload.filter((film: FilmDataType) => {
      if (!(film.genre === Genres.Thriller)) {
        return false;
      }
      return true;
    });
  });
});

export default updateStore;


// const setReducer = (data: FilmDataType[]) => {
//   const updateStore = createReducer(data, (builder) => {
//     builder
//       .addCase(setMainState, (state, action) => {
//         state = action.payload;})
//       .addCase(getAllFilmsAction, (state) => state)
//       .addCase(getComediasFilmsAction, (state) => {
//         const comedianFilms: FilmDataType[] = state.filter((film: FilmDataType) => {
//           if (!(film.genre === Genres.Comedy)) {
//             return false;
//           }
//           return true;
//         });
//         return comedianFilms;
//       })
//       .addCase(getCrimeFilmsAction, (state) => {
//         const crimeFilms = state.filter((film: FilmDataType) => {
//           if (!(film.genre === Genres.Crime || film.genre === Genres.Action)) {
//             return false;
//           }
//           return true;
//         });
//         return crimeFilms;
//       })
//       .addCase(getDocumentaryFilmsAction, (state) => {
//         const documentaryFilms: FilmDataType[] = state.filter((film: FilmDataType) => {
//           if (!(film.genre === Genres.Documentary)) {
//             return false;
//           }
//           return true;
//         });
//         return documentaryFilms;
//       })
//       .addCase(getDramasFilmsAction, (state) => {
//         const dramasFilms: FilmDataType[] = state.filter((film: FilmDataType) => {
//           if (!(film.genre === Genres.Drama)) {
//             return false;
//           }
//           return true;
//         });
//         return dramasFilms;
//       })
//       .addCase(getFamilyFilmsAction, (state) => {
//         const familyFilms: FilmDataType[] = state.filter((film: FilmDataType) => {
//           if (!(film.genre === Genres.Adventure)) {
//             return false;
//           }
//           return true;
//         });
//         return familyFilms;
//       })
//       .addCase(getHorrorFilmsAction, (state) => {
//         const horrorFilms: FilmDataType[] = state.filter((film: FilmDataType) => {
//           if (!(film.genre === Genres.Horror)) {
//             return false;
//           }
//           return true;
//         });
//         return horrorFilms;
//       })
//       .addCase(getRomanceFilmsAction, (state) => {
//         const romanceFilms: FilmDataType[] = state.filter((film: FilmDataType) => {
//           if (!(film.genre === Genres.Romance)) {
//             return false;
//           }
//           return true;
//         });
//         return romanceFilms;
//       })
//       .addCase(getSciFiFilmsAction, (state) => {
//         const sciFiFilms: FilmDataType[] = state.filter((film: FilmDataType) => {
//           if (!(film.genre === Genres.Fantasy)) {
//             return false;
//           }
//           return true;
//         });
//         return sciFiFilms;
//       })
//       .addCase(getThrillersFilmsAction, (state) => {
//         const thrillerFilms: FilmDataType[] = state.filter((film: FilmDataType) => {
//           if (!(film.genre === Genres.Thriller)) {
//             return false;
//           }
//           return true;
//         });
//         return thrillerFilms;
//       });
//   });

//   return updateStore;
// };
