import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

//Components
import PageLoader from "../components/loader/PageLoader";

//Images
import bigPortrait from "../assets/images/image-1-banner.jpeg";


const About = () => {
  const [loading, setLoading] = useState(true);
  const timer_duration = 1400;
  const delayChildrenDuration = 0.1;
  

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
      ? navbar_inner.classList.add("loading")
      : setTimeout(() => navbar_inner.classList.remove("loading"), 600);
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

  useEffect(() => {
    gsap
      .timeline()
      .to(".about", { autoAlpha: 1, duration: 0 })
      .fromTo(
        ".header-text",
        { y: 250, skewY: 5 },
        {
          skewY: 0,
          y: 0,
          duration: 1.5,
          stagger: delayChildrenDuration,
          delay: 0,
        }
      )
      .fromTo(
        ".big-portrait",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
        },
        "-=.9" 
      )
      .fromTo(
        ".about-details-text",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
        },
        "-=.8" 
      );
  });
 

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          className="pageloader"
          key="loader"
          variants={loader_animation}
          exit="exit"
        >
          <PageLoader loaderText="About" />
        </motion.div>
      ) : (
        <div className="about">
          <div className="container">
            <h1>
              <div className="about-header-line">
                <div className="header-text">Kane Jansen.</div>
              </div>
              <div className="about-header-line">
                <div className="header-text">
                  I am currently a <span className="outlined">student</span>
                </div>
              </div>
              <div className="about-header-line">
                <div className="header-text">
                  at{" "}
                  <span className="outlined">Rijn IJssel College Arnhem</span>
                </div>
              </div>
              <div className="about-header-line">
                <div className="header-text">
                  studying{" "}
                  <span className="outlined">Audio Visual Specialist</span>
                </div>
              </div>
            </h1>

            <div className="about-details">
              <div className="about-details-grid">
                <div className="big-portrait">
                  <img
                    className="about-image"
                    src={bigPortrait}
                    alt="big portrait"
                  />
                </div>
                <div className="about-details-text">
                  <p className="about-paragraph">
                    My expertise is art direction, animation and anything
                    interactive. I’ve had over 7 years of industry experience,
                    from working with startups, agencies and international
                    clients from concept to final deliverables.
                  </p>
                  <p className="about-paragraph">
                    My expertise is art direction, animation and anything
                    interactive. I’ve had over 7 years of industry experience,
                    from working with startups, agencies and international
                    clients from concept to final deliverables.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default About;

{
  /* <div className="about-grid">
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
            </div> */
}
