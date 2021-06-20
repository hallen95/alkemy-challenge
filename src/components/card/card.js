import { Card, Button } from 'react-bootstrap';
import useHeroContext from '../../context/HeroContext';

const CardItem = ({ hero }) => {
  const { deleteGood, deleteBad } = useHeroContext();
  console.log(hero);

  return (
    <Card style={{ width: '17rem', backgroundColor: '#232425' }}>
      <Card.Img variant="top" src={hero.image} />
      <Card.Body>
        <Card.Title style={{ color: '#fff' }}>{hero.name}</Card.Title>
        <Card.Text>{hero.biography}</Card.Text>
        <Button variant="primary">Stats</Button>
        <Button
          variant="danger"
          onClick={
            hero.alignment === 'good'
              ? () => deleteGood(hero)
              : () => deleteBad(hero)
          }
        >
          Borrar
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardItem;
