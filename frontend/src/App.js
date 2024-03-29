// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ChurchesPage from "./pages/ChurchesPage/ChurchesPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import SplidePage from "./pages/SplidePage/SplidePage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import CoreValuesPage from "./pages/CoreValuesPage/CoreValuesPage";
import CareerPage from "./pages/CareerPage/CareerPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/churches" element={<ChurchesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/splides" element={<SplidePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/core" element={<CoreValuesPage />} />
        <Route path="/career" element={<CareerPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
