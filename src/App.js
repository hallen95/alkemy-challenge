import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './app.css';
import { LoginContainer, HomeContainer, SearchContainer } from './containers';
import { Container } from 'react-bootstrap'
import { NavBar } from './components';
import { HeroProvider } from './context/HeroContext';
import { StatsProvider } from './context/StatsContext';
function App() {
  return (
    <Container fluid className="app__style">
      <Router>
        <StatsProvider>
          <HeroProvider>
            <Switch>
              <Route exact path="/search">
                <NavBar />
                <SearchContainer />
              </Route>
              <Route exact path="/">
                <LoginContainer />
              </Route>
              <Route path="/home">
                <NavBar />
                <HomeContainer />
              </Route>
            </Switch>
          </HeroProvider>
        </StatsProvider>
      </Router>
    </Container>
  );
}

export default App;
