import LeftLoginSide from '../../components/leftloginside/LeftLoginSide';
import { Login } from '../../pages/index'

const LoginContainer = () => {
  return (
  <div style={{display: "flex"}}>
    <LeftLoginSide />
    <Login />    
  </div>
  )
}

export default LoginContainer;