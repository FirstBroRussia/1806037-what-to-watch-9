type FilmDataType = {
  name: string,
  posterImage: string,
  previewImage: string,
  backgroundImage: string,
  backgroundColor: string,
  description: string,
  rating: number,
  scoresCount: number,
  director: string,
  starring: string[],
  runTime: number,
  genre: string,
  released: number,
  id: number,
  isFavorite: boolean,
  videoLink: string,
  previewVideoLink: string
};

type FilmsDataPropsType = {
  filmsList: FilmDataType[]
};

type FilmDataPropsType = {
  [key: string]: FilmDataType
};

type dataFromServer = {
  promoFilm: any,
  filmsData: FilmDataType[],
}

type formDataSubmitType = {
  rating: number,
  comment: string
}

export type {FilmDataType, FilmsDataPropsType, FilmDataPropsType, dataFromServer, formDataSubmitType};
