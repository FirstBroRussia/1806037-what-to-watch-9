const enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  // AddReview = '/review',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  NotFound = '*'
}

const enum AuthorizationValue {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'Unknown',
}

export {AppRoute, AuthorizationValue};
