import Transition from "../components/loader/transition";
import gsap from "gsap";

const About = () => {
  const about = gsap.timeline();

  return (
    <>
      <Transition timeline={about} />

      <div className="about">
        <h1>This is the about page</h1>
      </div>
    </>
  );
};

export default About;
