import React, { useState } from 'react';
import PokemonDetails from './PokemonDetails';

const PokemonCard = ({ pokemon }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleCardClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="pokemon-card" onClick={handleCardClick}>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
      {showDetails && <PokemonDetails url={pokemon.url} />}
    </div>
  );
};

export default PokemonCard;
