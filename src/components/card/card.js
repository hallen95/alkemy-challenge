import { Card, Button } from 'react-bootstrap'

const CardItem = () => {

    return (
            <Card style={{ width: '15rem', display: "flex", backgroundColor: "#BA5555" }} >
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
                <Card.Title>Heroe</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="danger" style={{justifyContent: "center"}}>Añadir</Button>
            </Card.Body>
            </Card>
        )
}

export default CardItem;