type promoFilmType = FilmDataType | [];

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

type UserDataType = {
  avatarUrl: string,
  email: string,
  id: number,
  name: string,
  token: string,
}

type NewCommentDataType = {
  comment: string,
  rating: number
};

type FilmsDataPropsType = {
  filmsList: FilmDataType[]
};

type FilmDataPropsType = {
  filmData: FilmDataType
};

type FormDataSubmitType = {
  rating: number,
  comment: string
}

type PostCommentAsyncParamType = {
  idFilm: number,
  commentData: NewCommentDataType
}

type SetStatusFavoriteFilmAsyncFilmParamsType = {
  idFilm: number,
  status: number,
  promo?: boolean
}

type IdFilmType = number;

type AuthorizationStatusType = string;

type FavoriteFilmsDataType = FilmDataType[] | [] | null;

type IdFilmCommentsDataType = CommentDataType[] | [] | null;

type SimilarFilmsDataType = FilmDataType[] | [] | null;

export type {FavoriteFilmsDataType, IdFilmCommentsDataType, SimilarFilmsDataType, AuthorizationStatusType, IdFilmType, promoFilmType, FilmDataType, FilmsDataPropsType, UserDataType, FilmDataPropsType, FormDataSubmitType, CommentDataType, NewCommentDataType, PostCommentAsyncParamType, SetStatusFavoriteFilmAsyncFilmParamsType};
