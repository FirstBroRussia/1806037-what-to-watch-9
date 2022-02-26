import {PropsWithChildren} from 'react';
import {Navigate} from 'react-router-dom';

import {AppRoute, AuthorizationValue} from '../utils/const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationValue;
  children: PropsWithChildren<JSX.Element>;
};

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, children} = props;

  return authorizationStatus === AuthorizationValue.Auth ? children : <Navigate to={AppRoute.SignIn} />;
}

export default PrivateRoute;
