import Catalog from './catalog';
import PageFooter from './page-footer';

function PageContent(): JSX.Element {
  return (
    <div className="page-content">
      <Catalog />
      <PageFooter />
    </div>
  );
}

export default PageContent;
