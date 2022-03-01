/* eslint-disable no-console */
import {FilmsDataPropsType} from '../../../types/types';

import Catalog from './catalog';
import PageFooter from './page-footer';

function PageContent({filmsList}: FilmsDataPropsType): JSX.Element {
  return (
    <div className="page-content">
      <Catalog filmsList={filmsList}/>
      <PageFooter />
    </div>
  );
}

export default PageContent;
