/* eslint-disable no-console */
import { useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {fetchLoginOutToServerAction} from '../../../api/api-action';
import {useAppDispatch, useAppSelector} from '../../../store/store';
import {AppRoute} from '../../../utils/const';

function SignOut(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.userData);

  useEffect(() => {
    if (userData === null) {
      navigate(AppRoute.Main);
    }
  });

  const handleSignOutLinkClick: React.MouseEventHandler<HTMLAnchorElement> = (evt) => {
    evt.preventDefault();
    dispatch(fetchLoginOutToServerAction());
  };

  return (
    <ul className="user-block">
      {
        (
          () => {
            if (userData === null) {
              return ('');
            } else {
              return (
                <>
                  <li className="user-block__item">
                    <Link to={AppRoute.MyList}>
                      <div className="user-block__avatar">
                        <img src={userData.avatarUrl} alt="User avatar" width="63" height="63" />
                      </div>
                    </Link>
                  </li>
                  <li className="user-block__item">
                    <Link onClick={handleSignOutLinkClick} className="user-block__link" to={AppRoute.Main}>Sign out</Link>
                  </li>
                </>
              );
            }
          }
        )()
      }
    </ul>
  );
}

export default SignOut;
