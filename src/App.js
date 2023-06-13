import './App.css';
import { BrowserRouter,Routes, Route,} from 'react-router-dom';
import Nav from "./navbar/Nav";
import Home from "./pages/Home"
import About from "./pages/About"


function App() {
  return (
    <div>
    <Nav />
    <BrowserRouter>
     <Routes>
     <Routes path="" element={<Home />}/>
     <Routes path="" element={<About />}/>
  </BrowserRouter>
    </Routes>
  

    </div>


  );
}

export default App;
