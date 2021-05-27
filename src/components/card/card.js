import { Card, Button } from 'react-bootstrap'
import useHeroContext from '../../context/HeroContext'

// este componente se va a transformar en el contenedor de los heroes 
/* aca tiene que llegar la data del click e imprimir en el home 
los heroes seleccionados deben permanecer en el store  */ 
const CardItem = ({ hero }) => {
    const { deleteHero } = useHeroContext()

    return (
            <Card style={{ width: '17rem',  backgroundColor: "#232425" }} >
            <Card.Img variant="top" src={hero.image.url} />
            <Card.Body>
                <Card.Title style={{color: '#fff'}}>{hero.name}</Card.Title>
                <Card.Text>
                    {hero.biography}
                </Card.Text>
                <Button variant="primary">Stats</Button>
                <Button variant="danger" onClick={() => deleteHero(hero)}>Borrar</Button>
            </Card.Body>
            </Card>
        )
}

export default CardItem;