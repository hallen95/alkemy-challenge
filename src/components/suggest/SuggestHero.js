import { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import axios from 'axios'
import useHeroContext from '../../context/HeroContext'

const SuggestHero = () => {
    const { heroAdded } = useHeroContext()
    const [allHeros, setAllHeros] = useState([0,1,2,3,4,5])
    const LIMIT = 5
    let randomNumber = 0
    const API = "https://superheroapi.com/api/4298272713525886/${id}"
    const randomHeros = () => {
        randomNumber = Math.random(0,1)*500
        return randomNumber
    }

    useEffect(() => {
        randomHeroGenerator(randomHeros())
    }, []);

    const randomHeroGenerator = (id) => {
        const randomHeros = {}
        allHeros.forEach(element => {
            randomHeros[element] = axios.get(`https://superheroapi.com/api/4298272713525886/${id}`)
        });
        return randomHeros;
    } 
    //     axios.get("https://akabab.github.io/superhero-api/api/all.json")
    //     .then(res => {
    //         randomHeros()
    //         const heroLimited = res.data.slice(randomNumber, (randomNumber+LIMIT))
    //         setAllHeros(heroLimited)});
    //   console.log("allheros", allHeros)
    return (
        <>
        {allHeros && allHeros.map((suggest) => {
        return (
        <Card key={suggest.id} style={{width: "18rem", backgroundColor: "#232425"}} className="suggest__card">
            <Card.Img src={suggest.images.sm} className="suggest_image" />
        <Card.Body className="suggest__body">
            <Card.Title  style={{color: '#fff'}}>{suggest.name}</Card.Title>
            <Card.Text>
            </Card.Text>
            <Button variant="danger"  onClick={() => heroAdded(suggest)}>Añadir</Button>
        </Card.Body>
        </Card>)
    })}
    </>
    )
}

export default SuggestHero;