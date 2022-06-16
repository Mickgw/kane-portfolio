import "./scss/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Motion from "./pages/Motion";
import PhotoAlbumsPage from "./pages/PhotoAlbumsPage";

function App2() {
  return (
    <div className="App">
      <Router>
        <header>
          <Navbar />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:id" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/motion" element={<Motion />} />
            <Route path="/albums/:title" element={<PhotoAlbumsPage />}>
              
            </Route>
          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App2;
