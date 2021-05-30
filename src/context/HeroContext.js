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


    return (
        <HeroContext.Provider value={{ 
            selectedHero, setSelectedHero, heroContador, 
            setHeroContador, heroAdded, deleteHero }}>
            {children}
        </HeroContext.Provider>)
}

export default useHeroContext;