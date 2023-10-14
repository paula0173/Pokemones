
import { PokemonesContext } from "../context/PokemonesContext";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PokemonCard from "./PokemonCard";

const Pokemones = () => {
  const [nameParam, setnameParam] = useState('');
  const { name } = useParams();
  const { listPokemones } = useContext(PokemonesContext);
  const navigate = useNavigate();

  const GotoPokemon = () => {
   if (nameParam !=="Pokemones")
       navigate(`/Pokemones/${nameParam}`)      
  };

   return (
    <>
      {(name !== undefined) ? <PokemonCard nameParam={nameParam} /> :

        <div className="Pokemonstyle">
          <h2 >Selecciona un pokemon</h2>
          <select value ={nameParam}  onChange = { (e) => {setnameParam(e.target.value)} } >
            <option key={0} value="Pokemones">Pokemones</option>
            {listPokemones.map((item) => (
              <option key={item.name} value={item.name}> {item.name}</option>
            ))
            }
          </select>
          <button onClick={GotoPokemon}>
            Ver detalle
          </button>
        </div>}
    </>
  );
};
export default Pokemones;