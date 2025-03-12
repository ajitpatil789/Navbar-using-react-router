import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import ImageGallery from "./pages/ImageGallery";
import LoginForm from "./pages/LoginForm";
import Gallery from "./pages/Photos/Gallery";
import Registration from "./pages/Registration";
import ShopPage from "./pages/ShopPage";
import Photo from "./pages/PhotoGallery/Photo";
import images from "./pages/PhotoGallery/images";
import School from "./pages/Student/School";

function App() {
  const imagesUrls = [
    // "https://m.media-amazon.com/images/I/412jNzM88BL._SX300_SY300_QL70_FMwebp_.jpg",
    // "https://m.media-amazon.com/images/I/412jNzM88BL._SX300_SY300_QL70_FMwebp_.jpg",
    // "https://m.media-amazon.com/images/I/412jNzM88BL._SX300_SY300_QL70_FMwebp_.jpg",
    // "https://m.media-amazon.com/images/I/412jNzM88BL._SX300_SY300_QL70_FMwebp_.jpg",
    "/products/f1.jpg",
    "/products/f2.jpg",
    "/products/f3.jpg",
    "/products/f4.jpg",
    "/products/f5.jpg",
    "/products/f6.jpg",
    "/products/f7.jpg",
    "/products/f8.jpg",
  ];
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="register" element={<Registration />} />
        <Route path="gallery" element={<ImageGallery images={imagesUrls} />} />
        <Route path="photo" element={<Gallery />} />
        <Route path="images" element={<Photo images={images} />} />
        <Route path="studentInfo" element={<School />} />
      </Routes>
    </Router>
  );
}

export default App;
