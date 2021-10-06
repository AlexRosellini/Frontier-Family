import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Feature from './components/featuretable';
import Header from './components/header';
import Rover from './components/rover';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
        <Rover />
        <Feature />
        </div>
      </div>
    </Router>
  );
}
export default App;
