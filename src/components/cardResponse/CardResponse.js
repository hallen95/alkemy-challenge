import { Card, Button } from 'react-bootstrap'

const CardResponse = ({ dataResponse }) => {
    return(
    <>
    {dataResponse.results.map((result) => {
    return (
    <Card key={result.id} style={{ width: '17rem', height:'18rem', display: "flex", flexWrap: "nowrap", backgroundColor: "#BA5555" }} >
    <Card.Img variant="top" src={result.image.url}/>
    <Card.Body>
        <Card.Title>{result.name}</Card.Title>
        <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
        </Card.Text>
        <Button variant="danger" style={{justifyContent: "center"}}>Añadir</Button>
    </Card.Body>
    </Card>)
    })}
    </>)
}

export default CardResponse;