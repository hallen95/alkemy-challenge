/* para la logica de los botones que necesitamos? 
un array de objetos donde estén guardados los heroes 
una funcion para validar si son heroes o villanos

ruta=> agregar desde el search  
 */ 
import { useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'
import  useHeroContext  from '../../context/HeroContext'
import emptyCards from '../../utilities/emptyCards'
/* este boton va a guardar en setHero la info del heroe clickado 
necesitamos otro estado global para el stock de heroes seleccionados  */ 


const CardResponse = ({ dataResponse }) => {
    const { hero, setHero, heroAdded } = useHeroContext();
    //results.biography.alignment
    return(
    <>
        {dataResponse.results.map((result) => {
        return (
        <Card key={result.id} style={{ width: '17rem', backgroundColor: "#232425" }} >
        <Card.Img variant="top" src={result.image.url}/>
        <Card.Body>
            <Card.Title>{result.name}</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Button variant="danger" style={{justifyContent: "center"}} onClick={() => heroAdded(result)}>Añadir</Button>
        </Card.Body>
        </Card>)
        })}
    </>)
}

export default CardResponse;