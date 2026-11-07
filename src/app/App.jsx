import HomePage from '../pages/HomePage.jsx';
import ProductPage from '../pages/ProductPage.jsx';

export default function App() {
  if (window.location.pathname === '/product') return <ProductPage />;

  return <HomePage />;
}