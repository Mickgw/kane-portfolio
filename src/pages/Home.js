import React, { useEffect } from "react";

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
      <PhotoAlbums />
    </>
  );
};

export default Home;
