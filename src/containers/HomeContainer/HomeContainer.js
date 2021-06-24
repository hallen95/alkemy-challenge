import { CardContainer, StatsContainer } from '../index';
import './homecontainer.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import useHeroContext from '../../context/HeroContext';
import { AiFillPlusCircle } from 'react-icons/ai'

const HomeContainer = () => {
  const { selectedHero } = useHeroContext();

  return (
    <Container className="home-container">
      <Row className="home__text__row fs-1 text-uppercase text-center text-light">
        <h1>Estos son tus heroes</h1>
      </Row>
      {selectedHero.length === 0 ? (
        <Col className="d-flex justify-content-center ">
        <div className="col-6 d-flex flex-column align-items-center home-no-hero">
        <p className="col-6 text-center"> No tienes héroes aun! </p>
        <AiFillPlusCircle />                
        </div>
        </Col>
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
