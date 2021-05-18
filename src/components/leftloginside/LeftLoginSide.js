import img from '../../superhero.jpg'
import './LeftLoginSide.css'

export const LeftLoginSide = () => { 
    return  (
        <img src={img} alt="left side login" className="login-image"/>
    )
}

export default LeftLoginSide;