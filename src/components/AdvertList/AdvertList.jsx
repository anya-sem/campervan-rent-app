import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts } from '../../redux/operations';
import { selectAdverts, selectLoading } from '../../redux/selectors';
import { AdvertCard } from '../AdvertCard/AdvertCard';
import { LoadMoreBtn } from '../LoadMoreBtn/LoadMoreBtn';
import Loader from '../Loader/Loader';
import css from './AdvertList.module.css';

export const AdvertList = () => {
  const dispatch = useDispatch();
  const [displayedAds, setDisplayedAds] = useState(4);
  const [isLoadMore, setIsLoadMore] = useState(true);
  const adverts = useSelector(selectAdverts);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  const handleLoadMore = (count) => {
    if (adverts.length - count < 4) {
      setIsLoadMore(false);
      return setDisplayedAds((prevValue) => prevValue + adverts.length - count);
    }

    if (count < adverts.length) {
      setDisplayedAds((prevValue) => prevValue + 4);
    }
  };

  useEffect(() => {
    setIsLoadMore(true);
    if (adverts.length <= displayedAds) {
      setIsLoadMore(false);
    }
  }, [displayedAds, adverts]);

  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        {adverts.slice(0, displayedAds).map((advert) => {
          return <AdvertCard key={advert._id} advert={advert} />;
        })}
      </ul>
      {loading && <Loader />}
      {!loading && isLoadMore && adverts.length > displayedAds && (
        <LoadMoreBtn onClick={() => handleLoadMore(displayedAds)} />
      )}
    </div>
  );
};
