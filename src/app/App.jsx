import HomePage from '../pages/HomePage.jsx';
import ProductCatalogPage from '../pages/products/ProductCatalogPage.jsx';

export default function App() {
  return window.location.pathname === '/products'
    ? <ProductCatalogPage />
    : <HomePage />;
}