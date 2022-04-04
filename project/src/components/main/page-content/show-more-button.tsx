import {setIncVisibleFilmsState} from '../../../store/slices/other-slice';
import {useAppDispatch} from '../../../store/store';

function ShowMoreButton() {
  const dispatch = useAppDispatch();

  const handleShowMoreButtonClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(setIncVisibleFilmsState());
  };

  return (
    <div className="catalog__more">
      <button onClick={handleShowMoreButtonClick} className="catalog__button" type="button">Show more</button>
    </div>
  );
}

export default ShowMoreButton;
