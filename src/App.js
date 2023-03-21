import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ScrollToTop from "./ScrollToTop";
import IntroductionPage from "./pages/IntroductionPage";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/introduction" element={<IntroductionPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/product/:id/details" element={<ProductDetailsPage />} />
          <Route path="*" />
        </Routes>
        <ScrollToTop />
      </Router>
    </div>
  );
}

export default App;
