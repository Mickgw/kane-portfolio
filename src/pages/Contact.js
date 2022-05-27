import PageLoader from "../components/loader/PageLoader";
import gsap from "gsap";

const Contact = () => {
  const page_loader = gsap.timeline();

  return (
    <>
      <PageLoader timeline={page_loader} />

      <div>This is the Work page</div>
    </>
  );
};

export default Contact;