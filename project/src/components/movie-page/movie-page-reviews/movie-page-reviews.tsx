import {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {CommentDataType} from '../../../types/types';
import {getCommentsFilm} from '../../../fetch/request-to-server';
import ReviewElement from './review-element';

function MoviePageReviewsElement() {
  const location = useLocation();
  const [state, setState] = useState(null);
  const idFilm = location.state as number;

  useEffect(() => {
    const requestToServer = setTimeout(async () => {
      const response = await getCommentsFilm(idFilm);
      setState(response);
    }, 0);
    return () => {
      clearTimeout(requestToServer);
    };
  }, []);

  if (state === null) {
    return  (
      <div className="film-card__reviews film-card__row">
      </div>
    );
  }

  const commentsList = state as CommentDataType[];

  return  (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {
          commentsList.map( (item, index) => {
            if (index % 2 === 0) {
              return <ReviewElement {...item} />;
            }
          })
        }
      </div>
      <div className="film-card__reviews-col">
        {
          commentsList.map( (item, index) => {
            if (index % 2 !== 0) {
              return <ReviewElement {...item} />;
            }
          })
        }
      </div>
    </div>
  );


}

export default MoviePageReviewsElement;
