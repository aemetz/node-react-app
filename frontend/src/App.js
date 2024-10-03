import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "./index.css"
import Store from "./pages/Store"
import About from "./pages/About"
import Home from "./pages/Home"

function App() {

  console.log(Store);

  return (
    <Router>

      <div>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/store" element={<Store/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
          
      </div>

    </Router>
  );
}

export default App;
