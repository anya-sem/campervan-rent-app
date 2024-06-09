import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts } from '../../redux/operations';
import { selectAdverts, selectLoading } from '../../redux/selectors';
import { loadMoreAdverts } from '../../redux/advertsSlice';
import { AdvertCard } from '../AdvertCard/AdvertCard';
import { LoadMoreBtn } from '../LoadMoreBtn/LoadMoreBtn';
import Loader from '../Loader/Loader';
import css from './AdvertList.module.css';

export const AdvertList = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const loadedCount = useSelector((state) => state.adverts.loadedCount);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(loadMoreAdverts());
  };

  return (
    <div>
      <ul className={css.wrapper}>
        {adverts.slice(0, loadedCount).map((advert) => {
          return <AdvertCard key={advert._id} advert={advert} />;
        })}
      </ul>
      {loading && <Loader />}
      {loadedCount < adverts.length && <LoadMoreBtn onClick={handleLoadMore} />}
    </div>
  );
};
