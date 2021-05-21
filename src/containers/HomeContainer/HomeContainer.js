// import { useState, useEffect } from 'react'
import {  NavBar } from '../../components'
import { CardContainer, StatsContainer } from '../index'
import './homecontainer.css'
import { Container, Row, Col } from 'react-bootstrap'


const HomeContainer = () => {
    // const [ isHeroFull, setIsHeroFull ] = useState(false);


    /* ahora necesito pensar una forma de hacer que el array de cards con máximo 6
        pueda incluir heroes haciendo la petición. */
    return (
        <>
            <NavBar/>
            <Container fluid className="home-container">
                <h1 className="home-title">Estos son tus heroes</h1>
                <Row className="home-container__cards">
                    <CardContainer />
                </Row>
                <Row>
                    <Col>
                        <StatsContainer/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HomeContainer;