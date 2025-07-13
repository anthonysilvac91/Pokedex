import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Pokemon from './Pages/Pokemon'
import Regions from './Pages/Regions'
import Notfound from './Pages/Notfound';
import Navbar from './Components/Navbar';

function App() {


  return (
    <>
      <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-6">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon" element={<Pokemon />} />
          <Route path="/regiones" element={<Regions />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </Router>
      
    </>
  )
}

export default App
