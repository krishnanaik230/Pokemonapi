
import React, { useState, useEffect, lazy, Suspense } from 'react';
import './App.css'


const App = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');
 

  const PokemonList = lazy(() => import('./Components/Pokemonlist'));

 

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const result = await fetch(currentPage);
      const data = await result.json();
      setPokemonData(data.results);
      setNextUrl(data.next);
      setPrevUrl(data.previous);
      setLoading(false);
    };
    fetchData();
  }, [currentPage]);

  const handleNextClick = () => {
    setCurrentPage(nextUrl);
  };

  const handlePrevClick = () => {
    setCurrentPage(prevUrl);
  };

  return (
    <div className="App">
      <h1>Pokemon List</h1>
      <div className='left-content'>
      <Suspense fallback={<div>Please wait data is Loading...</div>}>
        <PokemonList pokemonData={pokemonData} loading={loading} />
      </Suspense>
      </div>
      <div className="pagination">
        {prevUrl && <button onClick={handlePrevClick}>Previous</button>}
        {nextUrl && <button onClick={handleNextClick}>Next</button>}
      </div>
      
    </div>
  );
};

export default App;



