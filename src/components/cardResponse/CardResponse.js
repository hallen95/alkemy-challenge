import { AddHeroButton } from '../index';
import { Card, Col, Spinner } from 'react-bootstrap';
import useHeroContext from '../../context/HeroContext';

const CardResponse = ({ dataResponse }) => {
  const { addGood, addBad, selectedHero, isLoading } = useHeroContext();

  const handleTeam = (result) => {
    return selectedHero.length === 6 ? (
      <label className="btn-light btn w-100 fw-bold">Máximo alcanzado</label>
    ) : (
      <AddHeroButton
        id={result.id}
        addGood={() => addGood(result)}
        addBad={() => addBad(result)}
        alignment={result.biography.alignment}
        stats={result.powerstats}
      />
    );
  };

  return (
    <>
      {!isLoading ? (
        dataResponse.results.map((result) => {
          return (
            <Col className="col-6 col-sm-4 col-lg-3">
              <Card
                style={{
                  width: '',
                  backgroundColor: '#232425',
                  color: '#e3e3e3',
                  boxShadow: '1px 1px 3px 1px',
                }}
              >
                <Card.Img variant="top" src={result.image.url} />
                <Card.Body>
                  <Card.Title>{result.name}</Card.Title>
                  {handleTeam(result)}
                </Card.Body>
              </Card>
            </Col>
          );
        })
      ) : (
        <Spinner
          animation="border"
          style={{ width: '3rem', height: '3rem' }}
          role="status"
        />
      )}
    </>
  );
};

export default CardResponse;
