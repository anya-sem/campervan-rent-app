import { useState } from 'react';
import { Icon } from '../Icons/Icon';
import { Features } from '../Features/Features';
import { VehicleDetails } from '../VehicleDetails/VehicleDetails';
import css from './DetailsModal.module.css';

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
        <p className={css.text}>{description}...</p>
      </div>
      <div>
        <div>
          <button onClick={() => handleTabChange('features')}>Features</button>
          <button onClick={() => handleTabChange('reviews')}>Reviews</button>
        </div>

        {activeTab === 'features' && (
          <div>
            <Features advert={advert} showAdditionalFeatures={true} />
            <VehicleDetails advert={advert} />
          </div>
        )}

        {activeTab === 'reviews' && (
          <div>
            <p>Reviews</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default DetailsModal;
