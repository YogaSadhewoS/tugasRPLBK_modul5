import { createContext, useContext, useState } from "react";

const PokemonContext = createContext();

export const usePokemonContext = () => useContext(PokemonContext);

export const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const fetchPokemons = async () => {
    if (pokemons.length === 0) {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
        const data = await response.json();
        setPokemons(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  return (
    <PokemonContext.Provider value={{ pokemons, fetchPokemons }}>
      {children}
    </PokemonContext.Provider>
  );
};