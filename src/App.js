import "./scss/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useCallback } from "react";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Motion from "./pages/Motion";
import PhotoAlbumsPage from "./pages/PhotoAlbumsPage";
import PageNotFound from "./pages/PageNotFound";
import { useEffect } from "react";

function App() {
  let location = useLocation();

  // if (location.pathname === "/") {
  //   window.addEventListener("scroll", () => {
  //     document.body.style.backgroundColor = "black";
  //     if (window.scrollY < 300) {
  //       document.body.style.backgroundColor = "black";
  //     } else {
  //       document.body.style.transition = "1s ease";
  //       document.body.style.backgroundColor = "white";
  //     }
  //   });
  // } else {
  //   document.body.style.backgroundColor = "white";
  // }

  const changeBodyBackground = useCallback(() => {
    if (window.scrollY < 300) {
      document.body.style.transition = "1s ease";
      document.body.style.backgroundColor = "black";
    } else {
      document.body.style.transition = "1s ease";
      document.body.style.backgroundColor = "white";
    }
  })

  if (location.pathname === "/") {
    document.body.style.backgroundColor = "black";
    window.addEventListener("scroll", changeBodyBackground);
  } else {
    document.body.style.backgroundColor = "white";
    window.removeEventListener("scroll", changeBodyBackground);
  }

  // if (location.pathname === "/") {
  //   document.body.style.backgroundColor = "black";

  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY < 300) {
  //       document.body.style.transition = "1s ease";
  //       document.body.style.backgroundColor = "black";
  //     } else {
  //       document.body.style.transition = "1s ease";
  //       document.body.style.backgroundColor = "white";
  //     }
  //   });
  // } else {
  //   window.removeEventListener("scroll", () => {
  //     if (window.scrollY < 300) {
  //       document.body.style.transition = "1s ease";
  //       document.body.style.backgroundColor = "black";
  //     } else {
  //       document.body.style.transition = "1s ease";
  //       document.body.style.backgroundColor = "white";
  //     }
  //   })
  // }

  // window.addEventListener("scroll", () => {
  //   if (location.pathname === "/") {
  //     if (window.scrollY < 300) {
  //       document.body.style.transition = "1s ease";
  //       document.body.style.backgroundColor = "white";
  //     }
  //   }
  // });

  // console.log(location);

  return (
    <>
      <div className="App">
        {/* <Router> */}
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
        {/* </Router> */}
      </div>
    </>
  );
}

export default App;
