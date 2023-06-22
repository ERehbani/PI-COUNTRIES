import "./App.css";
import { Route, Switch, useLocation } from "react-router-dom";
import { Create, Detail, Home, Landing } from "./views";
import Navbar from "./views/navbar/navbar";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <Navbar />}
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/detail/:id" component={Detail} />
      </Switch>
    </div>
  );
}

export default App;
