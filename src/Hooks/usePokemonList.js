
import { useState, useEffect } from 'react';
import { getPokemonList } from '../API/pokemonAPI';

const usePokemonList = (initialLimit = 52) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  // Orden actual en uso ('id', 'az', 'za')
  const [sortOrder, setSortOrder] = useState('id');

  // Orden seleccionado en el <select> pero aún no aplicado
  const [pendingSortOrder, setPendingSortOrder] = useState('az');

  const limit = initialLimit;

  // Cargar más Pokémon (respetando orden activo)
  const loadMore = () => {
    setOffset((prev) => prev + limit);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getPokemonList(limit, offset);

      // Asignar el orden según el sortOrder actual
      setPokemonList((prev) => {
  const ids = new Set(prev.map(p => p.id));
  const uniqueNewData = data.filter(p => !ids.has(p.id));
  const combined = [...prev, ...uniqueNewData];

  switch (sortOrder) {
    case 'az':
      return combined.sort((a, b) => a.name.localeCompare(b.name));
    case 'za':
      return combined.sort((a, b) => b.name.localeCompare(a.name));
    default:
      return combined.sort((a, b) => a.id - b.id);
  }
});

      setLoading(false);
    };

    fetchData();
  }, [offset, sortOrder]);

  // Aplicar orden desde el <select>
  const applySort = () => {
    setSortOrder(pendingSortOrder);
    setPokemonList((prev) =>
      pendingSortOrder === 'az'
        ? [...prev].sort((a, b) => a.name.localeCompare(b.name))
        : [...prev].sort((a, b) => b.name.localeCompare(a.name))
    );
  };

  // Restaurar orden por ID
  const restoreOriginalOrder = () => {
    setSortOrder('id');
    setPendingSortOrder('az');
    setPokemonList((prev) => [...prev].sort((a, b) => a.id - b.id));
  };

  return {
    pokemonList,
    loadMore,
    loading,
    pendingSortOrder,
    setPendingSortOrder,
    applySort,
    restoreOriginalOrder,
    sortOrder,
  };
};

export default usePokemonList;

