import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/selectors';
import { AdvertCard } from '../../components/AdvertCard/AdvertCard';
import css from './FavoritesList.module.css';

export default function FavoritesList() {
  const favorites = useSelector(selectFavorites);

  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Favorites</h1>
      {favorites.length > 0 ? (
        <ul className={css.list}>
          {favorites.map((advert) => (
            <AdvertCard key={advert._id} advert={advert} />
          ))}
        </ul>
      ) : (
        <p className={css.text}>No favorites yet</p>
      )}
    </div>
  );
}
