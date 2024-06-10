import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { selectLoading } from '../../redux/selectors';
import { Container } from '../../components/Container/Container';
import FavoritesList from '../../components/FavoritesList/FavoritesList';
import Loader from '../../components/Loader/Loader';

export default function FavoritesPage() {
  const loading = useSelector(selectLoading);

  return (
    <Container>
      <Helmet>
        <title>Favorites</title>
      </Helmet>
      <FavoritesList />
      {loading && <Loader />}
    </Container>
  );
}
