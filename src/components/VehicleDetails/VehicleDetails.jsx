import css from './VehicleDetails.module.css';

export const VehicleDetails = ({ advert }) => {
  const { form = '', length, width, height, tank, consumption } = advert;

  return (
    <div className={css.wrapper}>
      <strong className={css.title}>Vehicle details</strong>
      <div className={css.featureWrapper}>
        <p className={css.feature}>Form</p>
        <p className={css.feature}>
          {form.charAt(0).toUpperCase() + form.slice(1)}
        </p>
      </div>
      <div className={css.featureWrapper}>
        <p className={css.feature}>Length</p>
        <p className={css.feature}>{length}</p>
      </div>
      <div className={css.featureWrapper}>
        <p className={css.feature}>Width</p>
        <p className={css.feature}>{width}</p>
      </div>
      <div className={css.featureWrapper}>
        <p className={css.feature}>Height</p>
        <p className={css.feature}>{height}</p>
      </div>
      <div className={css.featureWrapper}>
        <p className={css.feature}>Tank</p>
        <p className={css.feature}>{tank}</p>
      </div>
      <div className={css.featureWrapper}>
        <p className={css.feature}>Consumption</p>
        <p className={css.feature}>{consumption}</p>
      </div>
    </div>
  );
};
