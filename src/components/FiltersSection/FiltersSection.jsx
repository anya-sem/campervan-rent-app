import { Location } from '../Location/Location';
import { Filters } from '../Filters/Filters';
import { SearchBtn } from '../SearchBtn/SearchBtn';
import css from './FiltersSection.module.css';

export const FiltersSection = () => {
  return (
    <div className={css.wrapper}>
      <Location />
      <Filters />
      <SearchBtn />
    </div>
  );
};
