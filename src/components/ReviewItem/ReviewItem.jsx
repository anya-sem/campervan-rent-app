import { Icon } from '../Icons/Icon';

import css from './ReviewItem.module.css';

export const ReviewItem = ({ review }) => {
  const { reviewer_name, reviewer_rating, comment } = review;

  return (
    <div className={css.wrapper}>
      <div className={css.infoWrapper}>
        <img
          src={`https://eu.ui-avatars.com/api/?name=${reviewer_name}&size=250`}
          alt="Avatar"
          className={css.img}
        />
        <div className={css.nameWrapper}>
          <p className={css.name}>{reviewer_name}</p>
          <div>
            {[...Array(reviewer_rating)].map((_, index) => (
              <Icon
                key={index}
                name="star"
                fill="none"
                stroke="currentColor"
                width="16"
                height="16"
              />
            ))}
          </div>
        </div>
      </div>
      <p className={css.comment}>{comment}</p>
    </div>
  );
};
