import { Jumbotron, Table, Container, Row, Col } from 'react-bootstrap'

/* este componente es el que se encarga de recibir las estadisticas y hacer los calculos */
const GeneralStats = () => {
    return (
        <Container>
        <Jumbotron>
            <Row>
            <Table striped bordered hover variant="dark">
                <tbody>
                    <tr>
                    <td>intelligence</td>
                    <td>Strength</td>
                    <td>Speed</td>
                    <td>Weight</td>
                    </tr>
                    <tr>
                    <td>Durability</td>
                    <td>Combat</td>
                    <td>Power</td>
                    <td>Height</td>
                    </tr>
                    <tr>
                    <td colSpan="4">Main category</td>
                    </tr>
                </tbody>
                </Table>
            </Row>
        </Jumbotron>
        </Container>
    )
}

export default GeneralStats;
