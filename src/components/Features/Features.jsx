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
      {details.kitchen !== 0 && (
        <div className={css.feature}>
          <Icon
            name="kitchen-tools"
            fill="none"
            stroke="currentColor"
            width="20"
            height="20"
          />
          <p>Kitchen</p>
        </div>
      )}
      {details.beds !== 0 && (
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
      )}
      {details.airConditioner !== 0 && (
        <div className={css.feature}>
          <Icon
            name="air"
            stroke="transparent"
            fill="#101828"
            width="20"
            height="20"
          />
          <p>AC</p>
        </div>
      )}
      {showAdditionalFeatures && (
        <>
          {details.TV !== 0 && (
            <div className={css.feature}>
              <Icon
                name="tv"
                stroke="currentColor"
                fill="none"
                width="20"
                height="20"
              />
              <p>TV</p>
            </div>
          )}
          {details.radio !== 0 && (
            <div className={css.feature}>
              <Icon
                name="radio"
                stroke="currentColor"
                fill="none"
                width="20"
                height="20"
              />
              <p>Radio</p>
            </div>
          )}
          {details.hob !== 0 && (
            <div className={css.feature}>
              <Icon
                name="hob"
                stroke="transparent"
                fill="#101828"
                width="20"
                height="20"
              />
              <p>Hob</p>
            </div>
          )}
          {details.gas !== 0 && (
            <div className={css.feature}>
              <Icon
                name="gas"
                stroke="transparent"
                fill="#101828"
                width="20"
                height="20"
              />
              <p>Gas</p>
            </div>
          )}
          {details.water !== 0 && (
            <div className={css.feature}>
              <Icon
                name="water"
                stroke="currentColor"
                fill="none"
                width="20"
                height="20"
              />
              <p>Water</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};
