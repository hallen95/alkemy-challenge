import { CardContainer, StatsContainer } from '../index';
import './homecontainer.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import useHeroContext from '../../context/HeroContext';

const HomeContainer = () => {
  const { selectedHero } = useHeroContext();

  return (
    <Container className="home-container">
      <Row className="home__text__row fs-1 text-uppercase text-center text-light">
        <h1>Estos son tus heroes</h1>
      </Row>
      {selectedHero.length === 0 ? (
        <Row className="d-flex justify-content-center ">
          <span className="text-center home-container-no-hero">
            ¡No tienes héroes aun!
          </span>
          <Link className="col-4 col-sm-2 my-2 text-center" to="/search">
            <Button variant="primary">Click aqui &rarr;</Button>
          </Link>
        </Row>
      ) : (
        <Row
          sm={2}
          md={3}
          lg={6}
          className="home__container-card d-flex flex-column flex-sm-row justify-content-center align-items-center"
        >
          <CardContainer />
        </Row>
      )}
      <Row className="home__container-stats fs-1 text-uppercase text-center text-light ">
        <h2>Estadisticas</h2>
      </Row>
      <Row className="home__container-stats">
        <StatsContainer />
      </Row>
    </Container>
  );
};

export default HomeContainer;
