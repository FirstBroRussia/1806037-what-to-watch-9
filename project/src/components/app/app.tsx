import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {AppRoute, AuthorizationValue} from '../utils/const';

import NotFoundPage from '../../pages/not-fount-page';
import MainPage from '../../pages/main-page';
import SignIn from '../sign-in/sing-in';
import MyList from '../my-list/my-list';
import MoviePage from '../movie-page/movie-page';
import AddReview from '../add-review/add-review';
import PlayerPlay from '../video-player/player-play';
import PrivateRoute from '../private-route/private-route';


function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage />}/>
        <Route path={AppRoute.SignIn} element={<SignIn />}/>
        <Route path={AppRoute.MyList} element={
          <PrivateRoute authorizationStatus={AuthorizationValue.NoAuth}>
            <MyList />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Film} element={<MoviePage />} />
        <Route path={AppRoute.Player} element={<PlayerPlay />} />

        <Route path={AppRoute.AddReview} element={<AddReview />} />

        <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );

}


export default App;
