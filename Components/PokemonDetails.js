import React, { useState, useEffect } from 'react';

const PokemonDetails = ({ url }) => {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const result = await fetch(url);
      const data = await result.json();
      setDetails(data);
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return (
    <div className="pokemon-details">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <p>Height: {details.height}</p>
          <p>Weight: {details.weight}</p>
          <p>Abilities:</p>
          <ul>
            {details.abilities.map((ability, index) => (
              <li key={index}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PokemonDetails;
