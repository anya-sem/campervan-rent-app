import { Icon } from '../Icons/Icon';
import css from './Filters.module.css';

export const Filters = () => {
  return (
    <div className={css.wrapper}>
      <h3 className={css.title}>Filters</h3>

      <div className={css.filterWrapper}>
        <h4 className={css.subtitle}>Vehicle Equipment</h4>
        <div className={css.checkboxButtons}>
          <label className={css.checkboxButton}>
            <input type="checkbox" name="equipment" value="AC" />
            <Icon
              name="air"
              stroke="currentColor"
              strokeWidth="0.05"
              width="32"
              height="32"
            />
          </label>
          <label className={css.checkboxButton}>
            <input type="checkbox" name="equipment" value="Automatic" />
            <Icon
              name="gear"
              stroke="currentColor"
              fill="none"
              width="32"
              height="32"
            />
          </label>
          <label className={css.checkboxButton}>
            <input type="checkbox" name="equipment" value="Kitchen" />
            <Icon
              name="kitchen-tools"
              stroke="currentColor"
              fill="none"
              width="32"
              height="32"
            />
          </label>
          <label className={css.checkboxButton}>
            <input type="checkbox" name="equipment" value="TV" />
            <Icon
              name="tv"
              stroke="currentColor"
              fill="none"
              width="32"
              height="32"
            />
          </label>
          <label className={css.checkboxButton}>
            <input type="checkbox" name="equipment" value="Shower/WC" />
            <Icon
              name="shower"
              stroke="currentColor"
              fill="none"
              width="32"
              height="32"
            />
          </label>
        </div>
      </div>

      <div className={css.filterWrapper}>
        <h4 className={css.subtitle}>Vehicle Type</h4>
        <div className={css.radioButtons}>
          <label className={css.radioButton}>
            <input type="radio" name="type" value="Van" />
            <Icon
              name="van"
              stroke="currentColor"
              fill="none"
              width="40"
              height="28"
            />
          </label>
          <label className={css.radioButton}>
            <input type="radio" name="type" value="Fully Integrated" />
            <Icon
              name="fully-integrated-van"
              stroke="currentColor"
              fill="none"
              width="40"
              height="28"
            />
          </label>
          <label className={css.radioButton}>
            <input type="radio" name="type" value="Alcove" />
            <Icon
              name="alcove"
              stroke="currentColor"
              fill="none"
              width="40"
              height="28"
            />
          </label>
        </div>
      </div>
    </div>
  );
};
