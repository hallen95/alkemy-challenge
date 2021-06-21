import React, { createContext, useContext, useState, useEffect } from 'react';
import useStatsContext from './StatsContext';

export const HeroContext = createContext([]);

const useHeroContext = () => useContext(HeroContext);

export const HeroProvider = ({ children }) => {
  const [selectedHero, setSelectedHero] = useState([]);
  const [heroContador, setHeroContador] = useState(0);
  const [villianCounter, setVillianCounter] = useState(0);
  const [heroCounter, setHeroCounter] = useState(0);
  const { handleStats, deleteStats, prom } = useStatsContext()

  /**************** MANIPULANDO DOM *****************/
  useEffect(() => {
    if (localStorage.getItem('mi-equipo')) {
      let fullTeam = localStorage.getItem('mi-equipo');
      fullTeam = JSON.parse(fullTeam);
      setSelectedHero(fullTeam);

      let heroBadStorage = localStorage.getItem('villians');
      heroBadStorage = JSON.parse(heroBadStorage);
      setVillianCounter(heroBadStorage);

      let heroGoodStorage = localStorage.getItem('heros');
      heroGoodStorage = JSON.parse(heroGoodStorage);
      setHeroCounter(heroGoodStorage);
    }
    // if (localStorage.getItem('total-stats')) {
    //     let total = localStorage.getItem('total-stats')
    //     total = JSON.parse(total)
    //     setTotalStats(total)
    // }
  }, []);

  useEffect(() => {
    localStorage.setItem('mi-equipo', JSON.stringify(selectedHero));
    // localStorage.setItem('total-stats', JSON.stringify(totalStats))
    localStorage.setItem('villians', JSON.stringify(villianCounter));
    localStorage.setItem('heros', JSON.stringify(heroCounter));
  }, [selectedHero, villianCounter, heroCounter]);

  useEffect(() => {
    // handleStats(selectedHero);
    selectedHero.length > 0 ? console.log(selectedHero.map(hero => console.log(hero.appearence.weight))) : console.log("not yet")
  },[])
  /**************** AGREGANDO HEROES *****************/
  const addGood = (hero) => {
    if (heroCounter === 3) {
      alert('maximo de 3 héroes con orientacion buena alcanzado');
    } else {
      const heroGood = heroCounter + 1;
      setHeroCounter(heroGood);
      heroAdded(hero);
    }
  };

  const addBad = (hero) => {
    if (villianCounter === 3) {
      alert('maximo de 3 héroes con orientacion buena alcanzado');
    } else {
      const heroBad = villianCounter + 1;
      setVillianCounter(heroBad);
      heroAdded(hero);
    }
  };

  const heroAdded = (data) => {
    let hero = {
      id: data.id,
      name: data.name,
      stats: data.powerstats,
      image: data.image.url,
      alignment: data.biography.alignment,
      weight: data.appearance.weight,
      height: data.appearance.height,
    };
    if (searchHeroId(hero.id)) {
      handleStats(hero.stats)
      setSelectedHero([...selectedHero, hero]);
      prom(selectedHero)
    } else {
      alert('ya tienes ese héroe');
    }
  };

  const searchHeroId = (heroId) => {
    // devuelve el primer valor que coincida con el heroId o undefined
    let duplicated = selectedHero.find((hero) => hero.id === heroId);
    if (duplicated === undefined) {
      return true;
    }
    return false;
  };

  /**************** ELIMINANDO HEROES *****************/
  const deleteGood = (hero) => {
    setHeroCounter(heroCounter - 1);
    deleteHero(hero)
    deleteStats(hero)
  };

  const deleteBad = (hero) => {
    setVillianCounter(villianCounter - 1);
    deleteHero(hero)
    deleteStats(hero)
  };

  const deleteHero = (hero) => {
    // crea un nuevo array con todos menos el buscado
    const filtered = selectedHero.filter(
      (filterHeros) => filterHeros.id !== hero.id
    );
    setSelectedHero(filtered)
    prom(selectedHero)
  };

  return (
    <HeroContext.Provider
      value={{
        selectedHero,
        setSelectedHero,
        heroContador,
        setHeroContador,
        heroAdded,
        addBad,
        addGood,
        deleteGood,
        deleteBad,
      }}
    >
      {children}
    </HeroContext.Provider>
  );
};

export default useHeroContext;
