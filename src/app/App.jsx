import HomePage from '../pages/HomePage.jsx';
import ProductPage from '../pages/ProductPage.jsx';
import ProductCatalogPage from '../pages/products/ProductCatalogPage.jsx';
import CartDrawer from '../components/layout/CartDrawer.jsx';
import { CartProvider } from '../features/cart/useCarrito.js';
import { appPathname } from '../utils/routes.js';

export default function App() {
  let page = <HomePage />;
  const pathname = appPathname();
  if (pathname === '/product') page = <ProductPage />;
  if (pathname === '/products') page = <ProductCatalogPage />;

  return (
    <CartProvider>
      {page}
      <CartDrawer />
    </CartProvider>
  );
}