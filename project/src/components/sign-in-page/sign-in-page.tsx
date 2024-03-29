import {useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useAppSelector} from '../../store/store';
import {AppRoute, AuthorizationValue, NameSpace} from '../../utils/const';
import FooterElement from '../layout/footer-element';
import SignInForm from './sign-in-form';

function SignInPage(): JSX.Element {
  const authStatus = useAppSelector((state) => state[NameSpace.USER].authorizationStatus);
  const navigate = useNavigate();

  useEffect(() => {
    if (authStatus === AuthorizationValue.Auth) {
      navigate(AppRoute.MyList);
    }
  });

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={AppRoute.Main} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <SignInForm/>
      </div>

      <FooterElement/>
    </div>
  );
}

export default SignInPage;
