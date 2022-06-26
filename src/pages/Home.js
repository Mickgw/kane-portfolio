import React, { useRef, useEffect } from "react";
import { gsap, Power2 } from "gsap";

import Banner from "../components/Banner";
import HomeAbout from "../components/about/HomeAbout";
import PhotoAlbums from "../components/albums/PhotoAlbums";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Banner />
      <HomeAbout />
      <PhotoAlbums />
    </>
  );
};

export default Home;
