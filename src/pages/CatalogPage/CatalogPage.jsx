import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { selectLoading } from '../../redux/selectors';
import { Container } from '../../components/Container/Container';
import { FiltersSection } from '../../components/FiltersSection/FiltersSection';
import { AdvertList } from '../../components/AdvertList/AdvertList';
import Loader from '../../components/Loader/Loader';
import css from './CatalogPage.module.css';

export default function CatalogPage() {
  const loading = useSelector(selectLoading);

  return (
    <Container className={css.container}>
      <Helmet>
        <title>Catalog</title>
      </Helmet>
      <FiltersSection />
      <AdvertList />
      {loading && <Loader />}
    </Container>
  );
}
