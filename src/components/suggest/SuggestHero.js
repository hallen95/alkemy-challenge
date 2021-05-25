import { useEffect, useState } from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import './suggestohero.css'
import axios from 'axios'

const SuggestHero = () => {
    const [allHeros, setAllHeros] = useState([])
    const LIMIT = 5

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
        <Card key={suggest.id} style={{width: "18rem"}} className="suggest__card">
            <Card.Img src={suggest.images.sm} className="suggest_image" />
        <Card.Body className="suggest__body">
            <Card.Title>{suggest.name}</Card.Title>
            <Card.Text>
            </Card.Text>
            <Button variant="danger">Añadir</Button>
        </Card.Body>
        </Card>)
    })}
    </>
    )
}

export default SuggestHero;