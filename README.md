# Cachos

Tienda de calzado construida con React y Vite.

## Estructura

- `src/app`: composición y entrada de la aplicación.
- `src/pages`: páginas completas, como la página de inicio.
- `src/components/layout`: navegación, avisos y pie de página compartidos.
- `src/components/home`: secciones de la página de inicio.
- `src/features/catalog`: API, normalización, filtros y vista de catálogo.
- `src/features/cart`: estado y componentes del carrito.
- `src/data`: contenido estático de la tienda.
- `src/utils`: utilidades compartidas, como el formato de precios.

## Desarrollo

El proyecto usa pnpm 10.8.1 mediante Corepack:

```powershell
corepack pnpm install
corepack pnpm dev
corepack pnpm lint
corepack pnpm build
```

## Publicar en GitHub Pages

El workflow `.github/workflows/deploy-pages.yml` compila y publica el sitio al
hacer push a `main` o al ejecutarlo manualmente desde la pestaña **Actions**.
En GitHub, configurá **Settings > Pages > Build and deployment > Source** como
**GitHub Actions**. La URL del sitio será
`https://<usuario>.github.io/Cachos-replica/`.

Si cambiás el nombre del repositorio, actualizá `VITE_BASE_PATH` en el workflow.

GitHub Pages solo aloja archivos estáticos. El catálogo y las funciones de
producto consultan una API mediante un proxy disponible únicamente durante el
desarrollo local en Vite. Para que esas funciones trabajen en producción, se
necesita publicar un backend/proxy compatible con CORS y configurar su URL; no
se deben exponer tokens privados en variables `VITE_*`.