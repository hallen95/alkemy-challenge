import { CardContainer, StatsContainer } from '../index';
import './homecontainer.css';
import { Container, Row, Col } from 'react-bootstrap';

const HomeContainer = () => {
  return (
      <Container fluid className="home-container">
        <h1 className="fs-1 text-uppercase text-center text-light mb-4">Estos son tus heroes</h1>
        <Row md={3} lg={5} className="d-flex flex-column flex-md-row justify-content-center align-items-center">
          <CardContainer />
        </Row>
        <StatsContainer />
      </Container>
  );
};

export default HomeContainer;
