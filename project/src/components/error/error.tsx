/* eslint-disable no-console */
import {useAppSelector} from '../../store/store';

function ErrorElement() {
  const fetchError = useAppSelector((state) => state.fetchError);

  if (fetchError) {
    return (
      <div className="fetch-error">
        {fetchError}
      </div>
    );
  }

  return null;
}

export default ErrorElement;
