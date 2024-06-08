import { Helmet } from 'react-helmet-async';
import { Container } from '../../components/Container/Container';
import { FiltersSection } from '../../components/FiltersSection/FiltersSection';
import { CarList } from '../../components/CarList/CarList';
import css from './CatalogPage.module.css';

export default function CatalogPage() {
  return (
    <Container className={css.container}>
      <Helmet>
        <title>Catalog</title>
      </Helmet>
      <FiltersSection />
      <CarList />
    </Container>
  );
}
