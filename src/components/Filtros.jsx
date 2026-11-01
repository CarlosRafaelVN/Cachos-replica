// Valores que acepta la API. "Calzado" está confirmado; ajusta los demás según
// lo que veas en la pestaña Network del sitio real.
export const CATEGORIAS = ["Calzado", "Ropa", "Accesorios"];
export const GENEROS = ["FEMENINO", "MASCULINO", "UNISEX"];

export default function Filtros({
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
  const alternarGenero = (g) =>
    setGeneros(generos.includes(g) ? generos.filter((x) => x !== g) : [...generos, g]);

  return (
    <aside className="filtros">
      <section>
        <h3>Categoría</h3>
        {CATEGORIAS.map((c) => (
          <label key={c} className="opcion">
            <input
              type="radio"
              name="categoria"
              checked={categoria === c}
              onChange={() => setCategoria(c)}
            />
            {c}
          </label>
        ))}
      </section>

      <section>
        <h3>Género</h3>
        {GENEROS.map((g) => (
          <label key={g} className="opcion">
            <input
              type="checkbox"
              checked={generos.includes(g)}
              onChange={() => alternarGenero(g)}
            />
            {g.charAt(0) + g.slice(1).toLowerCase()}
          </label>
        ))}
      </section>

      {precioTope > 0 && (
        <section>
          <h3>Precio máximo</h3>
          <input
            type="range"
            min="0"
            max={precioTope}
            step={Math.max(1, Math.round(precioTope / 100))}
            value={precioMax}
            onChange={(e) => setPrecioMax(Number(e.target.value))}
          />
          <p className="rango">Hasta {Number(precioMax).toLocaleString("es-CR")}</p>
        </section>
      )}

      <section>
        <h3>Ordenar por</h3>
        <select value={orden} onChange={(e) => setOrden(e.target.value)}>
          <option value="relevancia">Relevancia</option>
          <option value="menor">Precio: menor a mayor</option>
          <option value="mayor">Precio: mayor a menor</option>
          <option value="nombre">Nombre A-Z</option>
        </select>
      </section>
    </aside>
  );
}
