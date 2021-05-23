/* para este componente necesitamos 
el navbar - listo
un h1 - listo
el input + boton listo 
un parrafo + listo
y 6 cards 
*/
import { useEffect, useState } from 'react'
import './searchcontainer.css'
import { SearchInput, SuggestHero } from '../../components'
import { Container, Row, Button, Col } from 'react-bootstrap'
import axios from 'axios'

const SearchContainer = () => {
    const [allHeros, setAllHeros] = useState([])
    const LIMIT = 6

    useEffect(() => {
        axios.get("https://akabab.github.io/superhero-api/api/all.json")
        .then(res => {
            const heroLimited = res.data.slice(0, LIMIT)
            setAllHeros(heroLimited)});
      }, []);
    console.log("heros", allHeros);
return (
    <Container fluid className="search__container">
        <Row className="search__row" >
            <h1 className="search__title"> ENCUENTRA TU HEROE </h1>
        </Row>
        <Row md={6} xl={5} lg={6} className="search__row search__row-input" >
            <Col xl={4} lg={5}><SearchInput /></Col>
            <Col xl={1} lg={1} className="search__row--button"><Button> Buscar </Button></Col>
        </Row>
        <Row className="search__row">
            <p className="search__text">
                Recuerda que tu equipo debe estar conformado por <strong>máximo</strong> 3 villanos y 3 héroes
            </p>
        </Row>
        <Row  className="search__row">
            <p className="search__text">Algunas sugerencias podrían ser...</p>
        </Row>
        <Row  className="search__row">
            <SuggestHero suggests={allHeros} />
        </Row>
    </Container>
    )
}

export default SearchContainer;