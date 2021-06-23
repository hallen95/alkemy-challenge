import { useState } from 'react';
import './searchcontainer.css';
import { InputSearch, CardResponse } from '../../components';
import { Container, Row, Col } from 'react-bootstrap';

const SearchContainer = () => {
  const [dataResponse, setDataResponse] = useState([]);
  const searchResponse = (value) => {
    setDataResponse(value);
  };

  return (
    <Container fluid className="search__container">
      <Row className="search__row">
        <h1 className="search__title"> ENCUENTRA TU HEROE </h1>
      </Row>
      <Row lg="auto" className="search__row search__row-input">
        <Col>
          <InputSearch searchResponse={searchResponse} />{' '}
        </Col>
      </Row>
      <Row className="search__row">
        <Col>
          <p className="search__text">
            Recuerda que tu equipo debe estar conformado por{' '}
            <strong>máximo</strong> 3 villanos y 3 héroes
          </p>
        </Col>
      </Row>
      <Row className="search__row">
        {dataResponse.response === 'success' ? (
          <CardResponse dataResponse={dataResponse} />
        ) : (
          <p>No hay héroes con ese nombre!</p>
        )}
      </Row>
    </Container>
  );
};

export default SearchContainer;
