import {AuthorizationValue, NameSpace} from '../../../utils/const';
import {useAppSelector} from '../../../store/store';
import SignIn from '../../header/user-block/sign-in';
import SignOut from '../../header/user-block/sign-out';
import HeaderElement from '../../layout/header-element';

function PageHeader(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state[NameSpace.USER].authorizationStatus);

  return (
    <HeaderElement>
      {
        authorizationStatus === AuthorizationValue.Auth ? <SignOut/> : <SignIn/>
      }
    </HeaderElement>
  );
}

export default PageHeader;
