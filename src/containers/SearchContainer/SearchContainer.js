import { useState } from 'react'
import './searchcontainer.css'
import { InputSearch, SuggestHero, CardResponse } from '../../components'
import { Container, Row, Col } from 'react-bootstrap'

const SearchContainer = () => {
    const [ dataResponse, setDataResponse ] = useState([]);
    const searchResponse = (value) => {
        setDataResponse(value)
    }

    return (
    <Container fluid className="search__container">
        <Row className="search__row" >
            <h1 className="search__title"> ENCUENTRA TU HEROE </h1>
        </Row>
        <Row  className="search__row search__row-input" >
            <Col sm={12} md={9} lg={7} xl={5}><InputSearch searchResponse={searchResponse} /> </Col>
            {/* <Col xl={1} lg={1} className="search__row--button"><Button> Buscar </Button></Col> */}
        </Row>
        <Row className="search__row">
            <Col xl={12} lg={12}><p className="search__text">
                Recuerda que tu equipo debe estar conformado por <strong>máximo</strong> 3 villanos y 3 héroes
            </p></Col>
        </Row>
        <Row className="search__row search__textrecomend">
            {dataResponse.response === "success" ? <CardResponse dataResponse={dataResponse} /> : <p>Algunas sugerencias podrían ser...</p> }
        </Row>
        <Row  className="search__row">
            <Col sm={12} md={10} lg={10} xl={10} className="suggest__hero">{dataResponse.response === undefined ? <SuggestHero className="search__suggest" /> : null}</Col>
        </Row>
    </Container>
    )
}

export default SearchContainer;