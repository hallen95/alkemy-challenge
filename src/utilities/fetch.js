import { useEffect, useState } from 'react'
import axios from 'axios'

const [ superHero, setSuperHero ] = useState("");
const API = "https://superheroapi.com/api/4298272713525886/456/powerstats"

export const HeroCall = (number) => {
  return (
    axios.get(API)
  )
}
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