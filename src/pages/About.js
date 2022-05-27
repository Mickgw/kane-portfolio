import PageLoader from "../components/loader/PageLoader";
import gsap from "gsap";

const About = () => {
  const page_loader = gsap.timeline();

  return (
    <>
      <PageLoader timeline={page_loader} />

      <div className="about">
        <h1>This is the about page</h1>
      </div>
    </>
  );
};

export default About;
