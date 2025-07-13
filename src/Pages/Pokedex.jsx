
import PokemonCard from '../Components/PokemonCard'
import SortSelector from '../Components/SortSelector';
import usePokemonList from '../Hooks/usePokemonList';

const Pokedex = () => {
  
  const { pokemonList, loadMore, loading, pendingSortOrder, setPendingSortOrder, applySort, restoreOriginalOrder, sortOrder} = usePokemonList();

  return (
    <section>

      <div className='flex justify-center my-10'>
        <SortSelector value={pendingSortOrder} onChange={setPendingSortOrder} onApply={applySort} onReset={restoreOriginalOrder}/>
      </div>
      
      <div className='flex flex-wrap justify-center gap-10'>
        {pokemonList.map((p) => (
          <PokemonCard
            key={p.id}
            id={p.id}
            name={p.name}
            image={p.image}
            types={p.types}
          />
        ))}
      </div>
      <div className='flex justify-center'>
        <button onClick={loadMore} disabled={loading} className=" my-10 px-4 py-2 bg-[#30a7d7] text-white font-bold cursor-pointer hover:bg-blue-700 disabled:bg-gray-400 disabled:text-black"> {loading ? 'Cargando...' : 'Cargar más Pokémon'}
        </button>

      </div>
      
    </section>
  )
}

export default Pokedex