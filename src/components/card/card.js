import { useState } from 'react';
import './card.css';
import { Card, Button, Modal, Container, Row } from 'react-bootstrap';
import useHeroContext from '../../context/HeroContext';
import useStatsContext from '../../context/StatsContext';

const CardItem = ({ hero }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { deleteGood, deleteBad } = useHeroContext();
  const { altura, peso } = useStatsContext;

  return (
    <div className={ `${hero.alignment === 'good' ? 'card__bt-good' : 'card__bt-bad'}`}>
      
      <Card
        className="d-flex flex-row flex-md-column text-center align-items-center"
        style={{border: "solid 10px", borderRadius:"40px 40px 40px 40px", backgroundColor:"transparent"}}
      >
        <Card.Body className={ `${hero.alignment === 'good' ? 'card__bt-good' : 'card__bt-bad'}`}>
        <Card.Title className="card__bt-title">{hero.name}</Card.Title>
          <Card.Img
            variant="top"
            className="card__bt-body-img"
            src={hero.image}
          />
          <Card.Text className="card__bt-text">{hero.biography}</Card.Text>

          <div className="modal__detail-container">
            <Modal className="modal__detail" show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{hero.name}</Modal.Title>
              </Modal.Header>
              <Modal.Body className="">
                <img className="col-6 modal__detail-image" src={hero.image} />
                <table className="">
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
          </div>

          <Row>
          <Button
            className="card__bt-btn"
            variant="primary"
            onClick={handleShow}
          >
            Stats
          </Button>
          <Button
            className="card__bt-btn"
            variant="danger"
            onClick={
              hero.alignment === 'good'
                ? () => deleteGood(hero)
                : () => deleteBad(hero)
            }
          >
            Borrar
          </Button>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardItem;
