import './App.css';
import { Route,  Routes,  useLocation } from 'react-router-dom';
import { Create, Detail, Home, Landing } from './views';
import Navbar from './views/navbar/navbar';


function App() {

  const location = useLocation()
  return (
    <div className="App">
      
        {location.pathname !== "/" && <Navbar/>}
      <Routes>
        <Route exact path="/" element={<Landing/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/create" element={<Create/>}/>
        <Route exact path="/detail/:id" element={<Detail/>} />
      </Routes>
    </div>
  );
}

export default App;
