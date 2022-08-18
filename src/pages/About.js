import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageLoader from "../components/loader/PageLoader";

const About = () => {
  const [loading, setLoading] = useState(true);
  const timer_duration = 1400;

  //Set loading to false after time
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, timer_duration);
    return () => clearTimeout(timer);
  });

  //Disbles navbar inner when loading is active, this prevent the logo and menu to be seen on the loader
  useEffect(() => {
    const navbar_inner = document.querySelector("div.navbar-inner");

    loading
      ?  navbar_inner.classList.add("loading")
      :  setTimeout(() => navbar_inner.classList.remove("loading"), 600)
  }, [loading]);

  const loader_animation = {
    exit: {
      y: "-100vh",
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          className="pageloader"
          key="loader"
          variants={loader_animation}
          exit="exit"
        >
          <PageLoader loaderText="About"/>
        </motion.div>
      ) : (
        <div className="about">
          <div className="container">
          <h1>
                <div className="home-about-content-line">
                  <div
                    id="header-content-line"
                    className="home-about-content-line-inner"
                  >
                    I am currently a <span className="bolded">student</span>
                  </div>
                </div>
                <div className="home-about-content-line">
                  <div
                    id="header-content-line"
                    className="home-about-content-line-inner"
                  >
                    at <span className="bolded">Rijn IJssel Arnhem</span>{" "}
                    studying
                  </div>
                </div>
                <div className="home-about-content-line">
                  <div
                    id="header-content-line"
                    className="home-about-content-line-inner"
                  >
                    <span className="bolded">audio visual specialist</span>
                  </div>
                </div>
              </h1>
            {/* <div className="about-grid">
              <div className="about-text">
                <div className="about-header">
                  <h2 className="about-header-title">Hey, I am Kane Jansen</h2>
                </div>
                <div className="about-paragraph">
                  <p>
                    Lorem ipsum dolor sit amet. Qui nisi voluptatem aut
                    exercitationem fuga quo quasi sed Quis numquam qui autem
                    quaerat id quidem voluptas aut dicta beatae. Sit
                    perspiciatis tenetur est optio sapiente aut magnam labore
                    eum voluptas consequatur et quae iste qui iusto neque. Non
                    assumenda earum rem doloremque veritatis et asperiores
                    doloribus id illo quos.
                  </p>

                  <p>
                    Ut repellendus quod et velit minus aut nostrum obcaecati in
                    voluptatem unde et voluptas incidunt a consectetur facilis!
                    Non minima vitae cum commodi maiores ea quaerat numquam 33
                    nihil quisquam non culpa sequi eos saepe architecto. Et
                    quibusdam nemo ea delectus sequi sit quae aliquid a omnis
                    autem ea galisum voluptatem aut blanditiis repudiandae ut
                    animi nobis.
                  </p>

                  <p>
                    Facilis totam eos sapiente reiciendis id expedita voluptas
                    in unde incidunt sit harum vero aut error quaerat ut
                    internos molestias. Ut omnis incidunt sit laboriosam tenetur
                    est sequi sapiente sit earum voluptatibus et nihil expedita
                    ut cumque ratione. Et recusandae accusamus qui quia ducimus
                    et quam dolorem qui nesciunt corrupti aut itaque velit At
                    error debitis.
                  </p>
                </div>
                <div className="services-and-tools">
                  <div className="divider-text">my services</div>
                  <h3 className="services">
                    Photography
                    <em> / </em>
                    Videography
                  </h3>
                </div>
                <div className="services-and-tools">
                  <div className="divider-text">tools i use</div>
                  <h3 className="tools">
                    Illustrator
                    <em> / </em>
                    Photoshop
                    <em> / </em>
                    After Effects
                    <em> / </em>
                    Lightroom
                  </h3>
                </div>
              </div>
              <div className="about-images">
                <img className="image one" src={portait1} alt="left" />
                <img className="image two" src={portait2} alt="right" />
              </div>
            </div> */}
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default About;
