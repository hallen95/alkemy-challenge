import React, {createContext, useContext, useState } from 'react'

export const HeroContext = createContext([]);

const useHeroContext = () => useContext(HeroContext)

export const HeroProvider = ({ children }) => {
    const [ hero, setHero ] = useState([])

    return (
        <HeroContext.Provider value={{ hero, setHero }}>
            {children}
        </HeroContext.Provider>)
}
export default useHeroContext;