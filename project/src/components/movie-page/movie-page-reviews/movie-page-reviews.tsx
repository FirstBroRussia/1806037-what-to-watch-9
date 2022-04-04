import {useEffect} from 'react';
import ReviewElement from './review-element';
import {useAppDispatch, useAppSelector} from '../../../store/store';
import {CommentDataType} from '../../../types/types';
import {fetchGetIdFilmCommentsListAction} from '../../../api/api-action';
import {setFilmIdCommentsDataAction} from '../../../store/slices/data-slice';
import {NameSpace} from '../../../utils/const';

type MoviePageReviewsElementPropsType ={
  idFilm: number
}

function MoviePageReviews({idFilm}: MoviePageReviewsElementPropsType) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGetIdFilmCommentsListAction(idFilm));
    return () => {
      dispatch(setFilmIdCommentsDataAction(null));
    };
  }, [dispatch, idFilm]);

  const commentsData: CommentDataType[] | null = useAppSelector((state) => state[NameSpace.DATA].idFilmCommentsData);

  if (commentsData === null) {
    return  (
      <div className="film-card__reviews film-card__row">
      </div>
    );
  }

  return  (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {
          commentsData.map( (item, index) => {
            if (index % 2 === 0) {
              return <ReviewElement key={`review-${item.id}`} {...item} />;
            }
            return null;
          })
        }
      </div>
      <div className="film-card__reviews-col">
        {
          commentsData.map( (item, index) => {
            if (index % 2 !== 0) {
              return <ReviewElement key={`review-${item.id}`} {...item} />;
            }
            return null;
          })
        }
      </div>
    </div>
  );


}

export default MoviePageReviews;
