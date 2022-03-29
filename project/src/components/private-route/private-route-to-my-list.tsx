import {PropsWithChildren} from 'react';
import {Navigate} from 'react-router-dom';
import {useAppSelector} from '../../store/store';

import {AppRoute, AuthorizationValue} from '../../utils/const';

export type PrivateRoutePropsType = {
  authorizationStatus: AuthorizationValue;
  children: PropsWithChildren<JSX.Element>;
};

function PrivateRouteToMyList(props: PrivateRoutePropsType): JSX.Element {
  const {authorizationStatus, children} = props;
  const authStatus = useAppSelector(({USER}) => USER.authorizationStatus);

  return authorizationStatus === authStatus ? children : <Navigate to={AppRoute.SignIn} />;
}

export default PrivateRouteToMyList;
