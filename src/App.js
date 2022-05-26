import "./scss/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
//Components
import Loader from "./components/loader/Loader";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

function App() {
  const [loading, setLoading] = useState(true);
  const pathname = window.location.pathname;

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div key="loader">
          {pathname.replace(/\//g, "") === "" ? (
            <Loader setLoading={setLoading} text="Welcome" />
          ) : (
            <Loader
              setLoading={setLoading}
              text={pathname.replace(/\//g, "")}
            />
          )}
        </motion.div>
      ) : (
        <>
          {!loading && (
            <div className="App">
              <Navbar />
              <Router>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/work" element={<Work />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </Router>
            </div>
          )}
        </>
      )}
    </AnimatePresence>
  );
}

export default App;
