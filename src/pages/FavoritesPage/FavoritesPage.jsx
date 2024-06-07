import { Helmet } from 'react-helmet-async';
import { Container } from '../../components/Container/Container';

export default function FavoritesPage() {
  return (
    <Container>
      <Helmet>
        <title>Favorites</title>
      </Helmet>
      <h1>Favorites</h1>
    </Container>
  );
}
