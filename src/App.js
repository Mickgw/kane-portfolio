import "./scss/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useCallback } from "react";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/hooks/ScrollToTop";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Motion from "./pages/Motion";
import PhotoAlbumsPage from "./pages/PhotoAlbumsPage";
import PageNotFound from "./pages/PageNotFound";

function App() {
  // let location = useLocation();

  // function changeBodyBackground() {
  //   if (window.scrollY <= 300) {
  //     document.body.style.transition = "1s ease";
  //     document.body.style.backgroundColor = "black";
  //   } else {
  //     document.body.style.backgroundColor = "white";
  //   }
  // }

  // if (location.pathname === "/") {
  //   document.body.style.backgroundColor = "black";
  //   window.addEventListener("scroll", changeBodyBackground);
  // }
  // if (location.pathname === "*") {
  //   document.body.style.backgroundColor = "white";
  //   window.removeEventListener("scroll", changeBodyBackground);
  // }

  return (
    <>
      <div className="App">
        <Router>
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
        </Router>
      </div>
    </>
  );
}

export default App;
