import { Login } from '../../pages/index'
import hero from '../../superhero.jpg'

const LoginContainer = () => {
  return (
  <div className="section-login">
    {<img className="section-login__hero" src={hero}/>}
    <Login className="section-login__form" />    
  </div>
  )
}

export default LoginContainer;