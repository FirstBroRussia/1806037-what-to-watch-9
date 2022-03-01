const ZERO_VALUE = 0;

const enum RatingLevelCountValue {
  ZERO = 0,
  THREE = 3,
  FIVE = 5,
  EIGHT = 8,
  TEN = 10
}

const enum RatingLevel {
  Bad = 'Bad',
  Normal = 'Normal',
  Good = 'Good',
  VeryGood = 'Very good',
  Awesome = 'Awesome'
}

const enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  DefaultFilm = '/films/:id',
  Film = '/films',
  // AddReview = '/review',
  AddReview = '/films/:id/review',
  DefaultVideoPlayer = '/player/:id',
  VideoPlayer = '/player',
  NotFound = '*'
}

const enum AuthorizationValue {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'Unknown',
}

export {ZERO_VALUE, AppRoute, AuthorizationValue, RatingLevelCountValue, RatingLevel};
