import { useState } from 'react';
import { Card, Button, Modal, Container } from 'react-bootstrap';
import useHeroContext from '../../context/HeroContext';
import useStatsContext from '../../context/StatsContext';

const CardItem = ({ hero }) => {
  const [ show, setShow ] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { deleteGood, deleteBad } = useHeroContext();
  const { altura, peso } = useStatsContext;

  return (
    // <Container fluid>
    <Card className="d-flex flex-row flex-md-column text-center align-items-center" style={{ backgroundColor: '#232425' }}>
      <Card.Img variant="top" src={hero.image} />
      <Card.Body>
        <Card.Title style={{ color: '#fff' }}>{hero.name}</Card.Title>
        <Card.Text>{hero.biography}</Card.Text>
        <Button variant="primary" onClick={handleShow}>
          Stats
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{hero.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={hero.image} />
            <table>
              <tbody>
                <tr>
                  <td>intelligence {hero.stats.intelligence} </td>
                  <td>Strength {hero.stats.strength}</td>
                  <td>Speed {hero.stats.speed}</td>
                  <td> {hero.weight}</td>
                </tr>
                <tr>
                  <td>Durability {hero.stats.durability}</td>
                  <td>Combat {hero.stats.combat}</td>
                  <td>Power {hero.stats.power}</td>
                  <td>{hero.height}</td>
                </tr>
              </tbody>
            </table>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

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
    // </Container>
  );
};

export default CardItem;
