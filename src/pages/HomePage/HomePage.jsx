import { Helmet } from 'react-helmet-async';
import { Container } from '../../components/Container/Container';
import { HomeSection } from '../../components/HomeSection/HomeSection';

export default function HomePage() {
  return (
    <Container>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <HomeSection />
    </Container>
  );
}
