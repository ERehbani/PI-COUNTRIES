import './App.css';
import Detail from './views/detail/detail';
import Home from './views/home/home';
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Route path="/home" component={Home}/>
      <Route path={`/home/:id`} component={Detail}/>
    </div>
  );
}

export default App;
