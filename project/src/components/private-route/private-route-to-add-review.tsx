import {Navigate} from 'react-router-dom';
import {useAppSelector} from '../../store/store';
import {AppRoute} from '../../utils/const';
import {PrivateRoutePropsType} from './private-route-to-my-list';

function PrivateRouteToAddReview(props: PrivateRoutePropsType): JSX.Element {
  const {authorizationStatus, children}: PrivateRoutePropsType = props;
  const authStatus = useAppSelector(({USER}) => USER.authorizationStatus);

  return authorizationStatus === authStatus ? children : <Navigate to={AppRoute.SignIn} />;
}

export default PrivateRouteToAddReview;
