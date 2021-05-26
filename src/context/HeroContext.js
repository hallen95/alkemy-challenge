import React, {createContext, useContext, useState } from 'react'

export const HeroContext = createContext([]);

const useHeroContext = () => useContext(HeroContext)

export const HeroProvider = ({ children }) => {
    // este estado controla TODOS los heroes elegidos 
    const [ selectedHero, setSelectedHero ] = useState([])
    // este estado controla la CANTIDAD de heroes elegidos/disponibles
    const [ heroContador, setHeroContador ] = useState(0)
    const MAXQUANTITY = 6;

    const heroAdded = (data) => {
        let hero = {
            id: data.id,
            name: data.name,
            stats: data.powerstats,
            image: data.image
        }
        if(heroContador < MAXQUANTITY) {
            setHeroContador(heroContador => heroContador + 1)
            setSelectedHero([...selectedHero, hero])
            return 
        } else {
            alert("excediste el numero de heroes posibles")
        }
    }

    const handleDuplicate = (selectedHero, heroId, addItems) => {
        cart.length && searchIdInCart(heroId) ? addMoreToCart(heroId, addItems) : setCart([...cart, selectedHero])
    }

    const searchHeroId = (heroId) => {
        return selectedHero.find(hero => hero.id === heroId)  
      }


    return (
        <HeroContext.Provider value={{ 
            selectedHero, setSelectedHero, heroContador, 
            setHeroContador, heroAdded }}>
            {children}
        </HeroContext.Provider>)
}

export default useHeroContext;