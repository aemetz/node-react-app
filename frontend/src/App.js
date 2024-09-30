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

          {/* Switch replaced by Routes */}
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/store" exact element={<Store/>}/>
            <Route path="/about" exact element={<About/>}/>
          </Routes>
          
      </div>

    </Router>
  );
}

export default App;
