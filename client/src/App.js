import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Detail, Home } from './views';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/detail/:id" component={Detail} />
      </Switch>
    </div>
  );
}

export default App;
