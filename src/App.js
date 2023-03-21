import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ScrollToTop from "./ScrollToTop";
import IntroductionPage from "./pages/IntroductionPage";
import UnavailablePage from "./pages/UnavailablePage";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<CategoryPage />} />
          <Route path="/categories/:name" element={<CategoryPage />} />
          <Route path="/introduce" element={<IntroductionPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
          <Route path="*" element={<UnavailablePage />} />
        </Routes>
        <ScrollToTop />
      </Router>
    </div>
  );
}

export default App;
