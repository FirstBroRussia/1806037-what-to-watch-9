import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {fetchPostLoginToServerAction} from '../../api/api-action';
import {useAppDispatch, useAppSelector} from '../../store/store';
import { AppRoute, AuthorizationValue } from '../../utils/const';

type SignInFormType = {
  email: string,
  password: string
};

// const aaa: SignInFormType = {
//   email: 'Oliver.conner@gmail.com',
//   password: '12345678',
// };

function SignInFormElement() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {authorizationStatus} = useAppSelector((state) => state);
  const initEmail = 'Oliver.conner@gmail.com';
  const initPassword = '12345678';

  const [email, setEmail] = useState(initEmail);
  const [password, setPassword] = useState(initPassword);

  useEffect(() => {
    if (authorizationStatus === AuthorizationValue.Auth) {
      navigate(AppRoute.MyList);
    }
  });


  const handleEmailInputChange: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    const emailValue = String(evt.target.value);
    setEmail(emailValue);
  };

  const handlePasswordInputChange: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    const passwordValue = evt.target.value;
    setPassword(passwordValue);
  };

  const handleSignInFormSubmit: React.FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    const signInFormData: SignInFormType = {
      email: email,
      password: password,
    };
    dispatch(fetchPostLoginToServerAction(signInFormData));
  };

  return (
    <form onSubmit={handleSignInFormSubmit} action="#" className="sign-in__form">
      <div className="sign-in__fields">
        <div className="sign-in__field">
          <input onChange={handleEmailInputChange} className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" value={email}/>
          <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
        </div>
        <div className="sign-in__field">
          <input onChange={handlePasswordInputChange} className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" value={password}/>
          <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
        </div>
      </div>
      <div className="sign-in__submit">
        <button className="sign-in__btn" type="submit">Sign in</button>
      </div>
    </form>
  );
}

export default SignInFormElement;
export type {SignInFormType};
