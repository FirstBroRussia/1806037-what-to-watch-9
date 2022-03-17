const ZERO_VALUE = 0;

const ERROR = 'error';

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

export {ZERO_VALUE, ERROR, AppRoute, AuthorizationValue, RatingLevelCountValue, RatingLevel, ModeReceivingStarringData};
