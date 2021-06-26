import { CardItem } from '../../components/';
import { Col } from 'react-bootstrap';
import useHeroContext from '../../context/HeroContext';

const CardContainer = () => {
  const { selectedHero } = useHeroContext();
  return (
    <>
      {selectedHero.map((hero) => (
        <Col className="col-8">
          <CardItem key={hero.id} hero={hero} className="card-item" />
        </Col>
      ))}
    </>
  );
};

export default CardContainer;
