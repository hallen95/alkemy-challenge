import React, {createContext, useContext, useState, useEffect } from 'react'
import useHeroContext from './HeroContext'

export const StatsContext = createContext([])
const useStatsContext = () => useContext(StatsContext)

export const StatsProvider = ({ children }) => {
    const { selectedHero } = useHeroContext()
    const [ combat, setCombat ] = useState([])
    const [ durability, setDurability ] = useState([])
    const [ intelligence, setIntelligence ] = useState([])
    const [ power, setPower ] = useState([])
    const [ speed, setSpeed ] = useState([])
    const [strength, setStrength ] = useState([])

    const totalStats = {
        combat: 0,
        durability: 0, 
        intelligence: 0,
        power: 0,
        strength: 0,
        speed: 0
     }

    useEffect(() => {
        const mockReducer = (value, valorDinamico) => {
            console.log("value", value)
            const reducer = (accumulator, currentValue) => accumulator + currentValue
            const statReducer = (value) => {value.reduce(reducer); console.log("valuestatreducer", value)}
            if(value.length)  totalStats.intelligence = statReducer(value)
            console.log("totalstatdinamico", totalStats.valorDinamico)
        }
        // con esto tenemos el array con los valores que necesitamos.         
        const mappingIntelligence = () => {
            selectedHero.map((hero) => setIntelligence(
                [...intelligence, parseInt(hero.stats.intelligence)]))
                mockReducer(intelligence, totalStats.intelligence)
        }
        mappingIntelligence()
        // la misma funcion para el combat 
        const mappingCombat = () => {
            selectedHero.map((hero) => setCombat(
                [...combat, parseInt(hero.stats.combat)])
            )
        }
        mappingCombat()
        
        const mappingPower = () => {
            selectedHero.map((hero) => setPower(
                [...power, parseInt(hero.stats.power)])
            )
        }
        mappingPower()

        const mappingDurability = () => {
            selectedHero.map((hero) => setDurability(
                [...durability, parseInt(hero.stats.durability)])
            )
        }
        mappingDurability()

        const mappingStrength = () => {
            selectedHero.map((hero) => setStrength(
                [...strength, parseInt(hero.stats.strength)])
            )
        }
        mappingStrength()

        const mappingSpeed = () => {
            selectedHero.map((hero) => setSpeed(
                [...speed, parseInt(hero.stats.speed)])
            )
        }
        mappingSpeed()
        
    }, [selectedHero])
    // mockReducer()

    return (
    <StatsContext.Provider value={{ intelligence, totalStats }}>
        {children}
    </StatsContext.Provider>)
}

export default useStatsContext;