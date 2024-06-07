import { Icon } from '../Icons/Icon';
import css from './Filters.module.css';

export const Filters = () => {
  return (
    <div className={css.wrapper}>
      <h3 className={css.title}>Filters</h3>

      <div className={css.filterWrapper}>
        <h4 className={css.subtitle}>Vehicle Equipment</h4>
        <div className={css.buttons}>
          <label className={css.button}>
            <input type="checkbox" name="equipment" value="AC" />
            <Icon
              className="icon"
              name="air"
              stroke="currentColor"
              strokeWidth="0.05"
              width="32"
              height="32"
            />
            <span className={css.label}>AC</span>
          </label>
          <label className={css.button}>
            <input type="checkbox" name="equipment" value="Automatic" />
            <Icon
              className="icon"
              name="gear"
              stroke="currentColor"
              fill="none"
              width="32"
              height="32"
            />
            <span className={css.label}>Automatic</span>
          </label>
          <label className={css.button}>
            <input type="checkbox" name="equipment" value="Kitchen" />
            <Icon
              className="icon"
              name="kitchen-tools"
              stroke="currentColor"
              fill="none"
              width="32"
              height="32"
            />
            <span className={css.label}>Kitchen</span>
          </label>
          <label className={css.button}>
            <input type="checkbox" name="equipment" value="TV" />
            <Icon
              className="icon"
              name="tv"
              stroke="currentColor"
              fill="none"
              width="32"
              height="32"
            />
            <span className={css.label}>TV</span>
          </label>
          <label className={css.button}>
            <input type="checkbox" name="equipment" value="Shower/WC" />
            <Icon
              className="icon"
              name="shower"
              stroke="currentColor"
              fill="none"
              width="32"
              height="32"
            />
            <span className={css.label}>Shower/WC</span>
          </label>
        </div>
      </div>

      <div className={css.filterWrapper}>
        <h4 className={css.subtitle}>Vehicle Type</h4>
        <div className={css.buttons}>
          <label className={css.button}>
            <input type="radio" name="type" value="Van" />
            <Icon
              className="icon"
              name="van"
              stroke="currentColor"
              fill="none"
              width="40"
              height="28"
            />
            <span className={css.label}>Van</span>
          </label>
          <label className={css.button}>
            <input type="radio" name="type" value="Fully Integrated" />
            <Icon
              className="icon"
              name="fully-integrated-van"
              stroke="currentColor"
              fill="none"
              width="40"
              height="28"
            />
            <span className={css.label}>Fully Integrated</span>
          </label>
          <label className={css.button}>
            <input type="radio" name="type" value="Alcove" />
            <Icon
              className="icon"
              name="alcove"
              stroke="currentColor"
              fill="none"
              width="40"
              height="28"
            />
            <span className={css.label}>Alcove</span>
          </label>
        </div>
      </div>
    </div>
  );
};
