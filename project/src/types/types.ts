type ToggleStyleToElementParamType = {
  prevElement: Element,
  currElement: Element,
  style: string
};


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

type CommentDataType = {
  comment: string,
  date: Date,
  id: number,
  rating: number,
  user: {
    id: number,
    name: string,
  }
};

type FilmsDataPropsType = {
  filmsList: FilmDataType[]
};

type FilmDataPropsType = {
  filmData: FilmDataType
};

type DataFromServer = {
  promoFilm: FilmDataType & string,
  filmsData: FilmDataType[] & string,
}

type FormDataSubmitType = {
  rating: number,
  comment: string
}

export type {FilmDataType, FilmsDataPropsType, FilmDataPropsType, DataFromServer, FormDataSubmitType, ToggleStyleToElementParamType, CommentDataType};
