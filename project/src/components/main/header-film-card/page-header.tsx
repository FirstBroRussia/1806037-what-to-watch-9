import {AuthorizationValue} from '../../../utils/const';
import {useAppSelector} from '../../../store/store';
import SignIn from '../../header/user-block/sign-in';
import SignOut from '../../header/user-block/sign-out';
import HeaderElement from '../../layout/header-layout';

function PageHeader(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    <HeaderElement>
      {
        authorizationStatus === AuthorizationValue.Auth ? <SignOut/> : <SignIn/>
      }
    </HeaderElement>
  );
}

export default PageHeader;
