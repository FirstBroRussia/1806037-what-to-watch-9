import {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {TemporaryInputDataType, CommentDataType} from '../../../types/types';
import {getCommentsFilm} from '../../../fetch/request-to-server';
import ReviewElement from './review-element';

function MoviePageReviewsElement() {
  const location = useLocation();
  const state = useState(null);
  const commentsData = state[0];
  const setCommentsData = state[1];
  const inputData = location.state as TemporaryInputDataType;
  const idFilm = inputData[0];

  useEffect(() => {
    const requestToServer = setTimeout(async () => {
      const response = await getCommentsFilm(idFilm);
      setCommentsData(response);
    }, 0);
    return () => {
      clearTimeout(requestToServer);
    };
  }, []);

  if (commentsData === null) {
    return  (
      <div className="film-card__reviews film-card__row">
      </div>
    );
  }

  const commentsList = commentsData as CommentDataType[];

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
