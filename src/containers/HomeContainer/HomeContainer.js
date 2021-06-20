
import { CardContainer, StatsContainer } from '../index'
import './homecontainer.css'
import { Container, Row, Col } from 'react-bootstrap'

const HomeContainer = () => {
    return (
        <>
            <Container fluid className="home-container">
                <h1 className="home-title">Estos son tus heroes</h1>
                <Row>
                    <Col className="home-container__cards"><CardContainer /></Col>
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