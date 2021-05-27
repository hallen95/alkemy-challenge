import { useEffect, useState } from 'react'
import { Jumbotron, Table, Container, Row } from 'react-bootstrap'
import useHeroContext from '../../context/HeroContext'

/* este componente es el que se encarga de recibir las estadisticas y hacer los calculos
como sería entonces la ruta que deberia seguir para hacerlo funcionar 
descubri que no necesito guardar los numeros, solo necesito guardar la suma 
de todos los campos de los heroes correspondientes al mismo tipo 
puedo hacer un objeto con un useState que guarde la suma en un objeto?  */

const GeneralStats = () => {
    // const [ totalStats, setTotalStats ] = useState({ 
    //     combat: 2,
    //     durability: 0, 
    //     intelligence: 0,
    //     power: 0,
    //     strength: 0,
    //     speed: 0
    // })

    const { totalStats } = useHeroContext()
    console.log("totalstats", totalStats)

        /* tendría que encontrar la manera dinámica de ingresar a cada héroe seleccionado 
        para luego recien poder ver sus stats 
        este useEffect va a estar encargado de actualizar constantemente esos valores */ 
        // console.log("inteligence", parseInt(selectedHero[0].stats.intelligence))



    return (
        <Container>
        <Jumbotron>
            <Row>
            <Table striped bordered hover variant="dark">
                <tbody>
                    <tr>
                    <td>intelligence {totalStats.intelligence} </td>
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
