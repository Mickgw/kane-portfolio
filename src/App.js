import "./scss/main.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/hooks/ScrollToTop";
import MainLoader from "./components/loader/MainLoader";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Motion from "./pages/Motion";
import PhotoAlbumsPage from "./pages/PhotoAlbumsPage";
import PageNotFound from "./pages/PageNotFound";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [routeChanged, setRouteChanged] = useState(true);
  const loaderTimer = 1400; //2700 mili seconds
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  const loader_animation = {
    visible: {
      y: 0,

      transition: {
        ease: [0.2, 0.3, 0.3, 1],
        // ease: "easeIn",
        duration: loaderTimer / 1000 / 2,
      },
    },

    exit: {
      y: "-100vh",

      transition: {
        ease: [0.2, 0.3, 0.3, 1],
        duration: 1,
      },
    },
  };

  return (
    <AnimatePresence>
      {/* {loading ? (
        <motion.div
          className="loader"
          key="loader"
          variants={loader_animation}
          animate="visible"
          exit="exit"
        >
          <MainLoader setLoading={setLoading}/>
        </motion.div>
      ) : ( */}
        <div className="App">
          {/* <Cursor /> */}

          <ScrollToTop />
          <header>
            <Navbar />
          </header>

          <main>
            <Routes onChange={console.log("Route has changed")}>
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
      {/* )} */}
    </AnimatePresence>
  );
}

export default App;
