import { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import './suggestohero.css'
import axios from 'axios'

const SuggestHero = () => {
    const [allHeros, setAllHeros] = useState([])
    const LIMIT = 6

    useEffect(() => {
        axios.get("https://akabab.github.io/superhero-api/api/all.json")
        .then(res => {
            const heroLimited = res.data.slice(0, LIMIT)
            setAllHeros(heroLimited)});
      }, []);

    return (
        <>
        {allHeros && allHeros.map((suggest) => {
        return (
        <Card key={suggest.id} id="#suggest__card" style={{width: "10rem", height: "15rem" }}>
            <Card.Img src={suggest.images.sm} className="suggest_image" />
        <Card.Body className="suggest__body">
            <Card.Title>{suggest.name}</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Button variant="danger" style={{justifyContent: "center"}}>Añadir</Button>
        </Card.Body>
        </Card>)
    })}
    </>
    )
}

export default SuggestHero;