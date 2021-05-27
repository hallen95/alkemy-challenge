import { CardItem } from '../../components/'
import useHeroContext from '../../context/HeroContext'

const CardContainer = () => {
    const { selectedHero } = useHeroContext();
    return (
        <>
    {selectedHero.map((hero) =>  <CardItem key={hero.id} hero={hero} className="card-item"/>)}
        </>)
}

export default CardContainer;