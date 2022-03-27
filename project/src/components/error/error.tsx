import {useAppSelector} from '../../store/store';

function ErrorElement(): JSX.Element | null {
  const selector = useAppSelector;
  const errorText = selector((state) => state.fetchError);

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
