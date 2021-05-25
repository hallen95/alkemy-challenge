import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LoginContainer, HomeContainer, SearchContainer }from './containers'
import { NavBar } from './components'
import { HeroContext, HeroProvider } from './context/HeroContext'

function App() {
  return (
  <Router>
    <HeroProvider>
    <NavBar />
    <Switch>
      <Route exact path="/search">
        <SearchContainer />
      </Route>
      <Route exact path="/signup">
        <LoginContainer/>
      </Route>
      <Route path="/">
        <HomeContainer />
      </Route>
    </Switch>
    </HeroProvider>
  </Router>)
}

export default App;
