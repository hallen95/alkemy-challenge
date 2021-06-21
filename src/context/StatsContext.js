import React, {createContext, useContext, useState, useEffect } from 'react'
import useHeroContext from './HeroContext'

export const StatsContext = createContext([])
const useStatsContext = () => useContext(StatsContext)

export const StatsProvider = ({ children }) => {
    const { selectedHero } = useHeroContext()
    const [ totalStats, setTotalStats ] = useState({})

    // const totalStats = {
    //     combat: 0,
    //     durability: 0, 
    //     intelligence: 0,
    //     power: 0,
    //     strength: 0,
    //     speed: 0
    //  }
    
    const handleStats = (heroStats) =>  {
      if (Object.keys(totalStats).length === 0) {
        setTotalStats(heroStats);
      } else {
        const newCombat = parseInt(totalStats.combat) + parseInt(heroStats.combat);
        const newDurability =
          parseInt(totalStats.durability) + parseInt(heroStats.durability);
        const newIntelligence =
          parseInt(totalStats.intelligence) + parseInt(heroStats.intelligence);
        const newPower = parseInt(totalStats.power) + parseInt(heroStats.power);
        const newSpeed = parseInt(totalStats.speed) + parseInt(heroStats.speed);
        const newStrength =
          parseInt(totalStats.strength) + parseInt(heroStats.strength);
        const newStats = {
          combat: newCombat.toString(),
          durability: newDurability.toString(),
          intelligence: newIntelligence.toString(),
          power: newPower.toString(),
          speed: newSpeed.toString(),
          strength: newStrength.toString(),
        };
        setTotalStats(newStats);
      }
    };

    const deleteStats = (heroStats) => {
      const newCombat = parseInt(totalStats.combat) - parseInt(heroStats.stats.combat)
      const newDurability = parseInt(totalStats.durability) - parseInt(heroStats.stats.durability)
      const newIntelligence = parseInt(totalStats.intelligence) - parseInt(heroStats.stats.intelligence)
      const newPower = parseInt(totalStats.power) - parseInt(heroStats.stats.power)
      const newSpeed = parseInt(totalStats.speed) - parseInt(heroStats.stats.speed)
      const newStrength = parseInt(totalStats.strength) - parseInt(heroStats.stats.strength)
      const newStats = {
          combat: newCombat.toString(),
          durability: newDurability.toString(),
          intelligence: newIntelligence.toString(),
          power: newPower.toString(),
          speed: newSpeed.toString(),
          strength: newStrength.toString()
      }
      setTotalStats(newStats)
  }
  
  const [ peso, setPeso ] = useState(0)
  const [ altura, setAltura ] = useState(0)

  const prom = (selectedHero) => {
      let pesoTotal = 0
      let altTotal = 0
      const separador = " "
      const promedioPeso = selectedHero.map((hero) => {
          const peso = hero.weight[1].split(separador)[0]
          pesoTotal = pesoTotal + parseInt(peso)
          return pesoTotal
      })
      const promedioAlt = selectedHero.map((hero) => {
          const alt = hero.height[1].split(separador)[0]
          altTotal = altTotal + parseInt(alt)
          return altTotal
      })
      const resPeso = Math.trunc(promedioPeso.find(peso => peso === pesoTotal) / selectedHero.length)
      const resAlt = Math.trunc(promedioAlt.find(alt => alt === altTotal) / selectedHero.length)
      const promedios = [resPeso.toString(), resAlt.toString()]
      setPeso(promedios[0])
      setAltura(promedios[1])
      // alt = promedios[1]
      // peso = promedios[0]
  }

    return (
    <StatsContext.Provider value={{ handleStats, totalStats, deleteStats, prom, altura, peso }}>
        {children}
    </StatsContext.Provider>)
}

export default useStatsContext;