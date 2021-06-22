import { useEffect, useState } from 'react'
import { Jumbotron, Table, Container, Row } from 'react-bootstrap'
import useStatsContext from '../../context/StatsContext'

/* este componente es el que se encarga de recibir las estadisticas y hacer los calculos
como sería entonces la ruta que deberia seguir para hacerlo funcionar 
descubri que no necesito guardar los numeros, solo necesito guardar la suma 
de todos los campos de los heroes correspondientes al mismo tipo 
puedo hacer un objeto con un useState que guarde la suma en un objeto?  */

const GeneralStats = () => {
    const { totalStats, altura, peso, maxStats } = useStatsContext()

        /* tendría que encontrar la manera dinámica de ingresar a cada héroe seleccionado 
        para luego recien poder ver sus stats 
        este useEffect va a estar encargado de actualizar constantemente esos valores */ 
        // console.log("inteligence", parseInt(selectedHero[0].stats.intelligence))

    useEffect(() => {
        maxStats(totalStats)
    }, [totalStats])

    return (
        <Container>
        <Jumbotron>
            <Row>
            <Table striped bordered hover variant="dark">
                <tbody>
                    <tr>
                    <td>intelligence { totalStats.intelligence } </td>
                    <td>Strength { totalStats.strength }</td>
                    <td>Speed { totalStats.speed }</td>
                    <td>Weight {peso} kg</td>
                    </tr>
                    <tr>
                    <td>Durability { totalStats.durability }</td>
                    <td>Combat { totalStats.combat }</td>
                    <td>Power { totalStats.power }</td>
                    <td>Height {altura} cm</td>
                    </tr>
                    <tr>
                    <td colSpan="4">Main category {maxStats(totalStats)}</td>
                    </tr>
                </tbody>
                </Table>
            </Row>
        </Jumbotron>
        </Container>
    )
}

export default GeneralStats;
