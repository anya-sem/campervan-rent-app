import { useState } from 'react';
import { Icon } from '../Icons/Icon';
import css from './AdvertCard.module.css';

export const AdvertCard = ({ advert }) => {
  const {
    gallery,
    name,
    price,
    rating,
    reviews,
    location,
    description,
    adults,
    transmission,
    engine,
    details,
  } = advert;

  const [isHeartActive, setHeartActive] = useState(false);

  const handleHeartClick = () => {
    setHeartActive(!isHeartActive);
  };

  const firstImage = gallery && gallery.length > 0 ? gallery[0] : '';

  const kitchen = details.kitchen ? 'Kitchen' : null;
  const ac = details.airConditioner ? 'AC' : null;

  return (
    <li className={css.wrapper}>
      <img className={css.img} src={firstImage} alt={name} />
      <div className={css.textContentWrapper}>
        <div className={css.titleWrapper}>
          <h2 className={css.titleElement}>{name}</h2>
          <div className={css.priceWrapper}>
            <p className={css.titleElement}>€{price.toFixed(2)}</p>

            <button
              className={`${css.icon} ${isHeartActive ? 'active' : ''}`}
              onClick={handleHeartClick}
            >
              <Icon
                name={isHeartActive ? 'heart-pressed' : 'heart'}
                fill="none"
                stroke="currentColor"
                width="24"
                height="24"
              />
            </button>
          </div>
        </div>
        <div className={css.infoWrapper}>
          <div className={css.infoSubwrapper}>
            <Icon
              name="star"
              fill="none"
              stroke="currentColor"
              width="16"
              height="16"
            />
            <p className={css.reviews}>
              {rating}({reviews.length} Reviews)
            </p>
          </div>
          <div className={css.infoSubwrapper}>
            <Icon
              name="pin"
              fill="none"
              stroke="currentColor"
              width="16"
              height="16"
            />
            <p>{location}</p>
          </div>
        </div>
        <p className={css.text}>{description}...</p>
        <div className={css.featuresWrapper}>
          <div className={css.feature}>
            <Icon
              name="people"
              stroke="transparent"
              fill="#101828"
              width="20"
              height="20"
            />
            <p>{adults > 1 ? `${adults} adults` : `${adults} adult`}</p>
          </div>
          <div className={css.feature}>
            <Icon
              name="gear"
              fill="none"
              stroke="currentColor"
              width="20"
              height="20"
            />
            <p>
              {transmission.charAt(0).toUpperCase() + transmission.slice(1)}
            </p>
          </div>
          <div className={css.feature}>
            <Icon
              name="petrol"
              stroke="transparent"
              fill="#101828"
              width="20"
              height="20"
            />
            <p>{engine.charAt(0).toUpperCase() + engine.slice(1)}</p>
          </div>
          <div className={css.feature}>
            <Icon
              name="kitchen-tools"
              fill="none"
              stroke="currentColor"
              width="20"
              height="20"
            />
            <p>{kitchen}</p>
          </div>
          <div className={css.feature}>
            <Icon
              name="bed"
              fill="none"
              stroke="currentColor"
              width="20"
              height="20"
            />
            <p>
              {details.beds > 1
                ? `${details.beds} beds`
                : `${details.beds} bed`}
            </p>
          </div>
          <div className={css.feature}>
            <Icon
              name="air"
              stroke="transparent"
              fill="#101828"
              width="20"
              height="20"
            />
            <p>{ac}</p>
          </div>
        </div>
        <button className={css.button} type="button">
          Show more
        </button>
      </div>
    </li>
  );
};
