/* para este componente necesitamos 
el navbar - listo
un h1 - listo
el input + boton listo 
un parrafo + listo
y 6 cards + listo
*/
import { useEffect, useState } from 'react'
import './searchcontainer.css'
import { InputSearch, SuggestHero, CardResponse } from '../../components'
import { Container, Row, Button, Col } from 'react-bootstrap'
import axios from 'axios'

const SearchContainer = () => {
    const [ dataResponse, setDataResponse ] = useState([]);
    const searchResponse = (value) => {
        setDataResponse(value)
    }

    useEffect(() => {
        console.log("dataresponse", dataResponse);
        console.log("success", dataResponse.response);
    }, [dataResponse, searchResponse])

    return (
    <Container fluid className="search__container">
        <Row className="search__row" >
            <h1 className="search__title"> ENCUENTRA TU HEROE </h1>
        </Row>
        <Row md={6} xl={5} lg={6} className="search__row search__row-input" >
            <Col xl={4} lg={5}><InputSearch searchResponse={searchResponse} /> </Col>
            {/* <Col xl={1} lg={1} className="search__row--button"><Button> Buscar </Button></Col> */}
        </Row>
        <Row className="search__row">
            <p className="search__text">
                Recuerda que tu equipo debe estar conformado por <strong>máximo</strong> 3 villanos y 3 héroes
            </p>
        </Row>
        <Row className="search__row search__textrecomend">
            {dataResponse.response === "success" ? <CardResponse dataResponse={dataResponse} /> : <p>Algunas sugerencias podrían ser...</p> }
        </Row>
        <Row>
            {!dataResponse.response === "success" ? <SuggestHero className="search__suggest" /> : null}
        </Row>
    </Container>
    )
}

export default SearchContainer;