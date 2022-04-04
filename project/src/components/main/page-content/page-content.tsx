import FooterElement from '../../layout/footer-element';
import Catalog from './catalog';

function PageContent(): JSX.Element {
  return (
    <div className="page-content">
      <Catalog />
      <FooterElement/>
    </div>
  );
}

export default PageContent;
