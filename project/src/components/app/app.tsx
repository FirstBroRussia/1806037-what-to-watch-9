import {Route, Routes} from 'react-router-dom';
import {browserHistory} from '../../utils/browser-history';
import HistoryRouter from '../history-router/history-router';

import {AppRoute, AuthorizationValue} from '../../utils/const';

import NotFoundPage from '../../pages/not-fount-page';
import MainPage from '../main/main-page';

import SignInPageElement from '../sign-in-page/sign-in-page';
import MyList from '../my-list/my-list';
import MoviePage from '../movie-page/movie-page';
import AddReview from '../add-review/add-review';
import VideoPlayer from '../video-player/player-play';
import PrivateRouteToMyList from '../private-route/private-route-to-my-list';
import PrivateRouteToAddReview from '../private-route/private-route-to-add-review';

function App(): JSX.Element {
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage />}/>
        <Route path={AppRoute.SignIn} element={<SignInPageElement />}/>
        <Route path={AppRoute.MyList} element={
          <PrivateRouteToMyList authorizationStatus={AuthorizationValue.Auth}>
            <MyList />
          </PrivateRouteToMyList>
        }
        />
        <Route path={AppRoute.DefaultFilm} element={<MoviePage />} />
        <Route path={AppRoute.DefaultVideoPlayer} element={<VideoPlayer />} />

        <Route path={AppRoute.DefaultAddReview} element={
          <PrivateRouteToAddReview authorizationStatus={AuthorizationValue.Auth}>
            <AddReview />
          </PrivateRouteToAddReview>
        }
        />
        <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
      </Routes>
    </HistoryRouter>
  );
}


export default App;
