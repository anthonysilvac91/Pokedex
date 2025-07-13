import { useState, useEffect } from 'react';
import { getPokemonList } from '../API/pokemonAPI';


const usePokemonList = (initialLimit = 52) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const limit = initialLimit;

  const loadMore = () => {
    setOffset((prev) => prev + limit);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getPokemonList(limit, offset);
      setPokemonList((prev) => [...prev, ...data]);
      setLoading(false);
    };

    fetchData();
  }, [offset]);

  return {
    pokemonList,
    loadMore,
    loading,
  };
};

export default usePokemonList;
