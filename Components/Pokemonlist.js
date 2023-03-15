import React from 'react';
import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemonData, loading }) => {
  return (
    <div className="pokemon-list">
      {loading ? (
        <div>Loading...</div>
      ) : (
        pokemonData.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))
      )}
    </div>
  );
};

export default PokemonList;


