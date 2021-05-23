import { useEffect, useState } from 'react'
import axios from 'axios'

const [ allHeros, setAllHeros ] = useState([]);
const API = "https://superheroapi.com/api/4298272713525886/456/powerstats"

/* en este archivo vamos a devolver las distintas funciones y llamados que necesitamos 
para renderizar los componentes de nuestra app 

el primero debe ser para el search, donde recomendemos 6 posibles heroes 
y si es posible hacerlo de manera aleatoria*/ 
useEffect(() => {
  axios.get("https://akabab.github.io/superhero-api/api/all.json")
  .then(res => setAllHeros(res));
}, [allHeros]);


// los heroes tienen 6 stats además de otros datos.
// useEffect(() => {
//   axios.get(API)
//   .then(res => {
//     setSuperHero(res.data)
//     console.log("datazo ", res)})
//   .catch(error => console.log(error.message))
  // .then(res => setName(res.data))
//   return () => (setSuperHero(''))
// }, [])

// return (
//   <p>{superHero.data}</p>
// );