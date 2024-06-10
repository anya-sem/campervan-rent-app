import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts } from '../../redux/operations';
import {
  selectAdverts,
  selectVisibleCount,
  selectLoading,
} from '../../redux/selectors';
import { loadMoreAdverts } from '../../redux/advertsSlice';
import { AdvertCard } from '../AdvertCard/AdvertCard';
import { LoadMoreBtn } from '../LoadMoreBtn/LoadMoreBtn';
import Loader from '../Loader/Loader';
import css from './AdvertList.module.css';

export const AdvertList = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const visibleCount = useSelector(selectVisibleCount);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(loadMoreAdverts());
  };

  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        {adverts.slice(0, visibleCount).map((advert) => {
          return <AdvertCard key={advert._id} advert={advert} />;
        })}
      </ul>
      {loading && <Loader />}
      {visibleCount < adverts.length && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
    </div>
  );
};
