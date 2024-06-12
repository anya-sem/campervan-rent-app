import { ReviewItem } from '../ReviewItem/ReviewItem';

import css from './ReviewIList.module.css';

export const ReviewIList = ({ reviews }) => {
  return (
    <div>
      {reviews.length > 0 ? (
        <ul className={css.list}>
          {reviews.map((review, index) => (
            <li key={index}>
              <ReviewItem review={review} />
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.noReviews}>No reviews yet</p>
      )}
    </div>
  );
};
