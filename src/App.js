import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LoginContainer, HomeContainer, SearchContainer }from './containers'
import { NavBar } from './components'

function App() {
  return (
  <Router>
    <NavBar />
    <Switch>
      <Route exact path="/search">
        <SearchContainer />
      </Route>
      <Route path="/">
        <HomeContainer />
      </Route>
    {/* <LoginContainer/> */}
    </Switch>
  </Router>)
}

export default App;
