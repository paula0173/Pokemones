import { useEffect, useState } from "react";
import axios from "axios";

const PokemonCard = ({ nameParam }) => {

  const [details, setDetails] = useState(null);
  const url = `https://pokeapi.co/api/v2/pokemon/${nameParam}`

  const searchUnPokemon = () => {
    axios
      .get(url)
      .then((response) => {
        response.data ? setDetails(response.data) : setDetails(null)

      })
      .catch((err) => {
        console.log("Error al obtener datos de la API:", err);
      });
  };

  useEffect(() => {
    searchUnPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);


  return (
    <div className="formatCard" >
      <div>
        {details !== null && <img className="formatImg" src={details.sprites.other.dream_world.front_default} alt="Imagen Pokemon"/>}
      </div>

      <div className="formatList">
        <h1>{nameParam}</h1>
        <ul>
          {details !== null && details.stats.map((item) => (
            <li key={item.stat.name}> {item.stat.name}:   {item.base_stat} </li>
          ))
          }
        </ul>

        {details !== null && details.types.map((item) => (
          <p key={item.type.name}> {item.type.name} </p>
        ))
        }
      </div>
    </div>
  );
};
export default PokemonCard;