import { useState, useEffect } from "react";
import Loader from "../components/loader/Loader";
import { useInView } from "react-intersection-observer";

var isVisible = null;

const About = () => {
  const [loading, setLoading] = useState(true);
  const [ref, elementInView] = useInView();

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  useEffect(() => {
    console.log("isVisible waarde is", isVisible)
  })

  //Test
  // useEffect(() => {
  //   if (elementInView) {
  //     isVisible = true;
  //     console.log("About page nu inView");
  //   } else {
  //     isVisible = false;
  //     console.log("About page niet inView");
  //   }
  // });

  return (
    <>
      {loading ? (
        <div key="loader">
          <Loader setLoading={setLoading} text="LOADING" />
        </div>
      ) : (
        <>
          {!loading && (
            <div ref={ref}>
              <h1>ABOUT PAGE YESSIR</h1>
            </div>
          )}
        </>
      )}
    </>
  );
};

export {isVisible};
export default About;
