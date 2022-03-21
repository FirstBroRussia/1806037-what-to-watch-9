const ZERO_VALUE = 0;
const SIXTY_VALUE = 60;

const ERROR = 'error';

const PRIMARY_STATE = 'PRIMARY_STATE';

const ACTIVE_LINK_FROM_MOVIE_PAGE = 'film-nav__item--active';
const ACTIVE_FILTER_FROM_CATALOG = 'catalog__genres-item--active';

const enum RatingLevelCountValue {
  Zero = 0,
  Three = 3,
  Five = 5,
  Eight = 8,
  Ten = 10
}

const enum RatingLevel {
  Bad = 'Bad',
  Normal = 'Normal',
  Good = 'Good',
  VeryGood = 'Very good',
  Awesome = 'Awesome'
}

const enum ModeReceivingStarringData {
  Overview = 'overview',
  Details = 'details'
}

const enum HashFilmInfo {
  Overview = '#overview',
  Details = '#details',
  Reviews = '#reviews'
}

const enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  DefaultFilm = '/films/:id',
  OverviewFilm = '#overview',
  DetailsFilm = '#details',
  ReviewsFilm = '#reviews',
  DefaultAddReview = '/films/:id/review',
  DefaultVideoPlayer = '/player/:id',
  Film = '/films',
  AddReview = 'review',
  VideoPlayer = '/player',
  NotFound = '*',
  ErrorRequest = '/errorrequest'
}

const enum AuthorizationValue {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'Unknown',
}

const enum Genres {
  Adventure = 'Adventure',
  Drama = 'Drama',
  Crime = 'Crime',
  Fantasy = 'Fantasy',
  Action = 'Action',
  Comedy = 'Comedy',
  Thriller = 'Thriller',
  Documentary = 'Documentary',
  Horror = 'Horror',
  Romance = 'Romance',
}

const FiltersHash = {
  All: '#all',
  Comedies: '#comedies',
  Crime: '#crime',
  Documentary: '#documentary',
  Dramas: '#dramas',
  Horror: '#horror',
  Family: '#family',
  Romance: '#romance',
  SciFi: '#sci-fi',
  Thrillers: '#thrillers',
};

export {PRIMARY_STATE, ZERO_VALUE, SIXTY_VALUE, ERROR,  ACTIVE_LINK_FROM_MOVIE_PAGE, ACTIVE_FILTER_FROM_CATALOG, AppRoute, AuthorizationValue, RatingLevelCountValue, RatingLevel, ModeReceivingStarringData, HashFilmInfo as hashFilmInfo, FiltersHash, Genres};
