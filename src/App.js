import "./scss/main.scss";
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/hooks/ScrollToTop";
// import Cursor from "./components/Cursor";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Motion from "./pages/Motion";
import PhotoAlbumsPage from "./pages/PhotoAlbumsPage";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <div className="App">
        {/* <Cursor /> */}

          <ScrollToTop />
          <header>
            <Navbar />
          </header>

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/about" element={<About />} />
              <Route path="/motion" element={<Motion />} />
              <Route path="/albums/:title" element={<PhotoAlbumsPage />} />
              <Route path="/*" element={<PageNotFound />} />
            </Routes>
          </main>

          <Footer />
      </div>
    </>
  );
}

export default App;
