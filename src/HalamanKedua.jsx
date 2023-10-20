import React, { useEffect } from "react";
import { usePokemonContext } from "./PokemonContext";

const HalamanKedua = () => {
  const { pokemons, fetchPokemons } = usePokemonContext();

  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]);

  return (
    <div>
      <h2>Halaman Kedua</h2>
      <ol className="numbered-list" start={11}>
        {pokemons.slice(10, 20).map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ol>
    </div>
  );
};

export default HalamanKedua;
