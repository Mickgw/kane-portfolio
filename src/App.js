import "./scss/main.scss";
import "locomotive-scroll/src/locomotive-scroll.scss";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/hooks/ScrollToTop";
import AnimatedCursor from "react-animated-cursor";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Motion from "./pages/Motion";
import PhotoAlbumsPage from "./pages/PhotoAlbumsPage";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <AnimatePresence>
      <div className="App">
        <ScrollToTop />
        <div className="cursor__dot">
          <AnimatedCursor
            innerSize={null} //Disabled the the main dot
            innerScale={null} //Disabled the dot that's following the cursor
            outerSize={15}
            outerScale={5}
            clickables={[
              "a",
              "button",
              ".link",
              ".desktop-menu-button-text",
              ".gallery-image",
              ".read-about-link",
              // '.album-card',
              // ".read-about-link",
            ]}
          />
        </div>

        <header>
          <Navbar />
        </header>

        <main>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/motion" element={<Motion />} />
            <Route path="/albums/:title" element={<PhotoAlbumsPage />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </AnimatePresence>
  );
}

export default App;
