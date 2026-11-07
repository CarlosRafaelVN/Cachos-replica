import HomePage from '../pages/HomePage.jsx';
import ProductPage from '../pages/ProductPage.jsx';
import ProductCatalogPage from '../pages/products/ProductCatalogPage.jsx';
import CartDrawer from '../components/layout/CartDrawer.jsx';
import { CartProvider } from '../features/cart/useCarrito.js';

export default function App() {
  let page = <HomePage />;
  if (window.location.pathname === '/product') page = <ProductPage />;
  if (window.location.pathname === '/products') page = <ProductCatalogPage />;

  return (
    <CartProvider>
      {page}
      <CartDrawer />
    </CartProvider>
  );
}