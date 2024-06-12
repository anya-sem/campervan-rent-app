import { useState } from 'react';
import { Icon } from '../Icons/Icon';
import { Features } from '../Features/Features';
import { VehicleDetails } from '../VehicleDetails/VehicleDetails';
import BookForm from '../BookingForm/BookingForm';
import css from './DetailsModal.module.css';
import { ReviewIList } from '../ReviewIList/ReviewIList';

const DetailsModal = ({ advert }) => {
  const [activeTab, setActiveTab] = useState('features');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const {
    gallery = [],
    name,
    price,
    rating,
    reviews,
    location,
    description,
  } = advert;

  const firstImage = gallery && gallery.length > 0 ? gallery[0] : '';
  const secondImage = gallery && gallery.length > 1 ? gallery[1] : '';
  const thirdImage = gallery && gallery.length > 2 ? gallery[2] : '';

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>{name}</h2>
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
      <p className={css.price}>€{price.toFixed(2)}</p>
      <div className={css.scrollSection}>
        <div className={css.imgWrapper}>
          <img className={css.img} src={firstImage} alt={name} />
          <img className={css.img} src={secondImage} alt={name} />
          <img className={css.img} src={thirdImage} alt={name} />
        </div>
        <div>
          <p className={css.text}>{description}</p>
        </div>
        <div>
          <div className={css.tabWrapper}>
            <button
              className={`${css.tab} ${
                activeTab === 'features' ? css.active : ''
              }`}
              onClick={() => handleTabChange('features')}
            >
              Features
            </button>
            <button
              className={`${css.tab} ${
                activeTab === 'reviews' ? css.active : ''
              }`}
              onClick={() => handleTabChange('reviews')}
            >
              Reviews
            </button>
          </div>
          <div className={css.tabContentWrapper}>
            {activeTab === 'features' && (
              <div className={css.textContentWrapper}>
                <Features advert={advert} showAdditionalFeatures={true} />
                <VehicleDetails advert={advert} />
              </div>
            )}
            {activeTab === 'reviews' && (
              <div className={css.textContentWrapper}>
                <ReviewIList reviews={reviews} />
              </div>
            )}
            <BookForm />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailsModal;
