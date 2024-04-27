import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Preview from "./pages/Preview";
import Category from './pages/Category';
import ShareButton from './components/ShareButton';
import Admin from './pages/Admin';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="preview/:id" element={<Preview />} />
          <Route path="category/:category" element={<Category />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
        <ShareButton />
        <Footer />
      </div>

    </BrowserRouter>

  )
}

export default App
