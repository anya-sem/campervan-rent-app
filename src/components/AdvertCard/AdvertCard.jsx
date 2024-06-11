import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, deleteFavorite } from '../../redux/operations';
import { isFavorite, selectFavorites } from '../../redux/selectors';
import { Icon } from '../Icons/Icon';
import { Features } from '../Features/Features';
import { BaseModal } from '../BaseModal/BaseModal';
import DetailsModal from '../DetailsModal/DetailsModal';
import css from './AdvertCard.module.css';

export const AdvertCard = ({ advert }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const [isHeartActive, setIsHeartActive] = useState(
    isFavorite(favorites, advert._id)
  );
  const [isOpen, setIsOpen] = useState(false);

  const handleHeartClick = () => {
    if (isHeartActive) {
      dispatch(deleteFavorite(advert._id));
    } else {
      dispatch(addFavorite(advert));
    }
    setIsHeartActive(!isHeartActive);
  };

  useEffect(() => {
    setIsHeartActive(isFavorite(favorites, advert._id));
  }, [favorites, advert._id]);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

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

  const firstImage = gallery && gallery.length > 0 ? gallery[0] : '';

  return (
    <li className={css.wrapper}>
      <img className={css.img} src={firstImage} alt={name} />
      <div className={css.textContentWrapper}>
        <div className={css.titleWrapper}>
          <h2 className={css.titleElement}>{name}</h2>
          <div className={css.priceWrapper}>
            <p className={css.titleElement}>€{price.toFixed(2)}</p>

            <button
              className={`${css.icon} ${isHeartActive ? css.active : ''}`}
              onClick={handleHeartClick}
            >
              <Icon
                name={isHeartActive ? 'heart-pressed' : 'heart'}
                fill={isHeartActive ? 'red' : 'none'}
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
        <Features advert={advert} showAdditionalFeatures={false} />
        <button className={css.button} type="button" onClick={openModal}>
          Show more
        </button>
      </div>
      <BaseModal isOpen={isOpen} onClose={closeModal}>
        <DetailsModal onClose={closeModal} advert={advert} />
      </BaseModal>
    </li>
  );
};
