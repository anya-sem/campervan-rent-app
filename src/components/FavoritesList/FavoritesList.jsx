import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/selectors';
import { AdvertCard } from '../../components/AdvertCard/AdvertCard';
import css from './FavoritesList.module.css';

export default function FavoritesList() {
  const favorites = useSelector(selectFavorites);

  return (
    <>
      <ul className={css.list}>
        {favorites.map((advert) => (
          <AdvertCard key={advert._id} advert={advert} />
        ))}
      </ul>
    </>
  );
}
