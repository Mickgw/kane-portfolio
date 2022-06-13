import cardBGplaceholder from "../../assets/images/portrait-placeholder1.jpeg";
import photoAlbums from "../../content/photo-albums.json";
import { Link } from "react-router-dom";

const PhotoAlbums = () => {
  return (
    <>
      <span className="divider-text">some photo albums</span>
      <hr className="divider" />

      <div className="photo-albums">
        <div className="container">
          <div className="album-card-grid">
            {photoAlbums.album_list.length && photoAlbums.album_list.map((album, i) => {
              return (
                <>
                  <div key={i} className="album-card">
                    <div
                      className="album-card-bg"
                      style={{ backgroundImage: `url(${cardBGplaceholder})` }}
                    ></div>
                    <div className="album-card-cover-content">
                      <span className="content-year-date">{album.year}</span>
                      <h2 className="content-header">
                        <Link className="links" to={`/albums/${album.id}`}>
                          {album.title}
                        </Link>
                      </h2>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoAlbums;
