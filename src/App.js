import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LoginContainer, HomeContainer, SearchContainer }from './containers'
import { NavBar } from './components'
import { HeroProvider} from './context/HeroContext'
import { StatsProvider } from './context/StatsContext'
function App() {
  return (
  <Router>
    <HeroProvider>
      <StatsProvider>
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
      </StatsProvider>
    </HeroProvider>
  </Router>)
}

export default App;
