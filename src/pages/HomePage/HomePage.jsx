import { Helmet } from 'react-helmet-async';
import { Container } from '../../components/Container/Container';

export default function HomePage() {
  return (
    <Container>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1>Home page</h1>
    </Container>
  );
}
