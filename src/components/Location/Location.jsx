import { Icon } from '../Icons/Icon';
import css from './Location.module.css';

export const Location = () => {
  return (
    <>
      <h3 className={css.title}>Location</h3>
      <div className={css.inputWrapper}>
        <input className={css.input} type="text" placeholder="City" />
        <Icon
          className={css.icon}
          name="pin"
          fill="none"
          stroke="currentColor"
          width="20"
          height="20"
        />
      </div>
    </>
  );
};
