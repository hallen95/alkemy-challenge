/* para la logica de los botones que necesitamos? 
un array de objetos donde estén guardados los heroes 
una funcion para validar si son heroes o villanos */ 
import { useState, useEffect } from 'react'
import { AddHeroButton } from '../index'
import { Card, Button } from 'react-bootstrap'
import  useHeroContext  from '../../context/HeroContext'

/* este boton va a guardar en setHero la info del heroe clickado 
necesitamos otro estado global para el stock de heroes seleccionados  */ 

const CardResponse = ({ dataResponse }) => {
    const { heroAdded, addGood, addBad, selectedHero } = useHeroContext()
    const [ isAdded, setAdded ] = useState(false)

    useEffect(() => {
        console.log("selectedhero", dataResponse)
        // handleDuplicate(dataResponse.id) hay que pasar el id de cada card
        // pero data response es un objeto.    
        dataResponse.results.forEach(element => handleDuplicate(element.id))
    }, [dataResponse])

        const handleDuplicate = id => {
        const existId = selectedHero.find(hero => hero.id === id)
        if (existId !== undefined) {
            console.log("repetido")
            setAdded(true)
        }
        else {
            console.log("disponible")
            setAdded(false)
        }
    }

    const handleTeam = result => {
        return selectedHero.length === 6 
        ? <label style={{backgroundColor:"white"}}>Máximo alcanzado</label>
        : <AddHeroButton 
            addGood={() => addGood(result)}
            addBad={() => addBad(result)}
            alignment={result.biography.alignment}
            stats={result.powerstats}
          />
    }
    
    return(
    <>
        {dataResponse.results.map((result) => {
        return (
        <Card  
            key={result.id} 
            style={{ width: '17rem', backgroundColor: "#232425", color: "#e3e3e3" }} 
            addGood={() => addGood(result)}
            addBad={() => addBad(result)}
            alignment={result.biography.alignment}
            stats={result.powerstats}
            name={result.name}
            image={result.image.url}
        >
        <Card.Img variant="top" src={result.image.url}/>
        <Card.Body>
            <Card.Title>{result.name}</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            {
                isAdded === true
                ? <p>Añadido!</p>
                : handleTeam(result)
            }
        </Card.Body>
        </Card>) 
        })}
    </>)
}

export default CardResponse;