import "./scss/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomCursor from "custom-cursor-react";
import "custom-cursor-react/dist/index.css";

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
      <CustomCursor
        targets={["a", "button"]}
        customClass="custom-cursor"
        dimensions={30}
        smoothness={{
          movement: 0.2,
          scale: 0.1,
          opacity: 1,
        }}
        targetOpacity={1}
        targetScale={4}
      />
      <Router>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/motion" element={<Motion />} />
            <Route path="/albums/:title" element={<PhotoAlbumsPage />}></Route>
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
