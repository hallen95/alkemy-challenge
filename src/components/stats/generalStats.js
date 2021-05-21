import { Jumbotron, Button } from 'react-bootstrap'

/* este componente es el que se encarga de recibir las estadisticas y hacer los calculos */
const GeneralStats = () => {
    return (
        <Jumbotron>
        <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
        </p>
        <p>
            <Button variant="primary">Learn more</Button>
        </p>
        </Jumbotron>
    )
}

export default GeneralStats;