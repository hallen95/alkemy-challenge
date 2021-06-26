import { CardItem } from '../../components/';
import { Col } from 'react-bootstrap';
import useHeroContext from '../../context/HeroContext';

const CardContainer = () => {
  const { selectedHero } = useHeroContext();
  return (
    <>
      {selectedHero.map((hero) => (
        <Col key={hero.id} className="col-8">
          <CardItem hero={hero} className="card-item" />
        </Col>
      ))}
    </>
  );
};

export default CardContainer;
