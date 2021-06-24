import { useState } from 'react';
import './searchcontainer.css';
import { InputSearch, CardResponse } from '../../components';
import { Container, Row, Col, Spinner } from 'react-bootstrap';

const SearchContainer = () => {
  const [dataResponse, setDataResponse] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false)
  const searchResponse = (value) => {
    setDataResponse(value);
  };

  return (
    <Container fluid="sm" className="search__container">
      <Row className="home__text__row fs-1 text-uppercase text-center text-light">
        <h1 className="search__title"> Encuentra tu héroe </h1>
      </Row>
      <Row className="search__row search__row-input">
        <Col className="col-10 col-md-8 col-lg-6">
          <InputSearch searchResponse={searchResponse} />{' '}
        </Col>
      </Row>
      <Row className="search__row">
        <Col className="col-10 col-md-8">
          <p className="search__text">
            Recuerda que tu equipo debe estar conformado por{' '}
            <strong>máximo</strong> 3 villanos y 3 héroes
          </p>
        </Col>
      </Row>
      <Row className="search__row">
        {dataResponse.response === 'success' && (

          <CardResponse dataResponse={dataResponse} />

        ) 
          // <Spinner animation="border" role="status">
          //   <span className="sr-only">Loading...</span>
          // </Spinner>
        }
      </Row>
    </Container>
  );
};

export default SearchContainer;
