import { Helmet } from 'react-helmet-async';
import { Container } from '../../components/Container/Container';
import { CarList } from '../../components/CarList/CarList';

export default function CatalogPage() {
  return (
    <Container>
      <Helmet>
        <title>Catalog</title>
      </Helmet>
      <h1>Catalog</h1>
      <CarList />
    </Container>
  );
}
