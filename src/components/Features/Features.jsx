import { Icon } from '../Icons/Icon';
import css from './Features.module.css';

export const Features = ({ advert, showAdditionalFeatures }) => {
  const { adults, transmission, engine, details } = advert;

  return (
    <div className={css.wrapper}>
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
        <p>{transmission.charAt(0).toUpperCase() + transmission.slice(1)}</p>
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
        <p>{details.kitchen ? 'Kitchen' : null}</p>
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
          {details.beds > 1 ? `${details.beds} beds` : `${details.beds} bed`}
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
        <p>{details.airConditioner ? 'AC' : null}</p>
      </div>
      {showAdditionalFeatures && (
        <>
          <div className={css.feature}>
            <Icon
              name="tv"
              stroke="currentColor"
              fill="none"
              width="20"
              height="20"
            />
            <p>{details.TV ? 'TV' : null}</p>
          </div>
          <div className={css.feature}>
            <Icon
              name="radio"
              stroke="currentColor"
              fill="none"
              width="20"
              height="20"
            />
            <p>{details.radio ? 'Radio' : null}</p>
          </div>
          <div className={css.feature}>
            <Icon
              name="hob"
              stroke="transparent"
              fill="#101828"
              width="20"
              height="20"
            />
            <p>{details.hob ? 'Hob' : null}</p>
          </div>
          <div className={css.feature}>
            <Icon
              name="gas"
              stroke="transparent"
              fill="#101828"
              width="20"
              height="20"
            />
            <p>{details.gas ? 'Gas' : null}</p>
          </div>
          <div className={css.feature}>
            <Icon
              name="water"
              stroke="currentColor"
              fill="none"
              width="20"
              height="20"
            />
            <p>{details.water ? 'Water' : null}</p>
          </div>
        </>
      )}
    </div>
  );
};
