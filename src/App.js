import "./scss/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useCallback } from "react";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/hooks/ScrollToTop";
// import Cursor from "./components/Cursor";

// Pages
import HomeAbout from "./components/about/HomeAbout";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Motion from "./pages/Motion";
import PhotoAlbumsPage from "./pages/PhotoAlbumsPage";
import PageNotFound from "./pages/PageNotFound";

function App() {
  // let location = useLocation();

  // const changeBodyBackground = useCallback(() => {
  //   if (window.scrollY < 300) {
  //     document.body.style.transition = "1s ease";
  //     document.body.style.backgroundColor = "black";
  //   } else {
  //     document.body.style.transition = "1s ease";
  //     document.body.style.backgroundColor = "white";
  //   }
  // })

  // if (location.pathname === "/") {
  //   document.body.style.backgroundColor = "black";
  //   window.addEventListener("scroll", changeBodyBackground);
  // } else {
  //   document.body.style.backgroundColor = "white";
  //   window.removeEventListener("scroll", changeBodyBackground);
  // }

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
              <Route path="/about" element={<HomeAbout />} />
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
