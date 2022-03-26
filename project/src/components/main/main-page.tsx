import HeaderFilmCard from './header-film-card/header-film-card';
import PageContent from './page-content/page-content';
import PreloaderElement from '../preloader/preloader';
import {useAppSelector} from '../../store/store';

function MainPage(): JSX.Element {
  const {isPrimaryLoadData} = useAppSelector( (state) => state);

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
