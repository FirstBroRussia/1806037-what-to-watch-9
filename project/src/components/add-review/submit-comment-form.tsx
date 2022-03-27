import {useEffect, useRef, useState} from 'react';
import { fetchPostCommentAction } from '../../api/api-action';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { PostCommentAsyncParamType } from '../../types/types';
import {FIFTY_VALUE, ZERO_VALUE} from '../../utils/const';

type SubmitCommentFormPropsType = {
  idFilm: number
}

function SubmitCommentForm({idFilm}: SubmitCommentFormPropsType): JSX.Element {
  const dispatch = useAppDispatch();
  const selector = useAppSelector;
  const formRef = useRef(null);
  const [formElement, setFormElement] = useState(formRef.current);
  const ratingValue = 0;
  const commentValue = '';
  const [rating, setRating] = useState(ratingValue);
  const [comment, setComment] = useState(commentValue);
  const isFailPostComment = selector((state) => state.isFailPostComment);

  useEffect(() => {
    if (isFailPostComment) {
      removeClassToForm(formElement);
      return;
    }
    setFormElement(formRef.current);
  }, [setFormElement, isFailPostComment, formElement]);

  const checkFormDataValue = (form: Element | null) => {
    if (form === null) {
      return;
    }
    const submitButtonElement = form.querySelector('button') as HTMLButtonElement;
    if (rating === ZERO_VALUE || comment.length < FIFTY_VALUE) {
      submitButtonElement.disabled = true;
      return;
    }
    submitButtonElement.disabled = false;
  };

  const addClassToForm = (form: Element | null): void => {
    if (form === null) {
      throw new Error('НЕВЕРНОЕ ЗНАЧЕНИЕ!!!');
    }
    form.classList.add('block-form');
  };

  const removeClassToForm = (form: Element | null): void => {
    if (form === null) {
      throw new Error('НЕВЕРНОЕ ЗНАЧЕНИЕ!!!');
    }
    form.classList.remove('block-form');
  };

  const handleRatingStarsChange: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    const valueTargetElement = Number(evt.target.value);
    setRating(valueTargetElement);
  };

  const handleTextAreaChange: React.ChangeEventHandler<HTMLTextAreaElement> = (evt) => {
    const valueTextArea = evt.target.value;
    setComment(valueTextArea);
  };

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    const postCommentData: PostCommentAsyncParamType = {
      idFilm: Number(idFilm),
      commentData: {
        comment: comment,
        rating: rating,
      },
    };
    addClassToForm(formElement);
    dispatch(fetchPostCommentAction(postCommentData));
  };

  checkFormDataValue(formElement);

  return (
    <form ref={formRef} onSubmit={handleFormSubmit} action="#" className="add-review__form">
      <div className="rating">
        <div onChange={handleRatingStarsChange} className="rating__stars">
          <input className="rating__input" id="star-10" type="radio" name="rating" value="10" />
          <label className="rating__label" htmlFor="star-10">Rating 10</label>

          <input className="rating__input" id="star-9" type="radio" name="rating" value="9" />
          <label className="rating__label" htmlFor="star-9">Rating 9</label>

          <input className="rating__input" id="star-8" type="radio" name="rating" value="8" />
          <label className="rating__label" htmlFor="star-8">Rating 8</label>

          <input className="rating__input" id="star-7" type="radio" name="rating" value="7" />
          <label className="rating__label" htmlFor="star-7">Rating 7</label>

          <input className="rating__input" id="star-6" type="radio" name="rating" value="6" />
          <label className="rating__label" htmlFor="star-6">Rating 6</label>

          <input className="rating__input" id="star-5" type="radio" name="rating" value="5" />
          <label className="rating__label" htmlFor="star-5">Rating 5</label>

          <input className="rating__input" id="star-4" type="radio" name="rating" value="4" />
          <label className="rating__label" htmlFor="star-4">Rating 4</label>

          <input className="rating__input" id="star-3" type="radio" name="rating" value="3" />
          <label className="rating__label" htmlFor="star-3">Rating 3</label>

          <input className="rating__input" id="star-2" type="radio" name="rating" value="2" />
          <label className="rating__label" htmlFor="star-2">Rating 2</label>

          <input className="rating__input" id="star-1" type="radio" name="rating" value="1" />
          <label className="rating__label" htmlFor="star-1">Rating 1</label>
        </div>
      </div>

      <div className="add-review__text">
        <textarea onChange={handleTextAreaChange} value={comment} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" minLength={50} maxLength={400}></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled>Post</button>
        </div>
      </div>
    </form>
  );
}

export {SubmitCommentForm};
