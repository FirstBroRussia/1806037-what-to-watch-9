import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {AppRoute, AuthorizationValue} from '../../utils/const';

import NotFoundPage from '../../pages/not-fount-page';
import MainPage from '../../pages/main-page';


import SignInPageElement from '../sign-in-page/sign-in-page';
import MyList from '../my-list/my-list';
import MoviePage from '../movie-page/movie-page';
import AddReview from '../add-review/add-review';
import VideoPlayer from '../video-player/player-play';
import PrivateRoute from '../private-route/private-route';
import ErrorRequestPage from '../../pages/error-request';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage />}/>
        <Route path={AppRoute.SignIn} element={<SignInPageElement />}/>
        <Route path={AppRoute.MyList} element={
          <PrivateRoute authorizationStatus={AuthorizationValue.Auth}>
            <MyList />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.DefaultFilm} element={<MoviePage />} />
        <Route path={AppRoute.DefaultVideoPlayer} element={<VideoPlayer />} />

        <Route path={AppRoute.DefaultAddReview} element={<AddReview />} />

        <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
        <Route path={AppRoute.ErrorRequest} element={<ErrorRequestPage />}/>
      </Routes>
    </BrowserRouter>
  );

}


export default App;
