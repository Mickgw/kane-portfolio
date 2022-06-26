import "./scss/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from "react";

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

// Custom cursor
import CustomCursor from "custom-cursor-react";
import "custom-cursor-react/dist/index.css";

function App() {
  // const [cursorX, setCursorX ] = useState();
  // const [cursorY, setCursorY ] = useState();

  // window.addEventListener('mousedown', (e) => {
  //   setCursorX(e.pageX)
  //   setCursorY(e.pageY)
  // })

  return (
    <>
      <div className="App">
        <CustomCursor
          targets={["button", ".logo", "a"]}
          customClass="custom-cursor"
          dimensions={40}
          fill="white"
          opacity={1}
          smoothness={{
            movement: 0.8,
            scale: 0.1,
          }}
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
              <Route path="/albums/:title" element={<PhotoAlbumsPage />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </main>

          <footer>
            <Footer />
          </footer>

          {/* <div
            className="custom-cursor"
            style={{
              left: cursorX + "px",
              top: cursorY + "px",
            }}
          ></div> */}
        </Router>
      </div>
    </>
  );
}

export default App;
