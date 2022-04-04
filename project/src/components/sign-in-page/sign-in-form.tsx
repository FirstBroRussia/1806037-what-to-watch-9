import {useEffect, useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {fetchPostLoginToServerAction} from '../../api/api-action';
import {useAppDispatch, useAppSelector} from '../../store/store';
import {AuthorizationStatusType} from '../../types/types';
import {AppRoute, AuthorizationValue, NameSpace, Values} from '../../utils/const';

const TIMEOUT_INVALID_ERROR = 2000;

type SignInFormType = {
  email: string,
  password: string
};

const checkValidForm = (formNodeElement: HTMLFormElement): boolean => {
  const emailInput = formNodeElement.querySelector('#user-email') as HTMLInputElement;
  const passwordInput = formNodeElement.querySelector('#user-password') as HTMLInputElement;
  emailInput.setCustomValidity('');
  passwordInput.setCustomValidity('');

  if (emailInput.value.length === Values.ZERO_VALUE) {
    emailInput.setCustomValidity('Пустое поле!');
    emailInput.reportValidity();
    setTimeout( () => {
      emailInput.setCustomValidity('');
      emailInput.reportValidity();
    }, TIMEOUT_INVALID_ERROR);

    return false;
  }
  if (passwordInput.value.length === Values.ZERO_VALUE) {
    passwordInput.setCustomValidity('Пустое поле!');
    passwordInput.reportValidity();
    setTimeout( () => {
      passwordInput.setCustomValidity('');
      passwordInput.reportValidity();
    }, TIMEOUT_INVALID_ERROR);

    return false;
  }
  if (!((/[0-9]/g).test(passwordInput.value) && (/[a-zA-Zа-яА-Я]/g).test(passwordInput.value))) {
    passwordInput.setCustomValidity('Пароль должен состоять минимум из одной цифры и одной буквы!');
    passwordInput.reportValidity();
    setTimeout( () => {
      passwordInput.setCustomValidity('');
      passwordInput.reportValidity();
    }, TIMEOUT_INVALID_ERROR);

    return false;
  }

  return true;
};


function SignInForm() {
  const initEmail = 'Oliver.conner@gmail.com';
  const initPassword = '12345678';

  const formRef = useRef<HTMLFormElement | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const authStatus: AuthorizationStatusType = useAppSelector((state) => state[NameSpace.USER].authorizationStatus);

  const [email, setEmail] = useState(initEmail);
  const [password, setPassword] = useState(initPassword);

  useEffect(() => {
    if (authStatus === AuthorizationValue.Auth) {
      navigate(AppRoute.MyList);
    }
  }, [authStatus, navigate]);

  const handleEmailInputChange: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    const emailValue = String(evt.target.value);
    setEmail(emailValue);
  };

  const handlePasswordInputChange: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    const passwordValue = evt.target.value;
    setPassword(passwordValue);
  };

  const handleSignInFormSubmit: React.FormEventHandler<HTMLFormElement> = (evt) => {
    if (!formRef.current) {
      return;
    }
    evt.preventDefault();
    const signInFormData: SignInFormType = {
      email: email,
      password: password,
    };
    const isValid = checkValidForm(formRef.current);
    if (!isValid) {
      return;
    }

    dispatch(fetchPostLoginToServerAction(signInFormData));
  };

  return (
    <form ref={formRef} onSubmit={handleSignInFormSubmit} action="#" className="sign-in__form">
      <div className="sign-in__fields">
        <div className="sign-in__field">
          <input onChange={handleEmailInputChange} className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" value={email} minLength={1} />
          <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
        </div>
        <div className="sign-in__field">
          <input onChange={handlePasswordInputChange} className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" value={password} minLength={1}/>
          <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
        </div>
      </div>
      <div className="sign-in__submit">
        <button className="sign-in__btn" type="submit">Sign in</button>
      </div>
    </form>
  );
}

export default SignInForm;
export type {SignInFormType};

