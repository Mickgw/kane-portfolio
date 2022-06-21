// import cardBGplaceholder from "../../assets/images/portrait-placeholder1.jpeg";
import photoAlbums from "../../content/photo-albums.json";
import { Link } from "react-router-dom";
// import testCover from "../../assets/images/portrait-placeholder2.jpeg";

const PhotoAlbums = () => {
  return (
    <>
      <span className="divider-text">some photo albums</span>
      <hr className="divider" />

      <div className="photo-albums">
        <div className="container">
          <div className="album-card-grid">
            {photoAlbums.album_list.map((album, index) => {
              return (
                <div className="album-card-container" key={index}>
                  <Link
                    to={`/albums/${album.title
                      .replace(" ", "-")
                      .toLocaleLowerCase()}`}
                  >
                    <div className="album-card">
                      {/* <div
                        className="album-card-bg"
                        style={{ backgroundImage: `url(${album.cover_image})` }}
                      ></div> */}
                      <img className="album-cover" src={album.cover_image}/>
                      <div className="album-card-cover-content">
                        <h2 className="content-header">{album.title}</h2>
                        <span className="content-year-date">{album.year}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
          {/* <div className="album-card-grid2">
            <div className="album-card2">
              <div className="image-container">
                <img className="album-cover" src={testCover} />
              </div>

              <div className="album-info">
                <h2 className="album-card-title">Album title</h2>
                <span className="album-card-year">2021</span>
              </div>
            </div>
            <div className="album-card2">
              <div className="image-container">
                <img className="album-cover" src={testCover} />
              </div>

              <div className="album-info">
                <h2 className="album-card-title">Album title</h2>
                <span className="album-card-year">2021</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default PhotoAlbums;
