

const SortSelector = ({ value, onChange, onApply, onReset }) => {
  return (
    <div className="flex items-center gap-4 flex-wrap">
      <label htmlFor="sort">Ordenar:</label>

      <select
        id="sort"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border px-2 py-1 rounded"
      >
        <option value="az">A - Z</option>
        <option value="za">Z - A</option>
      </select>

      <button onClick={onApply} className="bg-[#30a7d7] text-white px-3 py-1 font-bold ">
        Aplicar filtro
      </button>

      <button onClick={onReset} className="bg-gray-500 text-white px-3 py-1 font-bold">
        Restaurar
      </button>
    </div>
  );
};

export default SortSelector;