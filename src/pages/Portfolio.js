
// import test from "../content/photo-albums.json"


// function importAll(r) {
//   return r.keys().map(r);
// }

// const images = importAll(require.context('../content/photo-albums', false, /\.(png|jpe?g|svg)$/));

const Work = () => {


  return (
    <>

    <div>{images['title']}</div>
      {/* <div>{test.title}</div>
      <br></br>
      <div>{test.description}</div> */}
    </>
  );
};

export default Work;
