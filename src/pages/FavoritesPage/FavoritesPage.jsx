import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { selectLoading } from '../../redux/selectors';
import { Container } from '../../components/Container/Container';
import Loader from '../../components/Loader/Loader';

export default function FavoritesPage() {
  const loading = useSelector(selectLoading);

  return (
    <Container>
      <Helmet>
        <title>Favorites</title>
      </Helmet>
      <h1>Favorites</h1>
      {loading && <Loader />}
    </Container>
  );
}
