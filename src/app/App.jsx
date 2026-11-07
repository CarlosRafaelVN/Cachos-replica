import HomePage from '../pages/HomePage.jsx';
import ProductPage from '../pages/ProductPage.jsx';
import ProductCatalogPage from '../pages/products/ProductCatalogPage.jsx';

export default function App() {
  if (window.location.pathname === '/product') return <ProductPage />;
  if (window.location.pathname === '/products') return <ProductCatalogPage />;
  return <HomePage />;
}