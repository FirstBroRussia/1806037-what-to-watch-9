import HeaderFilmCard from './header-film-card/header-film-card';
import PageContent from './page-content/page-content';
import PreloaderElement from '../preloader/preloader';
import {useAppSelector} from '../../store/store';
import {NameSpace} from '../../utils/const';

function MainPage(): JSX.Element {
  const isPrimaryLoadData: boolean = useAppSelector( (state) => state[NameSpace.DATA].isPrimaryLoadData);

  if (!isPrimaryLoadData) {
    return (
      <PreloaderElement />
    );
  }

  return (
    <>
      <HeaderFilmCard />
      <PageContent />
    </>
  );
}

export default MainPage;
