import { CardItem } from '../../components/'
import { useState, useEffect } from 'react'
import emptyCards from '../../utilities/emptyCards'

const CardContainer = ({ setAddHero, addHero }) => {
    const [ heros, setHeros ] = useState([])

    useEffect(() => { 
        setHeros(emptyCards)
        console.log(heros)
    }, [heros])

    return (
        <>
    {heros.map((hero) =>  <CardItem key={hero.id} className="card-item"/>)}
        </>)
}

export default CardContainer;