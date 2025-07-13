const BASE_URL = 'https://pokeapi.co/api/v2';


export const getPokemonList = async (limit = 52, offset = 0) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  const data = await response.json();

  const details = await Promise.all(
    data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const pokeData = await res.json();

      return {
        id: pokeData.id,
        name: pokeData.name,
        image: pokeData.sprites.other['official-artwork'].front_default,
        types: pokeData.types.map((t) => t.type.name),
      };
    })
  );

  return details;
};

