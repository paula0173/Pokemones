import { createContext, useState } from "react";

export const PokemonesContext = createContext();

const PokemonesProvider = ({ children }) => {
    const [listPokemones, setlistPokemones] = useState([]);

    return (
        <PokemonesContext.Provider value={{ listPokemones, setlistPokemones }}>
            {children}
        </PokemonesContext.Provider>
    );
};
export default PokemonesProvider;