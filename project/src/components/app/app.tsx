import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {AppRoute, AuthorizationValue} from '../utils/const';

import {DataFromServer} from '../../types/types';

import NotFoundPage from '../../pages/not-fount-page';
import MainPage from '../../pages/main-page';
import SignIn from '../sign-in/sing-in';
import MyList from '../my-list/my-list';
import MoviePage from '../movie-page/movie-page';
import AddReview from '../add-review/add-review';
import VideoPlayer from '../video-player/player-play';
import PrivateRoute from '../private-route/private-route';
import ErrorRequestPage from '../../pages/error-request';

function App(data: DataFromServer): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage {...data}/>} />
        <Route path={AppRoute.SignIn} element={<SignIn />}/>
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
