import axios from "axios";
import { useEffect, useContext } from "react";
import { PokemonesContext } from "../context/PokemonesContext";

const LoadPokemones = () => {
 
    const { setlistPokemones } = useContext(PokemonesContext);

    const url = `https://pokeapi.co/api/v2/pokemon`

    const searchPokemon = () => {
        axios
            .get(url)
            .then((response) => {
                response.data.results ? setlistPokemones(response.data.results) : setlistPokemones(null)             
            })
            .catch((err) => {
                console.log("Error al obtener datos de la API:", err);
            });
    };


    useEffect(() => {
        searchPokemon();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
        </>
    );
};
export default LoadPokemones;