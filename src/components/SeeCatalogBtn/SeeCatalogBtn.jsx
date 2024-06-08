import { NavLink } from 'react-router-dom';
import css from './SeeCatalogBtn.module.css';

export const SeeCatalogBtn = () => {
  return (
    <div>
      <NavLink to="/catalog" className={css.button}>
        See catalog
      </NavLink>
    </div>
  );
};
