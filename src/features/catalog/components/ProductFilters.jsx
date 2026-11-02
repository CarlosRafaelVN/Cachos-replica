import { CATEGORIAS, GENEROS } from '../catalogOptions.js';

export default function ProductFilters({
  categoria,
  setCategoria,
  generos,
  setGeneros,
  orden,
  setOrden,
  precioMax,
  setPrecioMax,
  precioTope,
}) {
  const alternarGenero = (gender) =>
    setGeneros(
      generos.includes(gender)
        ? generos.filter((value) => value !== gender)
        : [...generos, gender],
    );

  return (
    <aside className="filtros">
      <section>
        <h2>Categoría</h2>
        {CATEGORIAS.map((category) => (
          <label key={category} className="opcion">
            <input
              type="radio"
              name="categoria"
              checked={categoria === category}
              onChange={() => setCategoria(category)}
            />
            {category}
          </label>
        ))}
      </section>

      <section>
        <h2>Género</h2>
        {GENEROS.map((gender) => (
          <label key={gender} className="opcion">
            <input
              type="checkbox"
              checked={generos.includes(gender)}
              onChange={() => alternarGenero(gender)}
            />
            {gender.charAt(0) + gender.slice(1).toLowerCase()}
          </label>
        ))}
      </section>

      {precioTope > 0 && (
        <section>
          <h2>Precio máximo</h2>
          <input
            type="range"
            min="0"
            max={precioTope}
            step={Math.max(1, Math.round(precioTope / 100))}
            value={precioMax}
            onChange={(event) => setPrecioMax(Number(event.target.value))}
          />
          <p className="rango">Hasta {Number(precioMax).toLocaleString('es-CR')}</p>
        </section>
      )}

      <section>
        <h2>Ordenar por</h2>
        <select value={orden} onChange={(event) => setOrden(event.target.value)}>
          <option value="relevancia">Relevancia</option>
          <option value="menor">Precio: menor a mayor</option>
          <option value="mayor">Precio: mayor a menor</option>
          <option value="nombre">Nombre A-Z</option>
        </select>
      </section>
    </aside>
  );
}