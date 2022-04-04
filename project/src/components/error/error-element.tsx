import {useAppSelector} from '../../store/store';
import {NameSpace} from '../../utils/const';

type ErrorText = string;

function ErrorElement(): JSX.Element | null {
  const errorText: ErrorText | null = useAppSelector((state) => state[NameSpace.OTHER].fetchError);

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
