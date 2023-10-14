import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Pokemones from "./views/Pokemones";
import Home from "./views/Home";
import './App.css'
import PokemonesProvider from "./context/PokemonesContext";
import LoadPokemones from "./components/LoadPokemones";

function App() {
  return (
    <>
      <PokemonesProvider>
        <LoadPokemones />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Pokemones" element={<Pokemones />} />
          <Route path="/Pokemones/:name" element={<Pokemones />} />
        </Routes>
      </PokemonesProvider>
    </>
  )
}

export default App
