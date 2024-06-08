import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { Container } from '../Container/Container';
import { Icon } from '../Icons/Icon';
import css from './Header.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.favoriteBtn, isActive && css.active);
};

export const Header = () => {
  return (
    <Container>
      <header className={css.header}>
        <div className={css.wrapper}>
          <nav className={css.nav}>
            <NavLink to="/" className={css.logo} href="">
              Campervan Rent
            </NavLink>
            <ul className={css.buttons}>
              <li>
                <NavLink to="/catalog" className={css.catalogBtn} href="">
                  See catalog
                </NavLink>
              </li>
              <li>
                <NavLink to="/favorites" className={buildLinkClass} href="">
                  <Icon
                    name="heart"
                    fill="none"
                    stroke="currentColor"
                    width="24"
                    height="24"
                  />
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </Container>
  );
};
