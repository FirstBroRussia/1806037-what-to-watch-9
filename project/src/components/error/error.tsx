import {useAppSelector} from '../../store/store';

function ErrorElement(): JSX.Element | null {
  const errorText = useAppSelector(({OTHER}) => OTHER.fetchError);

  if (errorText !== null) {
    return (
      <div className="fetch-error">
        {errorText}
      </div>
    );
  }

  return null;
}

export default ErrorElement;
