import React, {createContext, useContext, useState, useEffect } from 'react'

export const HeroContext = createContext([])

const useHeroContext = () => useContext(HeroContext)

export const HeroProvider = ({ children }) => {
    // este estado controla TODOS los heroes elegidos 
    const [ selectedHero, setSelectedHero ] = useState([])
    // este estado controla la CANTIDAD de heroes elegidos/disponibles
    const [ heroContador, setHeroContador ] = useState(0)
    // este estado controla los villanos 
    const [ villian, setVillian ] = useState(0)
    //este controla los héroes y ambos funcionan como contadores 
    const [ hero, setHero ] = useState(0)
    const MAXQUANTITY = 6;

    const heroAdded = (data) => {
        let hero = {
            id: data.id,
            name: data.name,
            stats: data.powerstats,
            image: data.image,
            alignment: data.biography.alignment
        }
        if(selectedHero.length <= MAXQUANTITY) {
            handleAlignment(hero)} 
        setHeroContador(heroContador => heroContador + 1)
    }
    /* primero tendríamos que tener el addHero, crear el objeto
    despues viene el handleDuplicate(objeto, id) =>
    ejecuta searchHeroId para que no se duplique, 
    si esto devuelve una coincidencia entonces hay que avisar que 
    ese heroe ya lo tiene y debe elegir otro con un alert.
    sino lo tiene ejecuta setSelectedHero([...spread])
    no vamos a hacer el quantity check porque solo puede haber 1
    */ 

    const handleDuplicate = (newHero) => {
        if(searchHeroId(newHero.id) !== undefined) {
            alert("ya tienes ese heroe!") 
            return false
        } else { 
            return true
        }
    }

    const handleAlignment = ( newHero ) => {
        if (handleDuplicate(newHero)) {
            if(newHero.alignment === "good" && hero < 3){
                setHero(hero => hero+1)
                setSelectedHero([...selectedHero, newHero])
                return true
            } else if (newHero.alignment === "bad" && villian < 3) {
                setVillian(villian => villian+1)
                setSelectedHero([...selectedHero, newHero])
                return true
            } else {
                alert("recuerda que tienes un máximo de 3 héroes por bando!")
                return false
            }
        }
    }
    
    const searchHeroId = heroId => {
        return selectedHero.find(hero => hero.id === heroId)
    }

    const deleteHero = hero => {
        hero.alignment === "good" ? setHero(hero => hero-1) : setVillian(villian => villian-1)
        // crea un nuevo array con todos menos el buscado
        const filtered = selectedHero.filter(filterHeros => filterHeros.id !== hero.id)
        setSelectedHero(filtered)
    }

    const totalStats = {
        combat: 0,
        durability: 0, 
        intelligence: 0,
        power: 0,
        strength: 0,
        speed: 0
     }

    //  const parsingValues = () => {
    //     let arrayIntelligence = []
    //     let sum = 0
    //     console.log("herolength", selectedHero.length)
    //     // si selected hero tiene al menos 1 hace el for.
    //         if(selectedHero.length >= 1){
    //             for(let i = 0; i <= selectedHero.length; i++){
    //             let intelligenceParsed = parseInt(selectedHero.stats.intelligence)
    //             arrayIntelligence.push(intelligenceParsed)
    //             console.log("intelishense", intelligenceParsed);
    //             }
    //         } else {
    //             return console.log("aqui no hay nada")
    //         }
    //     arrayIntelligence.length < 2 ? sum = (arrayIntelligence[0]) 
    //     :
    //     (arrayIntelligence.reduce((accumulator, currentValue) => {
    //         return sum = (accumulator + currentValue)
    //     }))
    //     totalStats.intelligence = sum
    //     return 
    // }
    // parsingValues();    
     const [ intelligence, setIntelligence ] = useState([])
    useEffect(() => {
        const mappingIntelligence = () => {
            selectedHero.map((hero) => 
                setIntelligence([...intelligence, parseInt(hero.stats.intelligence)])
            )
        }
        mappingIntelligence()
        // intelligence.length && reducerValue()
        // con esto tenemos el array con los valores que necesitamos. 

        
    }, [selectedHero])
    //chequear esto que esta complicado
    const finaltest = () => {const reducer = (accumulator, currentValue) => accumulator + currentValue
    const reducer2 = () => intelligence.reduce(reducer)
    if(intelligence.length) totalStats.intelligence = reducer2()}
    finaltest()


    console.log("array intell", intelligence)

    return (
        <HeroContext.Provider value={{ 
            selectedHero, setSelectedHero, heroContador, 
            setHeroContador, heroAdded, deleteHero, totalStats, intelligence }}>
            {children}
        </HeroContext.Provider>)
}

export default useHeroContext;