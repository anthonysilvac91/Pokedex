import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Regions from './Pages/Regions'
import Navbar from './Components/Navbar';
import Pokedex from './Pages/Pokedex';

function App() {


  return (
    <>
      <Router>
      <div className="min-h-screen bg-[#F2F2F2]">
        <Navbar />
        <Routes>
     
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/regiones" element={<Regions />} />
       
        </Routes>
      </div>
    </Router>
      
    </>
  )
}

export default App
