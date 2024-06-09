import { Icon } from '../Icons/Icon';

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

  const firstImage = gallery && gallery.length > 0 ? gallery[0] : '';

  return (
    <li>
      <img src={firstImage} alt={name} />
      <h2>{name}</h2>
      <div>
        <p>{price}</p>
        <Icon
          name="heart"
          fill="none"
          stroke="currentColor"
          width="24"
          height="24"
        />
      </div>
      <div>
        <div>
          <Icon
            name="star"
            fill="none"
            stroke="currentColor"
            width="16"
            height="16"
          />
          <p>
            {rating}({reviews.length} Reviews)
          </p>
        </div>
        <div>
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
      <p>{description}</p>
      <div>
        <div>
          <p>{adults}</p>
        </div>
        <div>
          <p>{transmission}</p>
        </div>
        <div>
          <p>{engine}</p>
        </div>
        <div>
          <p>{details.kitchen}</p>
        </div>
        <div>
          <p>{details.bed}</p>
        </div>
        <div>
          <p>{details.airConditioner}</p>
        </div>
      </div>
      <button type="button">Show more</button>
    </li>
  );
};
