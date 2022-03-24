import {PropsWithChildren} from 'react';
import {Navigate} from 'react-router-dom';
import {useAppSelector} from '../../store/store';

import {AppRoute, AuthorizationValue} from '../../utils/const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationValue;
  children: PropsWithChildren<JSX.Element>;
};

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, children} = props;
  const authStatus = useAppSelector((state) => state.authorizationStatus);

  return authorizationStatus === authStatus ? children : <Navigate to={AppRoute.SignIn} />;
}

export default PrivateRoute;
