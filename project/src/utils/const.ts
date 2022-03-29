const enum Values {
  ZERO_VALUE = 0,
  FOUR_VALUE = 4,
  FIFTY_VALUE = 50,
  SIXTY_VALUE = 60,
}

const VISIBLE_FILMS_STEP_COUNT = 8;

const enum NameSpace {
  USER = 'USER',
  DATA = 'DATA',
  OTHER = 'OTHER'
}

const enum AuthorizationValue {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'Unknown',
}

const enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

const enum Requests {
  Promo = '/promo',
  Films = '/films',
  Similar = '/similar',
  Favorite = '/favorite',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout'
}

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

const HashFilmInfo = {
  Overview: '#overview',
  Details: '#details',
  Reviews: '#reviews',
};

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

export {VISIBLE_FILMS_STEP_COUNT, Values, NameSpace, Requests, HTTP_CODE, AppRoute, AuthorizationValue, RatingLevelCountValue, RatingLevel, ModeReceivingStarringData, HashFilmInfo, FiltersHash, Genres};
