import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/header';
import Index from './components';
import TtrpgMainPage from './components/ttrpg';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
        <Switch>
          <Route exact path = '/'>
            <Index />
          </Route>
          <Route exact path = '/ttrpg'>
            <TtrpgMainPage />
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}
export default App;
