import { SeeCatalogBtn } from '../../components/SeeCatalogBtn/SeeCatalogBtn';
import van from '../../assets/img/van.jpg';
import css from './HomeSection.module.css';

export const HomeSection = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.contentWrapper}>
        <h1 className={css.title}>
          Find your best <span className={css.span}>campervan</span> for rental
        </h1>
        <p className={css.text}>
          Explore our extensive selection of campervans for rent, perfect for
          your next camping adventure
        </p>
        <SeeCatalogBtn />
      </div>

      <img className={css.img} src={van} alt="Woman in a van" />
    </div>
  );
};
