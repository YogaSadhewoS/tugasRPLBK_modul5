import React, { useEffect } from "react";
import { usePokemonContext } from "./PokemonContext";

const HalamanPertama = () => {
  const { pokemons, fetchPokemons } = usePokemonContext();

  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]);

  return (
    <div>
      <h2>Halaman Pertama</h2>
      <ul className="numbered-list">
        {pokemons.slice(0, 10).map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HalamanPertama;