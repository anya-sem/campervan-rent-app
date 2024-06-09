import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { selectLoading } from '../../redux/selectors';
import { Container } from '../../components/Container/Container';
import { HomeSection } from '../../components/HomeSection/HomeSection';
import Loader from '../../components/Loader/Loader';

export default function HomePage() {
  const loading = useSelector(selectLoading);

  return (
    <Container>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <HomeSection />
      {loading && <Loader />}
    </Container>
  );
}
