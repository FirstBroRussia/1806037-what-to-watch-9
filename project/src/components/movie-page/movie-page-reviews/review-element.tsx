import he from 'he';
import dayjs from 'dayjs';
import {CommentDataType} from '../../../types/types';

function ReviewElement(item: CommentDataType) {
  const {comment, date, rating, user} = item;
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{he.encode(comment)}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date">{dayjs(date).format('MMMM DD, YYYY')}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}

export default ReviewElement;
