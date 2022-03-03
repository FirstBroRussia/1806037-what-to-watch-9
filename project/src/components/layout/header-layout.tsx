import {PropsWithChildren} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../utils/const';

function HeaderElement({children}: PropsWithChildren<JSX.Element>): JSX.Element {
  return (
    <header className="page-header film-card__head">
      <div className="logo">
        <Link className="logo__link" to={AppRoute.Main}>
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      {children}
    </header>
  );
}

export default HeaderElement;
